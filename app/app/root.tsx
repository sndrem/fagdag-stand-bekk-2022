import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import appStylesheetUrl from "./styles/app.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "stylesheet", href: appStylesheetUrl },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Fagdag-stand",
  viewport: "width=device-width,initial-scale=1",
  description: "Tjeneste som konverterer bilder til svg-bilder via Sqip",
});

export default function App() {
  return (
    <html lang="en" className="h-full bg-background">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full font-din text-lg">
        <header className="mb-10 w-full bg-regn py-10 px-5">
          <Link to="/">
            <p>Bildeoptimalisering med trekanter</p>
          </Link>
        </header>
        <main className="m-auto h-full w-5/6">
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </main>
      </body>
    </html>
  );
}
