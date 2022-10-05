import { Konvertering } from "@prisma/client";
import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import { PhotoAttribution } from "../../components/PhotoAttribution";
import {
    fetchFromUnsplashAndRunThroughSqip,
    Metadata,
} from "../../services/sqip";

export const loader: LoaderFunction = async ({ params }) => {
    const photoId = params.photoId;

    if (!photoId) {
        throw json({ message: "Unsplash id er tom" }, 409);
    }

    const resultatFraKonvertering = await fetchFromUnsplashAndRunThroughSqip(
        photoId
    );
    return json({ result: resultatFraKonvertering }, 200);
};

export default function UnsplashUrl() {
    const data = useLoaderData<{ result: Konvertering }>();
    const metadata = JSON.parse(data.result.metadata) as Metadata;

    const unsplash = metadata.unsplashResponse?.response;

    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 gap-20 text-center">
                <div>
                    <h1 className="font-bold">Originalbilde</h1>
                    <p>
                        Original størrelse på bilde:{" "}
                        {parseInt(metadata.originalStorrelse).toFixed(2)} MB
                    </p>
                    <img
                        src={`/${metadata.nedlastetBildePath}`}
                        alt="Originalbilde"
                    />
                    <p>
                        {unsplash?.exif.aperture} /{" "}
                        {unsplash?.exif.exposure_time} - {unsplash?.exif.model}
                    </p>
                    <PhotoAttribution
                        attributionLink={unsplash?.links.html ?? ""}
                        photoBy={unsplash?.user.name ?? ""}
                        userProfileLink={unsplash?.user.links.html ?? ""}
                    />
                </div>
                <div>
                    <h1 className="font-bold">SVG etter konvertering</h1>
                    <p>Ny størrelse på bilde: {metadata.nyStorrelse} MB</p>
                    <img
                        src={`/${metadata.resultatSvgPath}`}
                        alt="SVG av originalbilde"
                    />
                    <p>Antall primitives: {data.result.numberOfPrimitives}</p>
                </div>
            </div>
            <div className="m-5">
                <p className="text-2xl">Du sparer {metadata.prosentSpart} %</p>
            </div>

            <Link className="rounded-md bg-accent py-5 px-10" to="/search">
                Nytt søk
            </Link>
        </div>
    );
}
