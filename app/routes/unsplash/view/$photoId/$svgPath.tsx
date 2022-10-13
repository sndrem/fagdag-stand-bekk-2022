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
            <main className="side">
                <h1>Se bilde</h1>
                <div className="horisontalt stor-tekst">
                    <label htmlFor="blur">Blur bildet</label>
                    <input
                        type="range"
                        name="blur"
                        id="blir"
                        min={0}
                        max={30}
                        value={blur}
                        onChange={onBlurChange}
                    />
                    <span>{blur}</span>
                </div>
                <div className="overflow-hidden">
                    <img
                        className="stort-bilde"
                        style={{
                            filter: `blur(${blur}px)`,
                            transition: "200ms",
                            transform: justerBlur(blur),
                        }}
                        src={`/images/${svgPath}`}
                        alt=""
                    />
                </div>
                <div className="horisontalt">
                    <Link className="hovedknapp" to={`/${photoId}`}>
                        Tilbake
                    </Link>
                    <form method="post" action={`/convert`}>
                        <input
                            type="text"
                            name="svgPath"
                            hidden
                            value={svgPath}
                            readOnly
                        />
                        <button className="hovedknapp" type="submit">
                            Print 🖨
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
}

const justerBlur = (blur: number): string => {
    const rate = blur * (1 / 4);

    return `scale(1.${String(rate).padStart(2, "0")})`;
};
