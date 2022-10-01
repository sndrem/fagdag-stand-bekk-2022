import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import { PhotoAttribution } from "../../components/PhotoAttribution";
import {
  ConversionResponse,
  fetchFromUnsplashAndRunThroughSqip,
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
  const data = useLoaderData<{ result: ConversionResponse }>();

  if (data.result.unsplashResponse?.type !== "success") {
    return null;
  }

  const unsplash = data.result.unsplashResponse.response;

  return (
    <>
      <div className="grid grid-cols-2 gap-20 text-center">
        <div>
          <h1 className="font-bold">Originalbilde</h1>
          <p>
            Original størrelse på bilde:{" "}
            {parseInt(data.result.originalStorrelse).toFixed(2)} MB
          </p>
          <img src={`/${data.result.nedlastetBildePath}`} alt="Originalbilde" />
          <PhotoAttribution
            attributionLink={unsplash.links.html}
            photoBy={unsplash.user.name}
            userProfileLink={unsplash.user.links.html}
          />
        </div>
        <div>
          <h1 className="font-bold">SVG etter konvertering</h1>
          <p>Ny størrelse på bilde: {data.result.nyStorrelse} MB</p>
          <img
            src={`/${data.result.resultatSvgPath}`}
            alt="SVG av originalbilde"
          />
        </div>
      </div>
      <div className="m-5">
        <p className="text-2xl">Du sparer {data.result.prosentSpart} %</p>
      </div>

      <Link className="rounded-md bg-accent py-5 px-10" to="/search">
        Nytt søk
      </Link>
    </>
  );
}
