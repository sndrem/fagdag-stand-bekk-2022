# Geometrisk bildeoptimalisering

Denne løsningen er et resultat av en fagdagstand i regi av Bekk. Løsningen er laget av [Sindre Moldeklev](https://github.com/sndrem), [Kjetil Svalestuen](https://github.com/kjesvale) og [Lena Tørresdal](https://github.com/lenatorresdal). Alle er med i faggruppen Bunnsolide webløsninger.

Videre finner du mer informasjon om hvilke verktøy som er tatt i bruk, og andre nyttige ressurser.

## Primitive

Løsningen bruker [Primitive](https://github.com/fogleman/primitive) for å generere bilder. Primitive består av en algortime som genererer vektor-bilder ved bruk av primitiver, eller geometriske figurer. Verktøyet tar input i form av filer, antall former og iterasjoner, hvor resultatet blir et tilfeldig generert kunstnerisk bilde.

## SVGO

[SVGO](https://github.com/svg/svgo) brukes for å optimalisere vektor-bildene. Genererte SVG-filer kan inneholde mye unødvendig metadata og støy, og SVGO er et verktøy som fjerner denne unødvendige dataen uten å påvirke resultatet.

## Andre nyttige ressurser:
