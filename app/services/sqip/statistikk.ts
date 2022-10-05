import type { Stats } from "fs";
import fsPromise from "fs/promises";

export const regnUtStørrelseIMB = (fil: Stats): number => {
    return fil.size / (1024 * 1024);
};

export const regnUtBesparelseIProsent = (
    original: number,
    nyStorrelse: number
): number => {
    const x = original - nyStorrelse;
    return (x / original) * 100;
};

export const beregnStatistikk = async (filFør: string, filEtter: string) => {
    const original = await fsPromise.stat(filFør);
    const resultat = await fsPromise.stat(filEtter);

    const originalStørrelse = regnUtStørrelseIMB(original);
    const nyStørrelse = regnUtStørrelseIMB(resultat);
    const prosentSpart = regnUtBesparelseIProsent(
        originalStørrelse,
        nyStørrelse
    ).toFixed(2);

    return {
        originalStørrelse,
        nyStørrelse,
        prosentSpart,
    };
};
