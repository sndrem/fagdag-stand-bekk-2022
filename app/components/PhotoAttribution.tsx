import { APP_NAME, UNSPLASH_URL } from "../constants";

interface Props {
    userProfileLink: string;
    photoBy: string;
    attributionLink: string;
}

function utmQueries() {
    return `?utm_source=${APP_NAME}&utm_medium=referral`;
}

export function PhotoAttribution({
    userProfileLink,
    photoBy,
    attributionLink,
}: Props) {
    return (
        <small className="text-center">
            Foto av{" "}
            <a className="underline" href={`${userProfileLink}${utmQueries()}`}>
                {" "}
                {photoBy}{" "}
            </a>{" "}
            fra{" "}
            <a className="underline" href={`${UNSPLASH_URL}${utmQueries()}`}>
                Unsplash
            </a>{" "}
        </small>
    );
}
