import { Link } from "@remix-run/react";

export function Header() {
    return (
        <header className="mb-10 w-full  py-10 px-5 text-center uppercase tracking-widest">
            <Link to="/">
                <p>Bildeoptimalisering med trekanter</p>
            </Link>
        </header>
    );
}
