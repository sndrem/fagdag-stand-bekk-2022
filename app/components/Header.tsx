import { Link } from "@remix-run/react";

export function Header() {
    return (
        <header className="mb-5 w-full py-5 px-5 text-center uppercase tracking-widest">
            <Link to="/">
                <p>Bildeoptimalisering med geometriske former</p>
            </Link>
        </header>
    );
}
