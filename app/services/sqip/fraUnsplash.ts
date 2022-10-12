import path from "path";
import { prisma } from "../../lib/db.server";
import { downloadImage } from "../imageDownloadService";
import { log } from "../log";
import { getPhotoById } from "../unsplash";
import { beregnStatistikk } from "./statistikk";

import type { Konvertering } from "@prisma/client";
import type { ApiResponse } from "unsplash-js/dist/helpers/response";
import type { Full } from "unsplash-js/dist/methods/photos/types";
import { convertToPrimitives } from "./primitive";
import { defaultPrimitiveOptions } from "./sqip";
import type { PrimitiveOptions } from "./types";

export interface Metadata {
    originalStorrelse: string;
    nyStorrelse: string;
    prosentSpart: string;
    nedlastetBildePath: string;
    resultatSvgPath: string;
    unsplashResponse: ApiResponse<Full> | undefined;
}

async function genererSqipBilde(
    unsplashResponse: ApiResponse<Full>,
    nedlastetBildePath: string,
    resultatSvgPath: string,
    options: PrimitiveOptions
) {
    await convertToPrimitives(nedlastetBildePath, resultatSvgPath, options);

    const { originalStørrelse, nyStørrelse, prosentSpart } =
        await beregnStatistikk(nedlastetBildePath, resultatSvgPath);

    const jsonResult: Metadata = {
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

    return jsonResult;
}

export async function fetchFromUnsplashAndRunThroughSqip(
    photoId: string,
    geometriMode: number,
    numberOfPrimitives: number = 500
): Promise<Konvertering[]> {
    // TODO Her må vi også sjekke mode, number of primitives og blur
    const metadataFinnesFraFor = await prisma.konvertering.findMany({
        where: { unsplashId: photoId, numberOfPrimitives, mode: geometriMode },
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

    log.success(`Søker etter bilder av: ${photoId}`);

    const unsplashResponse = await getPhotoById(photoId);
    const unsplashUrl = (unsplashResponse?.response?.urls.raw ?? "") + ".png";

    const bildePath = `${path.dirname(__dirname)}/public/images`;
    const nedlastetBildePath = `${bildePath}/${photoId}.png`;

    await downloadImage(unsplashUrl, nedlastetBildePath);

    let options = {
        ...defaultPrimitiveOptions,
        numberOfPrimitives,
        mode: geometriMode,
    };

    const resultatSvgPath = `${bildePath}/${unsplashResponse?.response?.id}-${options.numberOfPrimitives}-${options.mode}.svg`;

    const konvertering = await genererSqipBilde(
        unsplashResponse!,
        nedlastetBildePath,
        resultatSvgPath,
        options
    );

    const savedKonvertering = await prisma.konvertering.create({
        data: {
            unsplashId: unsplashResponse?.response?.id!!,
            metadata: JSON.stringify(konvertering),
            blur: 0,
            mode: options.mode,
            numberOfPrimitives: options.numberOfPrimitives,
            pathOriginalbilde: konvertering.nedlastetBildePath,
            pathSvgBilde: konvertering.resultatSvgPath,
        },
    });
    return [savedKonvertering];
}
