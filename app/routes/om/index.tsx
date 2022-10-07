import Lena from "../../styles/lena.svg";
import Kjetil from "../../styles/kjetil.svg";
import Sindre from "../../styles/sindre.svg";
import { Link } from "@remix-run/react";

export default function Om() {
    return (
        <main className="m-auto flex max-w-6xl flex-col items-center">
            <section className="prose mb-10 text-black">
                <section className="grid grid-cols-2 gap-20">
                    <div>
                        <h3>Utfordring 🤔</h3>
                        <p>
                            Bilder på nett er vanskelig å få til riktig, og det
                            kan ofte være en årsak til at nettsidene dine lastes
                            sakte. Vi bør strebe etter å lage så raske og
                            effektive nettsider som mulig. En rask nettside er
                            ofte en bærekraft og solid nettside.
                        </p>
                    </div>
                    <div>
                        <h3>En mulig løsning 💡</h3>
                        <p>
                            Dersom man har mye bilder på nettsiden sin kan man
                            ved noen enkle grep redusere lastetiden betraktelig
                            ved å vise en plassholder bestående av geometriske
                            former. Ved å bruke et verktøy som{" "}
                            <a href="https://github.com/axe312ger/sqip">Sqip</a>{" "}
                            kan man genere disse plassholder-bildene på en enkel
                            måte.
                        </p>
                        <p>Prøv det ut da vel!</p>
                        <Link
                            className="mb-5 rounded-lg bg-accent p-5"
                            to="/search"
                        >
                            Generer et nytt bilde
                        </Link>
                    </div>
                </section>
            </section>
            <aside className="flex flex-row text-center">
                <Profilbilde src={Lena} navn="Lena Tørresdal" />
                <Profilbilde src={Kjetil} navn="Kjetil Svalestuen" />
                <Profilbilde src={Sindre} navn="Sindre Moldeklev" />
            </aside>
            <p className="prose mt-10">
                Denne standen er utviklet av Lena Tørresdal, Kjetil Svalestuen
                og Sindre Moldeklev. De er alle tre med i faggruppen{" "}
                <b>Bunnsolide webløsninger</b> der et av årets tema har vært{" "}
                <b>bildeoptimalisering</b>.
            </p>
        </main>
    );
}

function Profilbilde({ src, navn }: { src: string; navn: string }) {
    return (
        <div className="w-72">
            <img className="m-10 rounded-full" src={src} alt="" />
            <small className="prose text-center tracking-wide">{navn}</small>
        </div>
    );
}
