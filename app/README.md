# App for fagdag-standen: Bildeoptimalisering med trekanter

Kom i gang med `npm install` og `npm run dev`.

## Konvertering av bilder fra Unsplash via Sqip

Applikasjonen tilbyr et søk mot Unsplash som viser 10 bilder. Velg et bilde og la magien ta over ved å transformere bilde til en svg som består av enkle former og farger.

## Kom i gang

For å kjøre koden trenger man et access token fra [Unsplash Developer](https://unsplash.com/developers). Når det er ordnet kjører du `./init.sh`. Når det er gjort legger du til access token for Unsplash-API'et i .env-filen.

Kjør så `npm install` og kjør koden med `ts-node index.ts`. Output blir tilgjengelig i terminalen. Du kan se konvertert bilde ved å åpne filen `result.svg`.

## Biblioteker i bruk

- [node-fetch](https://www.npmjs.com/package/node-fetch) for å kunne kjøre fetch-kall i Node
- [colors](https://www.npmjs.com/package/colors) for fargerikt output i terminalen
- [image-downloader](https://www.npmjs.com/package/image-downloader) for å enkelt laste ned bilder fra internett
- [sqip](https://github.com/axe312ger/sqip) for konvertering til svg
- [unsplash-js](https://github.com/unsplash/unsplash-js) for enkel kommunikasjon med Unsplash sitt API
