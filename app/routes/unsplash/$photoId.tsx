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
import type { ApiResponse } from "unsplash-js/dist/helpers/response";
import type { Full } from "unsplash-js/dist/methods/photos/types";
import { fetchFromUnsplashAndRunThroughSqip } from "~/services/sqip/fraUnsplash";
import { PhotoAttribution } from "../../components/PhotoAttribution";
import Sauelaster from "../../components/Sauelaster";
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

    const alternativeImages = [10, 50, 100];

    const promises = alternativeImages.map((numOfPrimitive) =>
        fetchFromUnsplashAndRunThroughSqip(
            photoId,
            parseInt(geometriMode, 10),
            numOfPrimitive
        )
    );
    await Promise.all(promises);

    return redirect(`/${photoId}`);
};

export const loader: LoaderFunction = async ({ params }) => {
    const { photoId } = params;
    const bildeFraUnsplash = await getPhotoById(photoId ?? "");

    const tidligereKonverteringer = await prisma.konvertering.findMany({
        where: {
            unsplashId: photoId,
            numberOfPrimitives: 100,
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
            <div className="side">
                <h1>Konverter bilde</h1>

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
                        <select name="geometri" id="geometri">
                            <option value="1">Triangler</option>
                            <option value="0">Kombinasjon av alle</option>
                            <option value="2">Rektangler</option>
                            <option value="3">Ellipser</option>
                            <option value="4">Sirkler</option>
                            <option value="5">Roterte rektangler</option>
                            <option value="6">Bézier-kurve</option>
                            <option value="7">Roterte ellipser</option>
                            <option value="8">Polygoner</option>
                        </select>
                        <span>og</span>
                        <button className="hovedknapp" type="submit">
                            Tegn bilde
                        </button>
                    </div>
                </Form>
                <h2 className="mt-20 mb-10">
                    Tidligere konverteringer av dette bilde
                </h2>
                <div className="bilderutenett">
                    {tidligereKonverteringer.map((konv) => {
                        return (
                            <div className="bilderute" key={konv.id}>
                                <h3>
                                    <span>{konv.numberOfPrimitives} </span>
                                    <span>{oversettMode(konv.mode)}</span>
                                </h3>
                                <Link to={`/${konv.unsplashId}`}>
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
