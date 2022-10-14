import { Link } from "@remix-run/react";

export function Header() {
    return (
        <header>
            <Link className="lenke stor-tekst" to="/">
                <p>Hjem</p>
            </Link>
        </header>
    );
}
