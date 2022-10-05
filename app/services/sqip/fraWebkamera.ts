import path from "path";
import { convertToPrimitives } from "./sqip";
import fs from "fs";
import { log } from "../log";

const imagesPath = `${path.dirname(__dirname)}/public/images`;

export const uploadImageAndConvertToPrimitives = async (
    base64EncodedImage: string
): Promise<{ generatedImagePath: string }> => {
    const opplastetBildePath = `${imagesPath}/webkamera.png`;
    const generatedImagePath = `${imagesPath}/webkamera.svg`;

    log.success("Mottok bilde fra webkamera. Laster opp ...");

    await lastOppBilde(base64EncodedImage, opplastetBildePath);

    log.success("Genererer primitiver for webkamera-bilde ...");

    await convertToPrimitives(opplastetBildePath, generatedImagePath);

    return {
        generatedImagePath,
    };
};

export const getLastConvertedImage = async (): Promise<any> => {
    return new Promise((resolve, reject) => {
        const generatedImagePath = `${imagesPath}/webkamera.svg`;

        fs.readFile(generatedImagePath, null, (error, data) => {
            if (error === null) {
                const base64Encoded =
                    "data:image/svg;base64," + data.toString("base64");
                resolve(base64Encoded);
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
