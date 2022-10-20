import path from "path";
import sharp from "sharp";

export async function konverterFraSvgTilPng(svgPath: string) {
    const bildePath = `${path.dirname(__dirname)}/public`;

    try {
        const buffer = await sharp(`${bildePath}/${svgPath}`)
            .png()
            .resize({
                width: 800,
                withoutReduction: true,
            })
            .toBuffer();
        return buffer;
    } catch (error) {
        throw new Error("Klarte ikke konvertere svg til png");
    }
}
