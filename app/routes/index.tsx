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
        <div className="hjem">
            <h1>Geometrisk bildeoptimalisering</h1>
            <div className="hjem-knapper">
                <Link to="/search" className="hovedknapp">
                    Generer et nytt bilde
                </Link>
                <Link to="/webkamera" className="hovedknapp">
                    Bruk webkamera
                </Link>
            </div>
            {loaderData.length && (
                <>
                    <h2>Tidligere konverteringer</h2>
                    <div className="tidligere-konverteringer">
                        {loaderData?.map((data) => {
                            const metadata = JSON.parse(data.metadata);

                            return (
                                <Link
                                    prefetch="intent"
                                    key={data.id}
                                    className="konvertering"
                                    to={`/${data.unsplashId}`}
                                >
                                    <img
                                        title={`Modus: ${oversettMode(
                                            data.mode
                                        )}`}
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
            )}

            <Outlet />
        </div>
    );
}
