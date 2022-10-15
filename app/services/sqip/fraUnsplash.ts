import path from "path";
import { prisma } from "../../lib/db.server";
import { downloadImage } from "../imageDownloadService";
import { getPhotoById } from "../unsplash";
import { beregnStatistikk } from "./statistikk";

import type { Konvertering } from "@prisma/client";
import type { ApiResponse } from "unsplash-js/dist/helpers/response";
import type { Full } from "unsplash-js/dist/methods/photos/types";
import { convertToPrimitives, getAllSteps } from "./primitive";
import { defaultPrimitiveOptions } from "./primitive";
import type { PrimitiveOptions } from "./types";

export interface Metadata {
    originalStorrelse: number;
    nyStorrelse: number;
    prosentSpart: number;
    nedlastetBildePath: string;
    resultatSvgPath: string;
    unsplashResponse: ApiResponse<Full> | undefined;
    numberOfPrimitives: number;
}

async function genererSqipBilde(
    unsplashResponse: ApiResponse<Full>,
    nedlastetBildePath: string,
    resultatSvgPath: string,
    options: PrimitiveOptions
): Promise<Metadata[]> {
    await convertToPrimitives(nedlastetBildePath, resultatSvgPath, options);
    const { numberOfPrimitives, nth } = options;

    let allSteps = [numberOfPrimitives];
    if (nth && nth > 0) {
        allSteps = getAllSteps(numberOfPrimitives, nth);
    }

    return Promise.all(
        allSteps.map(async (step: number) => {
            const outputImage = resultatSvgPath.replace("%d", String(step));

            const { originalStørrelse, nyStørrelse, prosentSpart } =
                await beregnStatistikk(nedlastetBildePath, outputImage);

            return {
                originalStorrelse: originalStørrelse,
                nyStorrelse: nyStørrelse,
                prosentSpart,
                nedlastetBildePath: path.join(
                    "images",
                    path.basename(nedlastetBildePath)
                ),
                resultatSvgPath: path.join(
                    "images",
                    path.basename(outputImage)
                ),
                numberOfPrimitives: step,
                unsplashResponse,
            };
        })
    );
}

export async function fetchFromUnsplashAndRunThroughSqip(
    photoId: string,
    primitiveOptions: Partial<PrimitiveOptions>
): Promise<Konvertering[]> {
    const allOptions = {
        ...defaultPrimitiveOptions,
        ...primitiveOptions,
    };

    const { numberOfPrimitives, nth, mode } = allOptions;
    console.log(
        `Kjører primitive med ${numberOfPrimitives}, lagrer hvert ${nth}. steg ...`
    );

    const metadataFinnesFraFor = await prisma.konvertering.findMany({
        where: { unsplashId: photoId, numberOfPrimitives, mode },
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

    const bildePath = `${path.dirname(__dirname)}/public/images`;
    const nedlastetBildePath = `${bildePath}/${photoId}.png`;

    await downloadImage(unsplashUrl, nedlastetBildePath);

    const resultatSvgPath = `${bildePath}/${unsplashResponse?.response?.id}-%d-${mode}.svg`;

    const konverteringer = await genererSqipBilde(
        unsplashResponse!,
        nedlastetBildePath,
        resultatSvgPath,
        allOptions
    );

    const lagredeKonverteringer = konverteringer.map(async (konvertering) => {
        return await prisma.konvertering.create({
            data: {
                unsplashId: unsplashResponse?.response?.id!!,
                metadata: JSON.stringify(konvertering),
                blur: 0,
                mode,
                numberOfPrimitives: konvertering.numberOfPrimitives,
                pathOriginalbilde: konvertering.nedlastetBildePath,
                pathSvgBilde: konvertering.resultatSvgPath,
            },
        });
    });

    return Promise.all(lagredeKonverteringer);
}

const delay = async (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
