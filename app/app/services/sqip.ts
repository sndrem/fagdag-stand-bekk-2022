import { Konvertering } from "@prisma/client";
import type { Stats } from "fs";
import fsPromise from "fs/promises";
import path from "path";
import type { PluginOptions, SqipResult } from "sqip";
import { sqip } from "sqip";
import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { Full } from "unsplash-js/dist/methods/photos/types";
import { prisma } from "../lib/db.server";
import { downloadImage } from "./imageDownloadService";
import { getPhotoById } from "./unsplash";

export interface Metadata {
  originalStorrelse: string;
  nyStorrelse: string;
  prosentSpart: string;
  nedlastetBildePath: string;
  resultatSvgPath: string;
  unsplashResponse: ApiResponse<Full> | undefined;
}

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

async function genererSqipBilde(
  unsplashResponse: ApiResponse<Full>,
  nedlastetBildePath: string,
  options: PluginOptions
) {
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

  // TODO Her må vi også lagre med blur, numberOfPrimitives og mode for svg-filen
  const resultatSvgPath = `${path.dirname(__dirname)}/public/images/${
    unsplashResponse?.response?.id
  }-${options.numberOfPrimitives}.svg`;
  await lagreFilTilMappe(resultatSvgPath, result.content);

  const original = await fsPromise.stat(nedlastetBildePath);
  const resultat = await fsPromise.stat(resultatSvgPath);

  const originalStorrelse = regnUtStorrelseIMB(original);
  const nyStorrelse = regnUtStorrelseIMB(resultat);

  const prosentSpart = regnUtBesparelseIProsent(
    originalStorrelse,
    nyStorrelse
  ).toFixed(2);

  const jsonResult: Metadata = {
    originalStorrelse: originalStorrelse.toString(),
    nyStorrelse: nyStorrelse.toFixed(10),
    prosentSpart,
    nedlastetBildePath: path.join("images", path.basename(nedlastetBildePath)),
    resultatSvgPath: path.join("images", path.basename(resultatSvgPath)),
    unsplashResponse,
  };
  return jsonResult;
}

export async function fetchFromUnsplashAndRunThroughSqip(
  photoId: string,
  numberOfPrimitives: number = 500
): Promise<Konvertering[]> {
  // TODO Her må vi også sjekke mode, number of primitives og blur
  const metadataFinnesFraFor = await prisma.konvertering.findMany({
    where: { unsplashId: photoId, numberOfPrimitives },
    orderBy: { numberOfPrimitives: "asc" },
  });

  if (metadataFinnesFraFor.length) {
    return metadataFinnesFraFor.map<Konvertering>((meta) => {
      const metadata = JSON.parse(meta.metadata) as Metadata;
      return {
        ...metadata,
        ...meta,
      };
    });
  }

  const unsplashResponse = await getPhotoById(photoId);
  const unsplashUrl = (unsplashResponse?.response?.urls.raw ?? "") + ".png";
  const nedlastetBildePath = `${path.dirname(
    __dirname
  )}/public/images/${photoId}.png`;

  await downloadImage(unsplashUrl, nedlastetBildePath);
  const options = {
    numberOfPrimitives,
    mode: 1,
    blur: 0,
  };

  const konvertering = await genererSqipBilde(
    unsplashResponse!,
    nedlastetBildePath,
    options
  );

  const savedKonvertering = await prisma.konvertering.create({
    data: {
      unsplashId: unsplashResponse?.response?.id!!,
      metadata: JSON.stringify(konvertering),
      blur: options.blur,
      mode: options.mode,
      numberOfPrimitives: options.numberOfPrimitives,
      pathOriginalbilde: konvertering.nedlastetBildePath,
      pathSvgBilde: konvertering.resultatSvgPath,
    },
  });
  return [savedKonvertering];
}
