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

            console.log("");

            const ventetid =
                nextNumberOfPrimitivesToLoad < 20
                    ? 2000
                    : nextNumberOfPrimitivesToLoad > 50
                    ? 1000
                    : 250;

            if (image.ok) {
                setLoaderImageSrc(
                    `/images/${unsplashId}-${numberOfPrimitives}-${mode}.svg`
                );

                setNumberOfPrimitives(nextNumberOfPrimitivesToLoad);
                timeout = setTimeout(() => {}, ventetid);
            } else if (image.status === 404) {
                timeout = setTimeout(() => {
                    fetchImage();
                }, ventetid);
            }
        };

        if (numberOfPrimitives < (allVariants.at(-1) || 0)) {
            fetchImage();
        }

        return () => {
            if (timeout) {
                clearTimeout(timeout);
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
