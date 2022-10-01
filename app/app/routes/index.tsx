import type { Konvertering } from "@prisma/client";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import { prisma } from "../lib/db.server";

export const loader: LoaderFunction = async () => {
  const tidligereBilder = await prisma.konvertering.findMany({ take: 50 });

  return json(tidligereBilder);
};

export default function Index() {
  const loaderData = useLoaderData<Konvertering[]>();

  return (
    <main className="m-auto flex w-5/6 flex-col content-center items-center">
      <Link className="underline" to="/search">
        Søk via Unsplash
      </Link>
      <h2 className="mt-20 mb-5">Tidligere konverteringer</h2>
      <div className="grid grid-cols-4 gap-5">
        {loaderData?.map((data) => {
          const metadata = JSON.parse(data.metadata);
          return (
            <Link key={data.id} to={`/unsplash/${data.unsplashId}`}>
              <img
                className="h-96 w-96 bg-black object-cover p-2 shadow-lg"
                alt={metadata?.alt_description}
                src={data.pathSvgBilde}
              />
            </Link>
          );
        })}
      </div>
      <Outlet />
    </main>
  );
}
