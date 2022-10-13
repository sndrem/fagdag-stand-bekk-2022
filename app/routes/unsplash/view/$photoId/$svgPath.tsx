import { Link, useParams } from "@remix-run/react";
import React, { useState } from "react";

export default function View() {
    const { photoId, svgPath } = useParams();
    const [blur, setBlur] = useState(0);

    const onBlurChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBlur(e.currentTarget.valueAsNumber);
    };

    return (
        <>
            <main className="flex flex-col items-center">
                <Link className="mb-10" to={`/${photoId}`}>
                    ⬅️ Tilbake
                </Link>
                <label htmlFor="blur">Prøv med blur: {blur}</label>
                <input
                    type="range"
                    name="blur"
                    id="blir"
                    min={0}
                    max={30}
                    value={blur}
                    onChange={onBlurChange}
                />
                <img
                    style={{ filter: `blur(${blur}px)` }}
                    className={`max-w-4xl`}
                    src={`/images/${svgPath}`}
                    alt=""
                />
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
