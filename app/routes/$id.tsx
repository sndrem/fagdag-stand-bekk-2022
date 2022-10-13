import type { Konvertering } from "@prisma/client";
import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import path from "path";
import { oversettMode } from "~/utils/oversetter";
import { PhotoAttribution } from "../components/PhotoAttribution";
import { prisma } from "../lib/db.server";
import type { Metadata } from "../services/sqip/fraUnsplash";

export const loader: LoaderFunction = async ({ params }) => {
    const { id } = params;

    const stegSomSkalVises = [10, 30, 50, 100, 300, 500];
    const bilderFraDb = await prisma.konvertering.findMany({
        where: {
            unsplashId: id,
            OR: stegSomSkalVises.map((numberOfPrimitives) => ({
                numberOfPrimitives,
            })),
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
            <div className="side">
                <h1>Resultat</h1>
                <p>
                    Original størrelse på bilde:{" "}
                    {parseInt(metadata.originalStorrelse).toFixed(2)} MB
                </p>
                <img
                    className="stort-bilde"
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
                <Link
                    className="hovedknapp"
                    to={`/unsplash/${metadata?.unsplashResponse?.response?.id}`}
                >
                    Tegn på nytt
                </Link>

                <h1>Tegnede bilder</h1>
                <div className="bilderutenett bilderutenett--stort">
                    {data?.map((result) => {
                        const metadata = JSON.parse(
                            result.metadata
                        ) as Metadata;

                        return (
                            <div
                                className="bilderute bilderute--behold-ratio"
                                key={result.id}
                            >
                                <Link
                                    to={`../unsplash/view/${
                                        metadata.unsplashResponse?.response?.id
                                    }/${path.basename(
                                        metadata.resultatSvgPath
                                    )}`}
                                >
                                    <img
                                        src={`/${metadata.resultatSvgPath}`}
                                        alt="SVG av originalbilde"
                                    />
                                </Link>
                                <div className="bildestats">
                                    <h3>
                                        <span>
                                            {result.numberOfPrimitives}{" "}
                                        </span>
                                        <span>{oversettMode(result.mode)}</span>
                                        <span> på </span>
                                        <span>
                                            {metadata.nyStorrelse?.substring(
                                                0,
                                                5
                                            )}{" "}
                                            MB
                                        </span>
                                    </h3>

                                    <small>
                                        Du sparer {metadata.prosentSpart} %
                                    </small>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <Link className="hovedknapp" to="/search">
                    Nytt søk
                </Link>
            </div>
        </>
    );
}
