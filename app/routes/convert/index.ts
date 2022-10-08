import type { ActionFunction } from "@remix-run/server-runtime";
import { konverterFraSvgTilPng } from "../../services/sharp/konverterFraSvgTilPng";

export const action: ActionFunction = async ({ request }) => {
    const body = await request.formData();
    const svgPath = body.get("svgPath")?.toString() ?? "";

    const buffer = await konverterFraSvgTilPng(svgPath);
    return new Response(buffer, {
        headers: {
            "Content-Disposition": "attachment; filename=print.png",
            "Content-Type": "image/png",
        },
    });
};
