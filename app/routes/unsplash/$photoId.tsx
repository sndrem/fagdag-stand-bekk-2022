import type { Konvertering } from "@prisma/client";
import {
    Form,
    Link,
    useActionData,
    useLoaderData,
    useTransition,
} from "@remix-run/react";
import {
    ActionFunction,
    json,
    LoaderFunction,
    redirect,
} from "@remix-run/server-runtime";
import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { Full } from "unsplash-js/dist/methods/photos/types";
import { fetchFromUnsplashAndRunThroughSqip } from "~/services/sqip/fraUnsplash";
import { PhotoAttribution } from "../../components/PhotoAttribution";
import Sauelaster from "../../components/Sauelaster";
import { prisma } from "../../lib/db.server";
import { getPhotoById } from "../../services/unsplash";

export const action: ActionFunction = async ({ request }) => {
    const body = await request.formData();

    const photoId = body.get("photoId")?.toString();
    const geometriMode = body.get("geometri")?.toString() ?? "1";

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
                    parseInt(geometriMode, 10),
                    numOfPrimitive
                );
            result.push(...resultatFraKonvertering);
        })
    );

    return redirect(`/${photoId}`);
};

export const loader: LoaderFunction = async ({ params }) => {
    const { photoId } = params;
    const bildeFraUnsplash = await getPhotoById(photoId ?? "");

    const tidligereKonverteringer = await prisma.konvertering.findMany({
        where: {
            unsplashId: photoId,
            numberOfPrimitives: 500,
        },
    });

    return json({ bildeFraUnsplash, tidligereKonverteringer });
};

export default function UnsplashUrl() {
    const { bildeFraUnsplash: unsplashData, tidligereKonverteringer } =
        useLoaderData<{
            bildeFraUnsplash: ApiResponse<Full | undefined>;
            tidligereKonverteringer: Konvertering[];
        }>();
    const data = useActionData<{ result: Konvertering[] }>();
    const transition = useTransition();

    if (
        transition.state === "submitting" &&
        transition.location.pathname.includes("/unsplash")
    ) {
        return <Sauelaster />;
    }

    if (!data && unsplashData.type === "success") {
        return (
            <div className="flex flex-col items-center">
                <h1 className="font-bold">Originalbilde</h1>

                <img
                    className="mb-5 max-h-96  bg-slate-50 object-cover p-2 shadow-2xl drop-shadow-2xl"
                    src={unsplashData?.response?.urls.regular}
                    alt="Originalbilde"
                />

                <PhotoAttribution
                    attributionLink={unsplashData.response?.links.html ?? ""}
                    photoBy={unsplashData.response?.user.name ?? ""}
                    userProfileLink={
                        unsplashData.response?.user.links.html ?? ""
                    }
                />
                <Form method="post">
                    <input
                        type="text"
                        name="photoId"
                        hidden
                        value={unsplashData?.response?.id}
                        readOnly
                    />

                    <div className="flex flex-col">
                        <div className="my-10">
                            <label htmlFor="geometri" className="block">
                                Velg geometriske former
                            </label>
                            <select
                                className="mt-2 block p-2"
                                name="geometri"
                                id="geometri"
                            >
                                <option value="0">Kombinasjon av alle</option>
                                <option value="1">Triangler</option>
                                <option value="2">Rektangler </option>
                                <option value="3">Ellipser</option>
                                <option value="4">Sirkler</option>
                                <option value="5">Roterte rektangler</option>
                                <option value="6">Bézier-kurve</option>
                                <option value="7">Roterte ellipser</option>
                                <option value="8">Polygoner</option>
                            </select>
                        </div>
                        <button className="rounded-lg bg-accent " type="submit">
                            Generer bilde
                        </button>
                    </div>
                </Form>
                <div className="grid gap-10 sm:grid-cols-3 lg:grid-cols-6">
                    {tidligereKonverteringer.map((konv) => {
                        return (
                            <div
                                className="prose mb-10 text-center"
                                key={konv.id}
                            >
                                <p className="m-0 p-0">Modus: </p>
                                <p className="m-0 p-0">{konv.mode}</p>
                                <Link to={`/${konv.unsplashId}`}>
                                    <img
                                        className="m-0 h-80 bg-slate-50 object-cover p-2 shadow-2xl drop-shadow-2xl"
                                        key={konv.id}
                                        src={`/${konv.pathSvgBilde}`}
                                        alt="aiaiai"
                                    />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    if (!data) return null;
}
