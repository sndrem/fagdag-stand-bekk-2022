import { json } from "@remix-run/server-runtime";
import { Link } from "@remix-run/react";
import { uploadImageAndConvertToPrimitives } from "~/services/sqip/fraWebkamera";
import styles from "~/styles/webkamera.css";
import type { ActionFunction } from "@remix-run/server-runtime";

export const links = () => [{ rel: "stylesheet", href: styles }];

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const query = formData.get("image")?.toString();

    if (query) {
        const results = await uploadImageAndConvertToPrimitives(query);

        return json(results);
    }
};

const ResultatFraWebkamera = () => {
    return (
        <div className="webkamera-resultat">
            <img src="/images/webkamera.svg" alt="Generert bilde" />
            <Link className="nytt-bilde-knapp" to="/webkamera">
                Generer nytt bilde ♻️
            </Link>
        </div>
    );
};

export default ResultatFraWebkamera;
