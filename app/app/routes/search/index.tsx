import { Link, useActionData } from "@remix-run/react";
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

  return (
    <>
      <Link className="underline" to="..">
        Forsiden
      </Link>
      <form method="post" action="/search?index">
        <div className="my-5 flex flex-col items-center">
          <label htmlFor="query">Søk hos Unsplash</label>
          <input
            type="text"
            name="query"
            placeholder="Søk på engelsk"
            className="rounded-lg p-2"
          />
          <button
            type="submit"
            className="mt-2 block w-full rounded-lg bg-accent"
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
