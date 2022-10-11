import type { Konvertering } from "@prisma/client";
import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import path from "path";
import { PhotoAttribution } from "../components/PhotoAttribution";
import { prisma } from "../lib/db.server";
import type { Metadata } from "../services/sqip/fraUnsplash";
import { oversettMode } from "../utils/oversetter";

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

    return json({ result: bilderFraDb });
};

export default function VisBilde() {
    const data = useLoaderData<{ result: Konvertering[] }>();

    const metadata = JSON.parse(data.result[0].metadata) as Metadata;
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
                        {data?.result.map((result) => {
                            const metadata = JSON.parse(
                                result.metadata
                            ) as Metadata;
                            return (
                                <div
                                    className="prose mb-10 text-center"
                                    key={result.id}
                                >
                                    <p className="m-0 p-0">
                                        Antall primitives:{" "}
                                    </p>
                                    <p className="m-0 p-0">
                                        {result.numberOfPrimitives}
                                    </p>
                                    <p className="m-0 p-0">Modus: </p>
                                    <p className="m-0 p-0">
                                        {oversettMode(result.mode)}
                                    </p>
                                    <Link
                                        className="mt-5 block rounded-xl bg-skyfriKontrast no-underline "
                                        to={`../unsplash/view/${
                                            metadata.unsplashResponse?.response
                                                ?.id
                                        }/${path.basename(
                                            metadata.resultatSvgPath
                                        )}`}
                                    >
                                        <img
                                            src={`/${metadata.resultatSvgPath}`}
                                            alt="SVG av originalbilde"
                                            className="m-0 bg-slate-50 object-cover p-2 p-0 shadow-2xl drop-shadow-2xl"
                                        />
                                    </Link>
                                    <p className="mt-5 mb-0">
                                        {metadata.nyStorrelse?.substring(0, 5)}{" "}
                                        MB
                                    </p>
                                    <p className="m-0 p-0">
                                        Du sparer {metadata.prosentSpart} %
                                    </p>
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
