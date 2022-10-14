import fsPromise from "fs/promises";

export const regnUtBesparelse = (
    original: number,
    nyStorrelse: number
): number => {
    const diff = original - nyStorrelse;
    return diff / original;
};

export const beregnStatistikk = async (filFør: string, filEtter: string) => {
    const original = await fsPromise.stat(filFør);
    const resultat = await fsPromise.stat(filEtter);

    const originalStørrelse = original.size;
    const nyStørrelse = resultat.size;
    const prosentSpart = regnUtBesparelse(originalStørrelse, nyStørrelse);

    return {
        originalStørrelse,
        nyStørrelse,
        prosentSpart,
    };
};
