import {sqip, SqipResult} from "sqip";
import * as fs from "fs";
import {searchPhotos} from "./services/unsplash";
import {downloadImage} from "./services/imageDownloadService";
import path from "path";
import colors from "colors";
import {collapseTextChangeRangesAcrossMultipleVersions} from "typescript";

console.log(path.dirname(__filename));

const originalFil = "./fall.jpg";

function regnUtStorrelse(fil: fs.Stats): number {
  return fil.size / (1024 * 1024);
}

function regnUtBesparelse(original: number, nyStorrelse: number): number {
  const x = original - nyStorrelse;
  return (x / original) * 100;
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

(async () => {
  const query = "dogs";
  console.log(colors.green(`Søker etter bilder av: ${query}`));
  const pictures = await searchPhotos(query);
  console.log(
    colors.green(
      `Fant ${pictures?.response?.results.length} bilder. Velger et tilfeldig et...`
    )
  );
  const firstPicture =
    pictures?.response?.results[
      getRandomInt(0, pictures.response.results.length)
    ];
  const url = (firstPicture?.urls.raw ?? "") + ".png";
  const filepath = `${path.dirname(__filename)}/images/${query}.png`;
  console.log(colors.green("Laster ned bilde..."));
  await downloadImage(url, filepath);
  console.log(colors.green(`Bilde er lastet ned og kan sees her: ${filepath}`));
  const options = {
    numberOfPrimitives: 500,
    mode: 1,
    blur: 0,
  };
  console.log(
    colors.green(
      `Kjører bilde gjennom Sqip med følgende parameter: ${JSON.stringify(
        options,
        null,
        2
      )}`
    )
  );

  const result = (await sqip({
    input: filepath,
    width: 0,
    plugins: [
      {
        name: "sqip-plugin-primitive",
        options,
      },
      "sqip-plugin-svgo",
    ],
  })) as Partial<SqipResult>;

  fs.writeFileSync("./result.svg", result.content);
  console.log(colors.green("Ferdig med konvertering i Sqip!"));
  const original = fs.statSync(originalFil);
  const resultat = fs.statSync("./result.svg");
  delete result.content;
  const originalStorrelse = regnUtStorrelse(original);
  const nyStorrelse = regnUtStorrelse(resultat);
  console.log(`Original størrelse i mb: ${originalStorrelse.toFixed(2)}`);
  console.log(`Ny størrelse i mb: ${nyStorrelse.toFixed(10)}`);
  console.log(
    colors.rainbow(
      `Du har spart: ${regnUtBesparelse(originalStorrelse, nyStorrelse).toFixed(
        2
      )}%`
    )
  );
})();
