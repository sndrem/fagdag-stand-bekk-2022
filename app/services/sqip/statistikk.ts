import type { Stats } from "fs";

export function regnUtStorrelseIMB(fil: Stats): number {
    return fil.size / (1024 * 1024);
}

export function regnUtBesparelseIProsent(
    original: number,
    nyStorrelse: number
): number {
    const x = original - nyStorrelse;
    return (x / original) * 100;
}
