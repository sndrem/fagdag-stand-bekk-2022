import Lena from "../../styles/lena.svg";
import Kjetil from "../../styles/kjetil.svg";
import Sindre from "../../styles/sindre.svg";
import QRcode from "../../../public/qr_code_info.svg";
import { Link } from "@remix-run/react";

export default function Om() {
    return (
        <div className="side lesebredde">
            <h1>Hva er utfordringen? </h1>
            <div style={{ color: "#b3b3b3" }}>
                <h2>
                    Bilder på en nettside er ofte store, og dermed en årsak til
                    at nettsiden lastes sakte. En treg nettside kan føre til
                    færre brukere, og mange vil forlate nettsiden før den er
                    ferdig lastet. Store bilder krever også mer ressurser i form
                    av økt lagringsplass og overføring av data, noe som gir økt
                    energibruk. Vi bør derfor strebe etter å lage så raske og
                    effektive nettsider som mulig. En rask nettside er ofte en
                    bærekraftig og solid nettside.
                </h2>
            </div>
            <h1>Hva kan du gjøre selv?</h1>
            <div style={{ color: "#b3b3b3" }}>
                <h2>
                    Det finnes heldigvis enkle grep man kan ta for å redusere
                    lastetiden betraktelig, og dermed også redusere
                    energibruken. Et eksempel er å komprimere bilder, da man
                    ofte ikke trenger full oppløsning på en nettside. Et annet
                    tiltak kan være å bruke SVG-bilder der det er mulig, da
                    disse tar mye mindre plass enn et piksel-bilde i høy
                    oppløsning. SVG-bilder som plassholdere vil også kunne
                    forbedre brukeropplevelsen på en nettside.
                </h2>
            </div>
            <div>
                <Link className="lenke stor-tekst" to="/search">
                    <p>Prøv vår bildeoptimaliserings-løsning her</p>
                </Link>
            </div>
            <aside className="flex flex-row text-center">
                <Profilbilde src={Lena} navn="Lena Tørresdal" />
                <Profilbilde src={Kjetil} navn="Kjetil Svalestuen" />
                <Profilbilde src={Sindre} navn="Sindre Moldeklev" />
            </aside>

            <p className="flex text-center" style={{ color: "#b3b3b3" }}>
                Denne standen er laget av Lena Tørresdal, Kjetil Svalestuen og
                Sindre Moldeklev. <br /> De er alle med i faggruppen Bunnsolide
                webløsninger der et av årets tema har vært bildeoptimalisering.
            </p>
            <img className="mt-10" src={QRcode} alt="QR-kode til info-side" />
        </div>
    );
}

function Profilbilde({ src, navn }: { src: string; navn: string }) {
    return (
        <div className="w-80">
            <img className="mx-10 mb-2" src={src} alt="" />
            <p style={{ color: "#b3b3b3" }}>{navn}</p>
        </div>
    );
}
