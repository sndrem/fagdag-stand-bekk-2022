import { downloadImage } from "../imageDownloadService";
import { getPhotoById } from "../unsplash";
import { prisma } from "../../lib/db.server";
import { sqip, SqipCliOptionDefinition } from "sqip";
import fsPromise from "fs/promises";
import path from "path";

import type { ApiResponse } from "unsplash-js/dist/helpers/response";
import type { Full } from "unsplash-js/dist/methods/photos/types";
import type { Konvertering } from "@prisma/client";
import type { SqipResult } from "sqip";
import { regnUtBesparelseIProsent, regnUtStorrelseIMB } from "./statistikk";
import { log } from "../log";
import { PrimitiveOptions, SqipOptions } from "./types";

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

const defaultOptions: PrimitiveOptions = {
    numberOfPrimitives: 500,
    mode: 1,
    rep: 100,
};

export const convertToPrimitives = async (
    imagePath: string,
    primitiveOptions: PrimitiveOptions = defaultOptions
): Promise<SqipResult> => {
    return (await sqip({
        input: imagePath,
        plugins: [
            {
                name: "sqip-plugin-primitive",
                options: primitiveOptions,
            },
            "sqip-plugin-svgo",
        ],
    })) as SqipResult;
};

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

    let options = defaultOptions;

    log.success(
        `Kjører bilde gjennom Sqip med følgende parameter: ${JSON.stringify(
            options,
            null,
            2
        )}`
    );

    const result = await convertToPrimitives(nedlastetBildePath);

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
        nedlastetBildePath: path.join(
            "images",
            path.basename(nedlastetBildePath)
        ),
        resultatSvgPath: path.join("images", path.basename(resultatSvgPath)),
        unsplashResponse,
    };

    const konverteringsresultater = await prisma.konvertering.create({
        data: {
            unsplashId: unsplashResponse?.response?.id!!,
            metadata: JSON.stringify(jsonResult),
            blur: 0,
            mode: options.mode,
            numberOfPrimitives: options.numberOfPrimitives,
            pathOriginalbilde: jsonResult.nedlastetBildePath,
            pathSvgBilde: jsonResult.resultatSvgPath,
        },
    });
    return konverteringsresultater;
}
