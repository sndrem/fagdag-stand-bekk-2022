import './index.css';

const width = 1920;
let height = 0;
let streaming = false;

let feed: HTMLVideoElement;
let canvas: HTMLCanvasElement;
let knapp: HTMLButtonElement;
let bilde: HTMLImageElement;

const startWebkamera = async () => {
    feed = document.getElementById('webkamera-feed') as HTMLVideoElement;
    canvas = document.getElementById('webkamera-canvas') as HTMLCanvasElement;
    knapp = document.getElementById('webkamera-knapp') as HTMLButtonElement;
    bilde = document.getElementById('webkamera-bilde') as HTMLImageElement;

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });

        feed.srcObject = stream;
        feed.play();
    } catch (error) {
        console.error(`Klarte ikke å hente kamerafeed: ${error}`);
    }

    feed.addEventListener('canplay', forberedCanvas, false);

    knapp.addEventListener(
        'click',
        (event) => {
            taBilde();
            event.preventDefault();
        },
        false
    );

    tømBilde();
};

const forberedCanvas = () => {
    if (!streaming) {
        height = feed.videoHeight / (feed.videoWidth / width);

        if (isNaN(height)) {
            height = width / (4 / 3);
        }

        canvas.setAttribute('width', String(width));
        canvas.setAttribute('height', String(height));
        streaming = true;
    }
};

const tømBilde = () => {
    const context = canvas.getContext('2d');

    if (context) {
        context.fillStyle = '#AAA';
        context.fillRect(0, 0, canvas.width, canvas.height);

        const data = canvas.toDataURL('image/png');
        bilde.setAttribute('src', data);
    }
};

const taBilde = () => {
    const context = canvas.getContext('2d');

    if (width && height && context) {
        canvas.width = width;
        canvas.height = height;

        context.drawImage(feed, 0, 0, width, height);

        const data = canvas.toDataURL('image/png');
        bilde.setAttribute('src', data);
    } else {
        tømBilde();
    }
};

window.addEventListener('load', startWebkamera, false);
