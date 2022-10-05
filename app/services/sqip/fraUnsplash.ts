import { downloadImage } from "../imageDownloadService";
import { getPhotoById } from "../unsplash";
import { prisma } from "../../lib/db.server";
import path from "path";
import { beregnStatistikk } from "./statistikk";
import { log } from "../log";

import type { ApiResponse } from "unsplash-js/dist/helpers/response";
import type { Full } from "unsplash-js/dist/methods/photos/types";
import type { Konvertering } from "@prisma/client";
import { convertToPrimitives, defaultPrimitiveOptions } from "./sqip";

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
    const bildePath = `${path.dirname(__dirname)}/public/images`;
    const nedlastetBildePath = `${bildePath}/${photoId}.png`;

    log.success("Laster ned bilde...");
    await downloadImage(destUrl, nedlastetBildePath);
    log.success(`Bilde er lastet ned og kan sees her: ${nedlastetBildePath}`);

    let options = defaultPrimitiveOptions;
    const resultatSvgPath = `${bildePath}/${photoId}-${options.numberOfPrimitives}.svg`;

    log.success(
        `Kjører bilde gjennom Sqip med følgende parameter: ${JSON.stringify(
            options,
            null,
            2
        )}`
    );

    await convertToPrimitives(nedlastetBildePath, resultatSvgPath);

    log.success("Ferdig med konvertering i Sqip!");

    const { originalStørrelse, nyStørrelse, prosentSpart } =
        await beregnStatistikk(nedlastetBildePath, resultatSvgPath);

    log.success(`Original størrelse i MB: ${originalStørrelse.toFixed(2)}`);
    log.success(`Ny størrelse i MB: ${nyStørrelse.toFixed(10)}`);
    log.success(`Du har spart: ${prosentSpart}%`);

    const jsonResult = {
        originalStorrelse: originalStørrelse.toFixed(2),
        nyStorrelse: nyStørrelse.toFixed(10),
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