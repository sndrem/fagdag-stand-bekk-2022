import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import { fetchFromUnsplashAndRunThroughSqip } from "../../services/sqip";

interface KonverteringData {
  originalStorrelse: string;
  nyStorrelse: string;
  prosentSpart: string;
  nedlastetBildePath: string;
  resultatSvgPath: string;
}

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
  const data = useLoaderData<{ result: KonverteringData }>();
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
