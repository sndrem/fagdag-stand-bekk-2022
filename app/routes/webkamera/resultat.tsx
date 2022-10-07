import { json } from "@remix-run/server-runtime";
import { Link, useLoaderData } from "@remix-run/react";
import {
    hentSisteBildeFraWebkamera,
    uploadImageAndConvertToPrimitives,
} from "~/services/sqip/fraWebkamera";
import styles from "~/styles/webkamera.css";
import type { ActionFunction, LoaderFunction } from "@remix-run/server-runtime";
import { useEffect, useRef } from "react";

export const links = () => [{ rel: "stylesheet", href: styles }];

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const query = formData.get("image")?.toString();

    if (query) {
        const results = await uploadImageAndConvertToPrimitives(query);

        return json(results);
    }
};

export const loader: LoaderFunction = async () => {
    const dataBuffer = await hentSisteBildeFraWebkamera();
    const inlineSvg = dataBuffer.toString("utf-8");

    return json(inlineSvg);
};

const ResultatFraWebkamera = () => {
    const svgContainerRef = useRef<HTMLDivElement>(null);
    const inlineSvg = useLoaderData();

    useEffect(() => {
        let timeouts: Array<NodeJS.Timeout> = [];

        const animerTegningAvSvg = (svg: SVGSVGElement) => {
            const pathElements = Array.from(svg.getElementsByTagName("path"));
            console.log(`Animerer ${pathElements.length + 1} primitiver ...`);

            pathElements.slice(1).forEach((primitive, index) => {
                primitive.setAttribute("style", "display: none;");

                const intervall = 5000 / pathElements.length;
                const delayTilTegningIMs = index * intervall;

                timeouts.push(
                    setTimeout(() => {
                        primitive.setAttribute("style", "display: unset;");
                    }, delayTilTegningIMs)
                );
            });
        };

        if (svgContainerRef.current) {
            const svgNodes =
                svgContainerRef.current.getElementsByTagName("svg");

            if (svgNodes.length === 0) {
                console.log("Fant ikke SVG-element på skjerm ...");
            } else {
                animerTegningAvSvg(svgNodes[0]);
            }
        }

        return () => {
            timeouts.forEach((timeout) => {
                clearTimeout(timeout);
            });
        };
    }, []);

    return (
        <div className="webkamera-resultat m-auto max-w-4xl">
            <div
                dangerouslySetInnerHTML={{ __html: inlineSvg }}
                ref={svgContainerRef}
            />
            <Link className="nytt-bilde-knapp" to="/webkamera">
                Generer nytt bilde ♻️
            </Link>
        </div>
    );
};

export default ResultatFraWebkamera;
