import { Konvertering } from "@prisma/client";
import { Metadata } from "../services/sqip/fraUnsplash";
import { oversettMode } from "../utils/oversetter";

interface Props {
    metadata: Metadata;
    result: Konvertering;
}

export function SvgImage({ metadata, result }: Props) {
    return (
        <div className="bg-white p-2 shadow-xl  drop-shadow-xl">
            <img
                src={`/${metadata.resultatSvgPath}`}
                alt="SVG av originalbilde"
                className="m-0 bg-slate-50 object-cover p-2"
            />
            <div className="prose flex flex-col">
                <div>
                    <p className="m-0 p-0">
                        Antall primitives: {result.numberOfPrimitives}
                    </p>
                </div>
                <div>
                    <p className="m-0 p-0">
                        Modus: {oversettMode(result.mode)}
                    </p>
                </div>
                <div>
                    <p className="mt-5 mb-0">
                        {metadata.nyStorrelse?.substring(0, 5)} MB
                    </p>
                    <p className="m-0 p-0">
                        Du sparer {metadata.prosentSpart} %
                    </p>
                </div>
            </div>
        </div>
    );
}
