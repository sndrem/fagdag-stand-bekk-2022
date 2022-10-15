import type { Konvertering } from "@prisma/client";
import { Link, useLoaderData, useParams } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import Ikon from "~/components/Ikon";
import { oversettMode } from "~/utils/oversetter";
import { PhotoAttribution } from "../../../../components/PhotoAttribution";
import { prisma } from "../../../../lib/db.server";
import type { Metadata } from "../../../../services/sqip/fraUnsplash";

export const loader: LoaderFunction = async ({ params }) => {
    const { id, mode } = params;

    const stegSomSkalVises = [10, 30, 50, 100, 300, 500];
    const bilderFraDb = await prisma.konvertering.findMany({
        where: {
            unsplashId: id,
            mode: parseInt(mode || "0"),
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
    const { id, mode } = useParams();
    const data = useLoaderData<Konvertering[]>();

    const metadata = JSON.parse(data[0].metadata) as Metadata;
    const unsplash = metadata.unsplashResponse?.response;

    return (
        <>
            <div className="side">
                <h1>Resultat</h1>
                <div className="side-header">
                    <Link className="tilbakelenke" to={`/unsplash/${id}`}>
                        ← Tegn bilde
                    </Link>
                    <p className="stor-tekst">
                        Original størrelse på bilde:{" "}
                        {formaterBytes(metadata.originalStorrelse)}
                    </p>
                    <span />
                </div>
                <img
                    className="stort-bilde"
                    src={`/${metadata.nedlastetBildePath}`}
                    alt={
                        metadata.unsplashResponse?.response?.alt_description ||
                        "originalbilde"
                    }
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

                <h1>Tegnet med {oversettMode(parseInt(mode || "0"))}</h1>
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
                                    to={`/result/${id}/${mode}/${metadata.numberOfPrimitives}`}
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
                                            {formaterBytes(
                                                metadata.nyStorrelse
                                            )}
                                        </span>
                                    </h3>

                                    <small>
                                        {formaterProsentSpart(
                                            metadata.prosentSpart
                                        )}
                                        % av originalbildet
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

export const formaterBytes = (bytes: number) => {
    if (bytes > 1000000) {
        return `${(bytes / 1000000).toFixed(2)} megabytes`;
    } else if (bytes > 1000) {
        const kilobytes = bytes / 1000;
        const avrundet =
            kilobytes > 5 ? Math.round(kilobytes) : kilobytes.toFixed(2);

        return `${avrundet} kilobytes`;
    } else {
        return `${bytes} bytes`;
    }
};

export const formaterProsentSpart = (desimal: number) => {
    const prosent = (1 - desimal) * 100;

    return prosent < 1 ? prosent.toFixed(2) : Math.round(prosent);
};
