import type { Konvertering } from "@prisma/client";
import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import type { Metadata } from "~/services/sqip/fraUnsplash";
import { fetchFromUnsplashAndRunThroughSqip } from "~/services/sqip/fraUnsplash";
import { PhotoAttribution } from "../../components/PhotoAttribution";

export const loader: LoaderFunction = async ({ params }) => {
    const photoId = params.photoId;

    if (!photoId) {
        throw json({ message: "Unsplash id er tom" }, 409);
    }

    const alternativeImages = [10, 50, 100, 300, 500, 1000];

    const result: Konvertering[] = [];
    await Promise.all(
        alternativeImages.map(async (numOfPrimitive) => {
            const resultatFraKonvertering =
                await fetchFromUnsplashAndRunThroughSqip(
                    photoId,
                    numOfPrimitive
                );
            result.push(...resultatFraKonvertering);
        })
    );

    return json(
        {
            result: result.sort(
                (a, b) => a.numberOfPrimitives - b.numberOfPrimitives
            ),
        },
        200
    );
};

export default function UnsplashUrl() {
    const data = useLoaderData<{ result: Konvertering[] }>();
    const metadata = JSON.parse(data.result[0].metadata) as Metadata;
    const unsplash = metadata.unsplashResponse?.response;

    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold">Originalbilde</h1>
            <p>
                Original størrelse på bilde:{" "}
                {parseInt(metadata.originalStorrelse).toFixed(2)} MB
            </p>
            <img
                className="w-2/5"
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
                <h1 className="text-center font-bold">
                    SVG etter konvertering
                </h1>

                <div className="grid grid-cols-3 gap-10">
                    {data.result.map((result) => {
                        const metadata = JSON.parse(
                            result.metadata
                        ) as Metadata;
                        return (
                            <div className="mb-10" key={result.id}>
                                <p>
                                    Ny størrelse på bilde:{" "}
                                    {metadata.nyStorrelse} MB
                                </p>
                                <img
                                    src={`/${metadata.resultatSvgPath}`}
                                    alt="SVG av originalbilde"
                                />
                                <p>
                                    Antall primitives:{" "}
                                    {result.numberOfPrimitives}
                                </p>
                                <p>Du sparer {metadata.prosentSpart} %</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Link className="rounded-md bg-accent py-5 px-10" to="/search">
                Nytt søk
            </Link>
        </div>
    );
}
