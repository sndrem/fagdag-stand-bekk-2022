import type { Konvertering } from "@prisma/client";
import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import path from "path";
import { PhotoAttribution } from "../components/PhotoAttribution";
import { SvgImage } from "../components/SvgImage";
import { prisma } from "../lib/db.server";
import type { Metadata } from "../services/sqip/fraUnsplash";

export const loader: LoaderFunction = async ({ params }) => {
    const { id } = params;
    const bilderFraDb = await prisma.konvertering.findMany({
        where: {
            unsplashId: id,
        },
        orderBy: [
            {
                mode: "asc",
            },
            {
                numberOfPrimitives: "asc",
            },
        ],
    });

    return json(bilderFraDb);
};

export default function VisBilde() {
    const data = useLoaderData<Konvertering[]>();

    const metadata = JSON.parse(data[0].metadata) as Metadata;
    const unsplash = metadata.unsplashResponse?.response;
    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="font-bold">Originalbilde</h1>
                <p>
                    Original størrelse på bilde:{" "}
                    {parseInt(metadata.originalStorrelse).toFixed(2)} MB
                </p>
                <img
                    className="mb-5 max-h-96  bg-slate-50 object-cover p-2 shadow-2xl drop-shadow-2xl"
                    src={`/${metadata.nedlastetBildePath}`}
                    alt="Originalbilde"
                />
                <p>
                    {unsplash?.exif.aperture} / {unsplash?.exif.exposure_time} -{" "}
                    {unsplash?.exif.model}
                </p>
                <PhotoAttribution
                    attributionLink={unsplash?.links.html ?? ""}
                    photoBy={unsplash?.user.name ?? ""}
                    userProfileLink={unsplash?.user.links.html ?? ""}
                />
                <div className="mt-10">
                    <h1 className="mb-5 text-center font-bold">
                        SVG etter konvertering
                    </h1>

                    <div className="grid gap-10 sm:grid-cols-3 lg:grid-cols-6">
                        {data.map((result) => {
                            const metadata = JSON.parse(
                                result.metadata
                            ) as Metadata;
                            return (
                                <div
                                    className="prose mb-10 text-center"
                                    key={result.id}
                                >
                                    <Link
                                        className="mt-5 block rounded-xl bg-skyfriKontrast no-underline "
                                        to={`../unsplash/view/${
                                            metadata.unsplashResponse?.response
                                                ?.id
                                        }/${path.basename(
                                            metadata.resultatSvgPath
                                        )}`}
                                    >
                                        <SvgImage
                                            metadata={metadata}
                                            result={
                                                result as unknown as Konvertering
                                            }
                                        />
                                    </Link>

                                    <Link
                                        className="mt-5 block rounded-xl bg-skyfriKontrast p-2 no-underline "
                                        to={`../unsplash/view/${
                                            metadata.unsplashResponse?.response
                                                ?.id
                                        }/${path.basename(
                                            metadata.resultatSvgPath
                                        )}`}
                                    >
                                        Print meg som klistremerke
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <Link className="rounded-md bg-accent py-5 px-10" to="/search">
                    Nytt søk
                </Link>
            </div>
        </>
    );
}
