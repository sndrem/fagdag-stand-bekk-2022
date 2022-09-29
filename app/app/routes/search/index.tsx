import { Link, useActionData, useTransition } from "@remix-run/react";
import { json } from "@remix-run/server-runtime";
import type { ActionFunction } from "@remix-run/server-runtime";
import { searchPhotos } from "../../services/unsplash";
import type { UnsplashResponse } from "../../domain/UnsplashResponse";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const query = formData.get("query")?.toString();
  if (!query) {
    throw json({
      status: "409",
      error: "Bad request - 'query' is null or not provided",
    });
  }
  const results = await searchPhotos(query);

  return json(results);
};

export default function UnsplashSearchRoute() {
  const actionData = useActionData<UnsplashResponse>();
  const transition = useTransition();

  if (transition.state === "loading") {
    return (
      <p>
        Henter bilde fra Unsplash, knasker det gjennom Sqip og spytter ut svg.
        Vennligst vent...
      </p>
    );
  }

  return (
    <>
      <Link className="underline" to="..">
        Forsiden
      </Link>
      <form method="post" action="/search?index" className="w-3/5">
        <div className="my-5 flex flex-col items-center">
          <label htmlFor="query" className="my-2">
            Søk hos{" "}
            <a className="underline" href="https://unsplash.com/">
              Unsplash
            </a>
          </label>
          <input
            type="text"
            name="query"
            placeholder="Søk på engelsk"
            className="w-full rounded-lg p-2"
          />
          <button
            type="submit"
            className="mt-5 block rounded-lg bg-accent px-52 py-10"
          >
            Søk
          </button>
        </div>
      </form>
      <div className="grid grid-cols-5 gap-10">
        {actionData?.response?.results.map((img) => {
          return (
            <Link key={img.id} to={`/unsplash/${encodeURIComponent(img.id)}`}>
              <img alt={img.alt_description} src={img.urls.regular} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
