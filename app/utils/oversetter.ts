export function oversettMode(mode: number): string {
    switch (mode) {
        case 0:
            return "kombinasjon av alle";
        case 1:
            return "triangler";
        case 2:
            return "rektangler";
        case 3:
            return "ellipser";
        case 4:
            return "sirkler";
        case 5:
            return "roterte rektangler";
        case 6:
            return "bézier-kurve";
        case 7:
            return "roterte ellipser";
        case 8:
            return "polygoner";
        default:
            return "ukjent mode";
    }
}
