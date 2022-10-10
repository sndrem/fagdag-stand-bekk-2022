export function oversettMode(mode: number): string {
    switch (mode) {
        case 0:
            return "Kombinasjon av alle";
        case 1:
            return "Triangler";
        case 2:
            return "Rektangler";
        case 3:
            return "Ellipser";
        case 4:
            return "Sirkler";
        case 5:
            return "Roterte rektangler";
        case 6:
            return "Bézier-kurve";
        case 7:
            return "Roterte ellipser";
        case 8:
            return "Polygoner";
        default:
            return "Ukjent mode";
    }
}
