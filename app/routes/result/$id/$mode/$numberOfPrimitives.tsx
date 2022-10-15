import { Link, useParams } from "@remix-run/react";
import React, { useEffect, useState } from "react";

export default function View() {
    const { id, mode, numberOfPrimitives } = useParams();
    const pathToGeneratedImage = `/images/${id}-${numberOfPrimitives}-${mode}.svg`;
    const pathToOriginalImage = `/images/${id}.png`;

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
            <main className="side">
                <h1>Se bilde</h1>
                <div className="side-header">
                    <Link className="tilbakelenke" to={`/result/${id}/${mode}`}>
                        ← Til resultat
                    </Link>
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
                    <span />
                </div>
                <div
                    className="overflow-hidden"
                    style={{ position: "relative" }}
                    onClick={() => setVisOriginal(!visOriginal)}
                >
                    <img
                        className="stort-bilde"
                        style={{
                            transition: "filter 200ms, transform 200ms",
                            filter: `blur(${blur}px)`,
                            transform: justerBlur(blur),
                        }}
                        src={pathToGeneratedImage}
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
                        src={pathToOriginalImage}
                        alt=""
                    />
                </div>
                <p className="stor-tekst">
                    Hold <code>space</code> for en «blur-up»-effekt
                </p>
                <div className="horisontalt">
                    <form method="post" action={`/convert`}>
                        <input
                            type="text"
                            name="svgPath"
                            hidden
                            value={pathToGeneratedImage}
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
