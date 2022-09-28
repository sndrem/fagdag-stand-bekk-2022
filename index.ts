import { sqip, SqipResult } from "sqip";
import * as fs from "fs";
import { searchPhotos } from "./services/unsplash";
import { downloadImage } from "./services/imageDownloadService";
import path from "path";
import { log } from "./utils/logger";

function regnUtStorrelseIMB(fil: fs.Stats): number {
  return fil.size / (1024 * 1024);
}

function regnUtBesparelseIProsent(
  original: number,
  nyStorrelse: number
): number {
  const x = original - nyStorrelse;
  return (x / original) * 100;
}

function tilfeldigTallMellom(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function lagreFilTilMappe(destination: string, content: any) {
  fs.writeFileSync(destination, content);
}

async function fetchFromUnsplashAndRunThroughSqip(query: string) {
  log.success(`Søker etter bilder av: ${query}`);
  const unsplashResponse = await searchPhotos(query);
  const tilfeldigTall = tilfeldigTallMellom(
    0,
    unsplashResponse?.response?.results.length ?? 0
  );
  log.success(
    `Fant ${unsplashResponse?.response?.results.length} bilder. Velger bilde nummer ${tilfeldigTall}`
  );
  const tilfeldigValgtBilde =
    unsplashResponse?.response?.results[tilfeldigTall];
  const destUrl = (tilfeldigValgtBilde?.urls.raw ?? "") + ".png";

  const nedlastetBildePath = `${path.dirname(__filename)}/images/${query}.png`;
  log.success("Laster ned bilde...");
  await downloadImage(destUrl, nedlastetBildePath);
  log.success(`Bilde er lastet ned og kan sees her: ${nedlastetBildePath}`);

  const options = {
    numberOfPrimitives: 500,
    mode: 1,
    blur: 0,
  };
  log.success(
    `Kjører bilde gjennom Sqip med følgende parameter: ${JSON.stringify(
      options,
      null,
      2
    )}`
  );

  const result = (await sqip({
    input: nedlastetBildePath,
    plugins: [
      {
        name: "sqip-plugin-primitive",
        options,
      },
      "sqip-plugin-svgo",
    ],
  })) as Partial<SqipResult>;

  lagreFilTilMappe("./result.svg", result.content);
  log.success("Ferdig med konvertering i Sqip!");

  const original = fs.statSync(nedlastetBildePath);
  const resultat = fs.statSync("./result.svg");
  log.success(
    `Du kan se resultatet fra Sqip her: ${path.dirname(__filename)}/result.svg`
  );

  const originalStorrelse = regnUtStorrelseIMB(original);
  const nyStorrelse = regnUtStorrelseIMB(resultat);

  log.success(`Original størrelse i MB: ${originalStorrelse.toFixed(2)}`);
  log.success(`Ny størrelse i MB: ${nyStorrelse.toFixed(10)}`);
  log.success(
    `Du har spart: ${regnUtBesparelseIProsent(
      originalStorrelse,
      nyStorrelse
    ).toFixed(2)}%`
  );
}

async function main() {
  const query = "cake";
  await fetchFromUnsplashAndRunThroughSqip(query);
}

main();
