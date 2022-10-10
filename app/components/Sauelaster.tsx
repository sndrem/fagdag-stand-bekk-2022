import { TilfeldigTips } from "./TilfeldigTips";

const Sauelaster = () => (
    <div className="flex flex-col items-center">
        <p>
            Henter bilde fra Unsplash ➡️ Ekstraherer geometri og farger ➡️ Lager
            SVG-fil ➡️ Profit 🤩
        </p>
        <p>Vennligst vent...</p>
        <div className="relative">
            <img
                className="mt-10 h-64 rounded-lg bg-white shadow-lg"
                src="/sauelaster.gif"
                alt=""
            />
            <TilfeldigTips />
        </div>
    </div>
);

export default Sauelaster;
