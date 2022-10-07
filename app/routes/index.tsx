import type { Konvertering } from "@prisma/client";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import { prisma } from "../lib/db.server";

export const loader: LoaderFunction = async () => {
    const tidligereBilder = await prisma.konvertering.findMany({
        take: 50,
        where: { numberOfPrimitives: 500 },
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
                                    to={`/unsplash/${data.unsplashId}`}
                                >
                                    <img
                                        className="h-96 w-96 bg-slate-50 object-cover p-2 shadow-2xl drop-shadow-2xl"
                                        alt={
                                            metadata?.alt_description ??
                                            "Bilde av en tidligere konvertering"
                                        }
                                        src={data.pathSvgBilde}
                                    />
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
