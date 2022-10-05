import { sqip } from "sqip";

import type { PrimitiveOptions } from "./types";
import type { SqipResult } from "sqip";

export const defaultPrimitiveOptions: PrimitiveOptions = {
    numberOfPrimitives: 500,
    mode: 1,
    rep: 100,
};

export const convertToPrimitives = async (
    imagePath: string,
    outputImagePath: string,
    primitiveOptions: PrimitiveOptions = defaultPrimitiveOptions
): Promise<SqipResult> => {
    return (await sqip({
        input: imagePath,
        output: outputImagePath,
        plugins: [
            {
                name: "sqip-plugin-primitive",
                options: primitiveOptions,
            },
            "sqip-plugin-svgo",
        ],
    })) as SqipResult;
};
