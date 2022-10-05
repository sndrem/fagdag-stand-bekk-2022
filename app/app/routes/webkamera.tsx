import { json } from "@remix-run/server-runtime";
import { useEffect, useRef, useState } from "react";
import { uploadPhotoAndRunConvertWithSqip } from "~/services/sqip";
import type { ActionFunction } from "@remix-run/server-runtime";
import styles from "~/styles/webkamera.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export const action: ActionFunction = async ({ request }) => {
  console.log("Mega");
  const formData = await request.formData();

  const query = formData.get("image")?.toString();
  console.log("HALLO", query);

  if (query) {
    const results = await uploadPhotoAndRunConvertWithSqip(query);

    return json(results);
  }
};

const WebkameraRoute = () => {
  const [width, setWidth] = useState<number>(1920);
  const [height, setHeight] = useState<number>(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const prepareCanvas =
      (video: HTMLVideoElement, canvas: HTMLCanvasElement) => () => {
        let videoHeight = video.videoHeight / (video.videoWidth / width);

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

  useEffect(() => {
    if (imageSrc) {
      console.log("Image src:", imageSrc);
    }
  }, [imageSrc]);

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
      }
    }
  };

  return (
    <div>
      <video ref={videoRef}>Webkamera er ikke tilgjengelig 😭</video>
      <button onClick={onTakePicture}>Ta bilde 📸</button>
      <canvas ref={canvasRef} />
      <div>
        <img ref={imageRef} alt="Bilde tatt med webkamera" />
      </div>

      {imageSrc && (
        <form method="post" action="/webkamera">
          <input name="image" defaultValue={imageSrc} />
          <button type="submit">POST bilde 📸</button>
        </form>
      )}
    </div>
  );
};

export default WebkameraRoute;
