import { Link } from "@remix-run/react";

export function Header() {
    return (
        <header>
            <Link to="/">
                <p>Hjem</p>
            </Link>
        </header>
    );
}
