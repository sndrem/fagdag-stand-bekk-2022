import { useLoaderData } from "@remix-run/react";
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
  const unsplashId = params.unsplashId;

  if (!unsplashId) {
    throw json({ message: "Unsplash id er tom" }, 409);
  }

  const resultatFraKonvertering = await fetchFromUnsplashAndRunThroughSqip(
    unsplashId
  );
  return json({ result: resultatFraKonvertering }, 200);
};

export default function UnsplashUrl() {
  const data = useLoaderData<{ result: KonverteringData }>();
  console.log(data.result);
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          height: "500px",
        }}
      >
        <div>
          <h1>Originalbilde</h1>
          <img
            className="h-1/3"
            src={`/${data.result.nedlastetBildePath}`}
            alt="Originalbilde"
          />
        </div>
        <div>
          <h1>SVG etter konvertering</h1>
          <img
            className="h-1/3"
            src={`/${data.result.resultatSvgPath}`}
            alt="SVG av originalbilde"
          />
        </div>
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
