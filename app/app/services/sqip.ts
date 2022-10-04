import colors from "colors";
import type { Stats } from "fs";
import fsPromise from "fs/promises";
import path from "path";
import type { SqipPluginOptions, SqipResult } from "sqip";
import { sqip } from "sqip";
import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { Full } from "unsplash-js/dist/methods/photos/types";
import { downloadImage } from "./imageDownloadService";
import { getPhotoById } from "./unsplash";

import { prisma } from "../lib/db.server";
import { Konvertering } from "@prisma/client";

export const log = {
  success: (message: string) => console.log(colors.green(message)),
};

function regnUtStorrelseIMB(fil: Stats): number {
  return fil.size / (1024 * 1024);
}

function regnUtBesparelseIProsent(
  original: number,
  nyStorrelse: number
): number {
  const x = original - nyStorrelse;
  return (x / original) * 100;
}

async function lagreFilTilMappe(destination: string, content: any) {
  await fsPromise.writeFile(destination, content);
}

export interface Metadata {
  originalStorrelse: string;
  nyStorrelse: string;
  prosentSpart: string;
  nedlastetBildePath: string;
  resultatSvgPath: string;
  unsplashResponse: ApiResponse<Full> | undefined;
}

export async function fetchFromUnsplashAndRunThroughSqip(
  photoId: string
): Promise<Konvertering> {
  const metadataFinnesFraFor = await prisma.konvertering.findFirst({
    where: { unsplashId: photoId },
  });

  if (metadataFinnesFraFor) {
    const metadata = JSON.parse(metadataFinnesFraFor.metadata) as Metadata;
    return {
      ...metadataFinnesFraFor,
      ...metadata,
    };
  }

  log.success(`Søker etter bilder av: ${photoId}`);
  const unsplashResponse = await getPhotoById(photoId);

  const destUrl = (unsplashResponse?.response?.urls.raw ?? "") + ".png";
  const nedlastetBildePath = `${path.dirname(
    __dirname
  )}/public/images/${photoId}.png`;
  log.success("Laster ned bilde...");
  await downloadImage(destUrl, nedlastetBildePath);
  log.success(`Bilde er lastet ned og kan sees her: ${nedlastetBildePath}`);
  const options = {
    numberOfPrimitives: 500,
    mode: 1,
    rep: 100,
    blur: 0,
  };
  log.success(
    `Kjører bilde gjennom Sqip med følgende parameter: ${JSON.stringify(
      options,
      null,
      2
    )}`
  );

  const result = (await sqip({
    input: nedlastetBildePath,
    plugins: [
      {
        name: "sqip-plugin-primitive",
        options,
      },
      "sqip-plugin-svgo",
    ],
  })) as Partial<SqipResult>;

  const resultatSvgPath = `${path.dirname(
    __dirname
  )}/public/images/${photoId}-${options.numberOfPrimitives}.svg`;
  await lagreFilTilMappe(resultatSvgPath, result.content);
  log.success("Ferdig med konvertering i Sqip!");
  const original = await fsPromise.stat(nedlastetBildePath);
  const resultat = await fsPromise.stat(resultatSvgPath);

  const originalStorrelse = regnUtStorrelseIMB(original);
  const nyStorrelse = regnUtStorrelseIMB(resultat);
  log.success(`Original størrelse i MB: ${originalStorrelse.toFixed(2)}`);
  log.success(`Ny størrelse i MB: ${nyStorrelse.toFixed(10)}`);
  const prosentSpart = regnUtBesparelseIProsent(
    originalStorrelse,
    nyStorrelse
  ).toFixed(2);
  log.success(`Du har spart: ${prosentSpart}%`);
  const jsonResult = {
    originalStorrelse: originalStorrelse.toString(),
    nyStorrelse: nyStorrelse.toFixed(10),
    prosentSpart,
    nedlastetBildePath: path.join("images", path.basename(nedlastetBildePath)),
    resultatSvgPath: path.join("images", path.basename(resultatSvgPath)),
    unsplashResponse,
  };
  const konverteringsresultater = await prisma.konvertering.create({
    data: {
      unsplashId: unsplashResponse?.response?.id!!,
      metadata: JSON.stringify(jsonResult),
      blur: options.blur,
      mode: options.mode,
      numberOfPrimitives: options.numberOfPrimitives,
      pathOriginalbilde: jsonResult.nedlastetBildePath,
      pathSvgBilde: jsonResult.resultatSvgPath,
    },
  });
  return konverteringsresultater;
}
