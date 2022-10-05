import {
  Form,
  Link,
  useLoaderData,
  useSearchParams,
  useTransition,
} from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/server-runtime";
import { PhotoAttribution } from "../../components/PhotoAttribution";
import { Soketips } from "../../components/Soketips";
import type { UnsplashResponse } from "../../domain/UnsplashResponse";
import { searchPhotos } from "../../services/unsplash";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const search = new URLSearchParams(url.search);
  const query = search.get("query");
  if (!query) return json([], 200);

  const results = await searchPhotos(query);

  return json(results);
};

export default function UnsplashSearchRoute() {
  const actionData = useLoaderData<UnsplashResponse>();
  const transition = useTransition();
  const [search] = useSearchParams();

  if (
    transition.state === "loading" &&
    transition.location.pathname.includes("/unsplash")
  ) {
    return (
      <div className="flex flex-col items-center">
        <p>
          Henter bilde fra Unsplash, knasker det gjennom Sqip og spytter ut svg.
          Vennligst vent...
        </p>
        <img
          className="mt-10 h-64 rounded-lg bg-white shadow-lg"
          src="/sauelaster.gif"
          alt=""
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <Form method="get" className="w-3/5">
        <div className="my-5 flex flex-col items-center">
          <label htmlFor="query" className="my-2">
            Søk via{" "}
            <a className="underline" href="https://unsplash.com/">
              Unsplash
            </a>
          </label>
          <input
            type="text"
            name="query"
            placeholder="Søk på engelsk"
            className="w-full rounded-lg p-2"
            defaultValue={search.get("query") ?? ""}
          />
          <button
            type="submit"
            className="mt-5 block rounded-lg bg-accent px-52 py-2"
          >
            Søk
          </button>
        </div>
      </Form>
      <Soketips />

      <div className="grid grid-cols-4 gap-5">
        {/* <ImageLink
          id={""}
          src="https://images.unsplash.com/photo-1604537529586-87ac173f4310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
          altText={"img.alt_description"}
          photoBy={"img.user.name"}
          attributionLink={"img.links.download"}
          userProfileLink={"testing.com"}
        />
        <ImageLink
          id={""}
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          altText={"img.alt_description"}
          photoBy={"img.user.name"}
          attributionLink={"img.links.download"}
          userProfileLink={"testing.com"}
        />
        <ImageLink
          id={""}
          src="https://images.unsplash.com/photo-1604537529586-87ac173f4310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
          altText={"img.alt_description"}
          photoBy={"img.user.name"}
          attributionLink={"img.links.download"}
          userProfileLink={"testing.com"}
        />
        <ImageLink
          id={""}
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          altText={"img.alt_description"}
          photoBy={"img.user.name"}
          attributionLink={"img.links.download"}
          userProfileLink={"testing.com"}
        />
        <ImageLink
          id={""}
          src="https://images.unsplash.com/photo-1604537529586-87ac173f4310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
          altText={"img.alt_description"}
          photoBy={"img.user.name"}
          attributionLink={"img.links.download"}
          userProfileLink={"testing.com"}
        />
        <ImageLink
          id={""}
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          altText={"img.alt_description"}
          photoBy={"img.user.name"}
          attributionLink={"img.links.download"}
          userProfileLink={"testing.com"}
        />
        <ImageLink
          id={""}
          src="https://images.unsplash.com/photo-1604537529586-87ac173f4310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
          altText={"img.alt_description"}
          photoBy={"img.user.name"}
          attributionLink={"img.links.download"}
          userProfileLink={"testing.com"}
        />
        <ImageLink
          id={""}
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          altText={"img.alt_description"}
          photoBy={"img.user.name"}
          attributionLink={"img.links.download"}
          userProfileLink={"testing.com"}
        /> */}

        {actionData?.response?.results.map((img) => {
          return (
            <ImageLink
              key={img.id}
              id={img.id}
              src={img.urls.regular}
              altText={img.alt_description}
              photoBy={img.user.name}
              attributionLink={img.links.html}
              userProfileLink={img.user.links.html}
            />
          );
        })}
      </div>
    </div>
  );
}

function ImageLink({
  src,
  id,
  altText = "",
  photoBy,
  attributionLink,
  userProfileLink,
}: {
  src: string;
  id: string;
  altText?: string;
  photoBy: string;
  attributionLink: string;
  userProfileLink: string;
}) {
  return (
    <div className="flex flex-1 flex-col">
      <Link to={`/unsplash/${encodeURIComponent(id)}`}>
        <img
          className="h-96 w-96 object-cover shadow-lg"
          alt={altText}
          src={src}
        />
      </Link>
      <PhotoAttribution
        attributionLink={attributionLink}
        photoBy={photoBy}
        userProfileLink={userProfileLink}
      />
    </div>
  );
}
