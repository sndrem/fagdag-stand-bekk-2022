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

    return (
        <div className="mt-50 absolute bottom-0 m-auto block w-full rounded-b-lg bg-white pt-2 pb-2 text-center opacity-70">
            <p className="">{tilfeldigTips}</p>
        </div>
    );
}
