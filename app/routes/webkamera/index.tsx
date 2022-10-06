import { useEffect, useRef, useState } from "react";
import { Form, useTransition } from "@remix-run/react";
import styles from "~/styles/webkamera.css";
import Sauelaster from "~/components/Sauelaster";

export const links = () => [{ rel: "stylesheet", href: styles }];

enum Mode {
    TaBilde,
    BrukBildeEllerTaNyttBilde,
}

const WebkameraRoute = () => {
    const [mode, setMode] = useState<Mode>(Mode.TaBilde);
    const transition = useTransition();

    const [width] = useState<number>(1920);
    const [height, setHeight] = useState<number>(0);

    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    useEffect(() => {
        const prepareCanvas =
            (video: HTMLVideoElement, canvas: HTMLCanvasElement) => () => {
                let videoHeight =
                    video.videoHeight / (video.videoWidth / width);

                canvas.setAttribute("width", String(width));
                canvas.setAttribute("height", String(videoHeight));

                setHeight(videoHeight);
            };

        const applyVideoStream = async (video: HTMLVideoElement) => {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false,
            });

            video.srcObject = stream;
            await video.play();
        };

        const video = videoRef.current;
        const canvas = canvasRef.current;

        if (video && canvas) {
            applyVideoStream(video);

            const onVideoCanPlay = prepareCanvas(video, canvas);

            video.addEventListener("canplay", onVideoCanPlay);
            return () => {
                video.removeEventListener("canplay", onVideoCanPlay);
            };
        }
    }, [width]);

    const onTakePicture = () => {
        const canvas = canvasRef.current;
        const image = imageRef.current;
        const video = videoRef.current;

        if (canvas && video && image) {
            const context = canvas.getContext("2d");

            if (width && height && context) {
                canvas.width = width;
                canvas.height = height;

                context.drawImage(video, 0, 0, width, height);

                const data = canvas.toDataURL("image/png");

                image.setAttribute("src", data);

                setImageSrc(data);
                setMode(Mode.BrukBildeEllerTaNyttBilde);
            }
        }
    };

    const taNyttBilde = () => {
        setMode(Mode.TaBilde);
    };

    if (transition.state === "submitting") {
        return <Sauelaster />;
    }

    const bildeClassName = mode === Mode.TaBilde ? "skjult" : undefined;
    const videoClassName = mode === Mode.TaBilde ? undefined : "skjult";

    return (
        <div className="webkamera">
            <canvas ref={canvasRef} />

            <div className="feed">
                <video ref={videoRef} className={videoClassName}>
                    Webkamera er ikke tilgjengelig 😭
                </video>

                <div className={bildeClassName}>
                    <img ref={imageRef} alt="Bilde tatt med webkamera" />
                </div>
            </div>

            {mode === Mode.TaBilde && (
                <button className="webkamera-ta-bilde" onClick={onTakePicture}>
                    Knips bilde 📸
                </button>
            )}

            {mode === Mode.BrukBildeEllerTaNyttBilde && (
                <>
                    <Form method="post" action="/webkamera/resultat">
                        <input
                            type="hidden"
                            name="image"
                            defaultValue={imageSrc || ""}
                        />
                        <button type="submit">Bruk bilde ✅</button>
                        <button type="button" onClick={taNyttBilde}>
                            Ta nytt bilde 😉
                        </button>
                    </Form>
                </>
            )}
        </div>
    );
};

export default WebkameraRoute;
