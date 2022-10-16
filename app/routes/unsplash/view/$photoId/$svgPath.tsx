import { Link, useParams } from "@remix-run/react";
import React, { useEffect, useState } from "react";

export default function View() {
    const { photoId, svgPath } = useParams();
    const originalPath = svgPath?.split("-").slice(0, -2).join("-") + ".png";
    const [blur, setBlur] = useState(0);

    const [visOriginal, setVisOriginal] = useState<boolean>(false);

    const onBlurChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBlur(e.currentTarget.valueAsNumber);
    };

    useEffect(() => {
        const onSpaceDown = (event: any) => {
            event.preventDefault();

            if (event.code === "Space") {
                setVisOriginal(true);
            }
        };

        const onSpaceUp = (event: any) => {
            event.preventDefault();

            if (event.code === "Space") {
                setVisOriginal(false);
            }
        };

        window.addEventListener("keydown", onSpaceDown);
        window.addEventListener("keyup", onSpaceUp);

        return () => {
            window.removeEventListener("keydown", onSpaceDown);
            window.removeEventListener("keyup", onSpaceUp);
        };
    });

    return (
        <>
            <main className="side side-topptung">
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
                    <span>{blur}px</span>
                </div>
                <div
                    className="overflow-hidden"
                    style={{ position: "relative" }}
                >
                    <img
                        className="stort-bilde"
                        style={{
                            transition: "filter 200ms, transform 200ms",
                            filter: `blur(${blur}px)`,
                            transform: justerBlur(blur),
                        }}
                        src={`/images/${svgPath}`}
                        alt=""
                    />
                    <img
                        className="stort-bilde"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: visOriginal ? 1 : 0,
                            transition: "400ms",
                        }}
                        src={`/images/${originalPath}`}
                        alt=""
                    />
                </div>
                <p className="stor-tekst">
                    Hold <code>space</code> for en «blur-up»-effekt
                </p>
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
    return "1";
    // const rate = blur * (1 / 4);
    // return `scale(1.${String(rate).padStart(2, "0")})`;
};
