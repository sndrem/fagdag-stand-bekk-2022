import { useEffect, useState } from "react";

const tips = [
    "Innhold som hopper rundt på skjermen vil gi dårlig Lighthouse-score",
    "Vær kritisk til bildestørrelser",
    "Må du laste bilder på mobil?",
    "En nettside som laster tregt kan skade kundens omdømme",
    "Lazy-load bilder under folden",
];

export function TilfeldigTips() {
    const getTilfeldigTips = () =>
        tips[Math.floor(Math.random() * tips.length)];
    const [tilfeldigTips, setTilfeldigTips] = useState(getTilfeldigTips());

    useEffect(() => {
        const id = setInterval(() => {
            setTilfeldigTips(getTilfeldigTips());
        }, 1000 * 7);
        return () => clearInterval(id);
    }, [tilfeldigTips]);

    return <p className="stor-tekst">{tilfeldigTips}</p>;
}
