import { TilfeldigTips } from "./TilfeldigTips";

const Sauelaster = () => (
    <div className="flex flex-col items-center">
        <p>Ekstraherer geometri og farger ➡️ Generer SVG-fil ➡️ Resultat!</p>
        <p>Vennligst vent...</p>
        <div className="relative">
            <img
                className="mt-10 h-64 rounded-lg bg-white shadow-lg"
                src="/sauelaster.gif"
                alt="En animert gif av sauer"
            />
            <TilfeldigTips />
        </div>
    </div>
);

export default Sauelaster;
