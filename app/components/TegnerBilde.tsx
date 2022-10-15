import { useTransition } from "@remix-run/react";
import { useEffect, useState } from "react";
import { TilfeldigTips } from "./TilfeldigTips";

const allVariants = [10, 20, 30, 40, 50, 100, 200, 300, 400, 500];

const TegnerBilde = ({ mode }: { mode: number }) => {
    const transition = useTransition();
    const unsplashId = transition.location?.pathname.split("/").pop();

    const [numberOfPrimitives, setNumberOfPrimitives] = useState<number>(10);
    const [loaderImageSrc, setLoaderImageSrc] = useState<string>("");

    useEffect(() => {
        let timeout: NodeJS.Timeout | undefined;

        const fetchImage = async () => {
            const image = await fetch(
                `/images/${unsplashId}-${numberOfPrimitives}-${mode}.svg`
            );

            const nextNumberOfPrimitivesToLoad =
                allVariants[allVariants.indexOf(numberOfPrimitives) + 1];

            if (image.ok) {
                setLoaderImageSrc(
                    `/images/${unsplashId}-${numberOfPrimitives}-${mode}.svg`
                );

                setNumberOfPrimitives(nextNumberOfPrimitivesToLoad);
            }
        };

        if (numberOfPrimitives < (allVariants.at(-1) || 0)) {
            timeout = setInterval(() => {
                fetchImage();
            }, 1000);
        }

        return () => {
            if (timeout) {
                clearInterval(timeout);
            }
        };
    }, [numberOfPrimitives]);

    console.log("Bruker bilde:", loaderImageSrc);

    if (unsplashId === undefined) {
        return null;
    }

    return (
        <div className="side">
            <p>Vennligst vent ...</p>
            <TilfeldigTips />
            <img className="stort-bilde" src={loaderImageSrc} alt="" />
        </div>
    );
};

export default TegnerBilde;
