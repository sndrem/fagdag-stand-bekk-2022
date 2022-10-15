import type { Konvertering } from "@prisma/client";
import {
    Form,
    Link,
    useActionData,
    useLoaderData,
    useTransition,
} from "@remix-run/react";
import type { ActionFunction, LoaderFunction } from "@remix-run/server-runtime";
import { json, redirect } from "@remix-run/server-runtime";
import { useState } from "react";
import type { ApiResponse } from "unsplash-js/dist/helpers/response";
import type { Full } from "unsplash-js/dist/methods/photos/types";
import TegnerBilde from "~/components/TegnerBilde";
import { fetchFromUnsplashAndRunThroughSqip } from "~/services/sqip/fraUnsplash";
import { PhotoAttribution } from "../../components/PhotoAttribution";
import { prisma } from "../../lib/db.server";
import { getPhotoById } from "../../services/unsplash";
import { oversettMode } from "../../utils/oversetter";

export const action: ActionFunction = async ({ request }) => {
    const body = await request.formData();

    const photoId = body.get("photoId")?.toString();
    const geometriMode = body.get("geometri")?.toString() ?? "1";

    if (!photoId) {
        throw json({ message: "Unsplash id er tom" }, 409);
    }

    const mode = parseInt(geometriMode, 10);

    await fetchFromUnsplashAndRunThroughSqip(photoId, {
        numberOfPrimitives: 50,
        nth: 10,
        mode,
    });

    await fetchFromUnsplashAndRunThroughSqip(photoId, {
        numberOfPrimitives: 500,
        nth: 100,
        mode,
    });

    return redirect(`/result/${photoId}/${mode}`);
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
    const [mode, setMode] = useState<number>(1);

    if (
        transition.state === "submitting" &&
        transition.location.pathname.includes("/unsplash")
    ) {
        return <TegnerBilde mode={mode} />;
    }

    if (!data && unsplashData.type === "success") {
        return (
            <div className="side">
                <h1>Tegn bilde</h1>
                <div className="side-header">
                    <Link className="tilbakelenke" to="/search">
                        ← Til søket
                    </Link>
                </div>

                <img
                    className="stort-bilde"
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
                <Form method="post" className="konvertering-form">
                    <input
                        type="text"
                        name="photoId"
                        hidden
                        value={unsplashData?.response?.id}
                        readOnly
                    />

                    <div className="geometrivelger">
                        <label htmlFor="geometri">Bruk</label>
                        <select
                            onChange={(e) => setMode(parseInt(e.target.value))}
                            name="geometri"
                            id="geometri"
                        >
                            <option value="1">{oversettMode(1)}</option>
                            <option value="0">{oversettMode(0)}</option>
                            <option value="2">{oversettMode(2)}</option>
                            <option value="3">{oversettMode(3)}</option>
                            <option value="4">{oversettMode(4)}</option>
                            <option value="5">{oversettMode(5)}</option>
                            <option value="6">{oversettMode(6)}</option>
                            <option value="7">{oversettMode(7)}</option>
                            <option value="8">{oversettMode(8)}</option>
                        </select>
                        <span>og</span>
                        <button className="hovedknapp" type="submit">
                            tegn bilde
                        </button>
                    </div>
                </Form>
                {tidligereKonverteringer.length > 0 && (
                    <h2 className="mt-20 mb-10">
                        Andre tegninger av dette bildet
                    </h2>
                )}
                <div className="bilderutenett">
                    {tidligereKonverteringer.map((konv) => {
                        return (
                            <div
                                className="bilderute bilderute--behold-ratio"
                                key={konv.id}
                            >
                                <h3>
                                    <span>{konv.numberOfPrimitives} </span>
                                    <span>{oversettMode(konv.mode)}</span>
                                </h3>
                                <Link
                                    to={`/result/${konv.unsplashId}/${konv.mode}`}
                                >
                                    <img
                                        key={konv.id}
                                        src={`/${konv.pathSvgBilde}`}
                                        alt="SVG-bilde"
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
