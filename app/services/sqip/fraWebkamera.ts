import path from "path";
import { convertToPrimitives } from "./primitive";
import fs from "fs";
import { log } from "../log";

const imagesPath = `${path.dirname(__dirname)}/public/images`;

export const uploadImageAndConvertToPrimitives = async (
    base64EncodedImage: string
): Promise<{ generatedImagePath: string }> => {
    const sourcePath = `${imagesPath}/webkamera.png`;
    const imagePath = `${imagesPath}/webkamera-%d.svg`;
    log.success("Mottok bilde fra webkamera. Laster opp ...");

    await lastOppBilde(base64EncodedImage, sourcePath);
    log.success("Genererer primitiver for webkamera-bilde ...");

    await convertToPrimitives(sourcePath, imagePath, {
        numberOfPrimitives: 50,
        rep: 1,
        nth: 10,
    });

    await convertToPrimitives(sourcePath, imagePath, {
        numberOfPrimitives: 300,
        rep: 1,
        nth: 100,
    });

    const finalImagePath = imagesPath.replace("-%d", "");

    return {
        generatedImagePath: finalImagePath,
    };
};

export const hentSisteBildeFraWebkamera = async (): Promise<Buffer> => {
    return new Promise((resolve, reject) => {
        const generatedImagePath = `${imagesPath}/webkamera.svg`;

        fs.readFile(generatedImagePath, null, (error, data) => {
            if (error === null) {
                resolve(data);
            } else {
                reject(error);
            }
        });
    });
};

const lastOppBilde = async (base64EncodedImage: string, path: string) => {
    const data = base64EncodedImage.replace(/^data:image\/png;base64,/, "");

    fs.writeFile(path, data, "base64", (error: any | null) => {
        if (error === null) {
            return Promise.resolve();
        } else {
            return Promise.reject(error);
        }
    });
};
