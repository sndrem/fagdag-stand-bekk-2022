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
                <div className={`mt-10 max-w-4xl overflow-hidden`}>
                    <img
                        style={{
                            filter: `blur(${blur}px)`,
                            transform: `scale(1.${String(
                                blur * (1 / 4)
                            ).padStart(2, "0")})`,
                        }}
                        src={`/images/${svgPath}`}
                        alt=""
                    />
                </div>
                <form method="post" action={`/convert`}>
                    <input
                        type="text"
                        name="svgPath"
                        hidden
                        value={svgPath}
                        readOnly
                    />
                    <button className="hovedknapp mt-10" type="submit">
                        Print 🖨
                    </button>
                </form>
            </main>
        </>
    );
}
