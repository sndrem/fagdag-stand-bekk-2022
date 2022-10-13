import { Form, Link, useLoaderData, useSearchParams } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
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
    const [search] = useSearchParams();

    return (
        <div className="side">
            <h1>Bruk høykvalitetsbilder</h1>
            <Form method="get">
                <div className="søk-wrapper">
                    <img src="/icons/søk.svg" alt="Søk" />
                    <input
                        autoFocus
                        type="text"
                        name="query"
                        aria-label="Søk etter bilder"
                        placeholder="Søk etter bilder ..."
                        defaultValue={search.get("query") ?? ""}
                    />
                </div>
            </Form>
            <Soketips />

            <div className="bilderutenett">
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
        <div className="bilderute">
            <Link to={`/unsplash/${encodeURIComponent(id)}`}>
                <img alt={altText} src={src} />
            </Link>
            <PhotoAttribution
                attributionLink={attributionLink}
                photoBy={photoBy}
                userProfileLink={userProfileLink}
            />
        </div>
    );
}
