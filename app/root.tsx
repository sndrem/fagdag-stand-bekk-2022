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
import { Header } from "./components/Header";

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
        <html lang="no" className="min-h-full">
            <head>
                <Meta />
                <Links />
            </head>
            <body className="mb-10 bg-gradient-to-b from-regn to-soloppgang font-din text-lg">
                <Header />
                <main className="m-auto w-5/6">
                    <Outlet />
                    <ScrollRestoration />
                    <Scripts />
                    <LiveReload />
                </main>
            </body>
        </html>
    );
}
