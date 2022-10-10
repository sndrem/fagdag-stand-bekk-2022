import type { PrimitiveOptions } from "./types";

const { exec } = require("child_process");

export const defaultPrimitiveOptions: PrimitiveOptions = {
    numberOfPrimitives: 500,
    mode: 1,
    rep: 100,
    nth: 0,
};

export const convertToPrimitives = async (
    imagePath: string,
    outputImagePath: string,
    options: Partial<PrimitiveOptions> = defaultPrimitiveOptions
): Promise<void> => {
    await runPrimitive(imagePath, outputImagePath, options);
    await runSvgo(outputImagePath, options);
    await copyFinalImage(outputImagePath, options);
};

const runPrimitive = (
    imagePath: string,
    outputImagePath: string,
    options: Partial<PrimitiveOptions>
): Promise<void> => {
    const allRequiredOptions = {
        ...defaultPrimitiveOptions,
        ...options,
    };

    const { mode, numberOfPrimitives, rep, nth } = allRequiredOptions;
    const command = `primitive -i ${imagePath} -o ${outputImagePath} -n ${numberOfPrimitives} -m ${mode} -rep ${rep} -nth ${nth}`;

    console.log(`Kjører Primitive med kommando "${command}"`);

    return runCommand(command);
};

const runSvgo = (
    imagePath: string,
    options: Partial<PrimitiveOptions>
): Promise<void> => {
    let input = imagePath;
    if (
        options.numberOfPrimitives &&
        options.nth &&
        options.nth > 0 &&
        input.includes("%d")
    ) {
        const numberOfInputs = options.numberOfPrimitives / options.nth;
        const allSteps = Array(numberOfInputs)
            .fill(0)
            .map((_, index) => {
                return (index + 1) * (options.nth || 1);
            });

        input = allSteps
            .map((step) => imagePath.replace("%d", String(step)))
            .join(" ");
    }

    const command = `svgo ${input} -o ${input}`;

    console.log(`Optimaliserer bilder med SVGO "${command}"`);
    return runCommand(command);
};

const copyFinalImage = (
    imagePath: string,
    options: Partial<PrimitiveOptions>
): Promise<void> => {
    if (options.numberOfPrimitives && options.nth && imagePath.includes("%d")) {
        const beforeImage = imagePath.replace(
            "%d",
            String(options.numberOfPrimitives)
        );
        const afterImage = imagePath.replace("-%d", "");

        console.log(
            `Kopierer siste bilde fra ${beforeImage} til ${afterImage}`
        );

        return runCommand(`cp ${beforeImage} ${afterImage}`);
    }

    return Promise.resolve();
};

const runCommand = (command: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        exec(command, (error: string) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
};
