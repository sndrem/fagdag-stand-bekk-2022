import type { ActionFunction } from "@remix-run/server-runtime";
import fs from "fs/promises";
import path from "path";

export const action: ActionFunction = async ({ request }) => {
    const body = await request.formData();
    const bildePath = `${path.dirname(__dirname)}/public`;
    const svgPath = bildePath + body.get("svgPath")?.toString() ?? "";

    const buffer = await fs.readFile(svgPath, { encoding: "binary" });
    return new Response(buffer, {
        headers: {
            "Content-Disposition": `attachment; filename=${path.basename(
                svgPath
            )}`,
            "Content-Type": "image/png",
        },
    });
};
