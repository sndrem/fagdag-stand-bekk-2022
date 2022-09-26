import { Link, Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <main className="m-auto flex w-5/6 flex-col content-center items-center">
      <Link className="underline" to="/search">
        Søk på Unsplash
      </Link>
      <Outlet />
    </main>
  );
}
