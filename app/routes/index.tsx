import type { Konvertering } from "@prisma/client";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import { prisma } from "../lib/db.server";
import { oversettMode } from "../utils/oversetter";

export const loader: LoaderFunction = async () => {
    const tidligereBilder = await prisma.konvertering.findMany({
        take: 50,
        where: { numberOfPrimitives: 500 },
        orderBy: {
            createdAt: "desc",
        },
    });

    return json(tidligereBilder);
};

export default function Index() {
    const loaderData = useLoaderData<Konvertering[]>();

    return (
        <main className="m-auto flex w-5/6 flex-col content-center items-center ">
            <div className="flex flex-row gap-5 text-center">
                <Link
                    className="mb-5 w-72 rounded-lg bg-accent p-5"
                    to="/search"
                >
                    Generer et nytt bilde <br /> 🦄
                </Link>
                <Link
                    className="mb-5  w-72 rounded-lg bg-bekkRod p-5"
                    to="/webkamera"
                >
                    Bruk webkamera <br /> 📸
                </Link>
                <Link className="mb-5  w-72 rounded-lg bg-gronn p-5" to="/om">
                    Om løsningen <br /> ℹ️
                </Link>
            </div>
            {loaderData.length ? (
                <>
                    <h2 className="mt-5 mb-5 uppercase">
                        Tidligere konverteringer
                    </h2>
                    <div className="grid grid-cols-4 gap-5">
                        {loaderData?.map((data) => {
                            const metadata = JSON.parse(data.metadata);
                            return (
                                <Link
                                    prefetch="intent"
                                    key={data.id}
                                    to={`/${data.unsplashId}`}
                                >
                                    <div className="bg-slate-50 p-2 text-center shadow-2xl drop-shadow-2xl">
                                        <img
                                            title={`Modus: ${oversettMode(
                                                data.mode
                                            )}`}
                                            className="h-96 w-96 object-cover "
                                            alt={
                                                metadata?.alt_description ??
                                                "Bilde av en tidligere konvertering"
                                            }
                                            src={data.pathSvgBilde}
                                        />
                                        <p className="prose">
                                            Konvertert som:{" "}
                                            {oversettMode(
                                                data.mode
                                            ).toLowerCase()}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </>
            ) : null}

            <Outlet />
        </main>
    );
}
