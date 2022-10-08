import { Link, useParams } from "@remix-run/react";

export default function View() {
    const { photoId, svgPath } = useParams();

    return (
        <>
            <main className="flex flex-col items-center">
                <Link to={`/unsplash/${photoId}`}>Tilbake</Link>
                <img className="max-w-4xl" src={`/images/${svgPath}`} alt="" />
                <form method="post" action={`/convert`}>
                    <input
                        type="text"
                        name="svgPath"
                        hidden
                        value={svgPath}
                        readOnly
                    />
                    <button
                        className="mt-5 rounded-xl bg-skyfriKontrast p-5 text-2xl uppercase"
                        type="submit"
                    >
                        Print <br />
                        🖨
                    </button>
                </form>
            </main>
        </>
    );
}
