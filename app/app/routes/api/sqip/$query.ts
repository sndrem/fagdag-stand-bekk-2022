import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import { fetchFromUnsplashAndRunThroughSqip } from "../../../services/sqip";

export const loader: LoaderFunction = async ({ request, params }) => {
  const query = params.query;
  if (!query) {
    throw json({ message: "Du må spesifisere 'query'" }, 409);
  }
  const resultat = await fetchFromUnsplashAndRunThroughSqip(query);

  return json({ resultat }, 200);
};
