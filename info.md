# Geometrisk bildeoptimalisering

Denne løsningen er et resultat av en fagdagstand i regi av Bekk. Løsningen er laget av [Sindre Moldeklev](https://github.com/sndrem), [Kjetil Svalestuen](https://github.com/kjesvale) og [Lena Tørresdal](https://github.com/lenatorresdal). Alle er med i faggruppen Bunnsolide webløsninger.

Videre finner du mer informasjon om hvilke verktøy som er tatt i bruk, og andre nyttige ressurser.

## Primitive

Løsningen bruker [Primitive](https://github.com/fogleman/primitive) for å generere bilder. Primitive består av en algortime som genererer vektor-bilder ved bruk av primitiver, eller geometriske figurer. Verktøyet tar input i form av filer, antall former og iterasjoner, hvor resultatet blir et tilfeldig generert kunstnerisk bilde.

## SVGO

[SVGO](https://github.com/svg/svgo) brukes for å optimalisere vektor-bildene. Genererte SVG-filer kan inneholde mye unødvendig metadata og støy, og SVGO er et verktøy som fjerner denne unødvendige dataen uten å påvirke resultatet.

## Les/undersøk videre:
- [The technology behind preview photos](https://engineering.fb.com/2015/08/06/android/the-technology-behind-preview-photos)
- [Pinterest’s Colored Background Placeholders](https://blog.embed.ly/pinterests-colored-background-placeholders-4b4c9fb8bb77)
- [How Medium does progressive image loading](https://jmperezperez.com/blog/medium-image-progressive-loading-placeholder/)
- [Optimize your images, do not let your users download big images for nothing](https://medium.com/doctolib/optimize-your-images-do-not-let-your-users-download-big-image-for-nothing-d2fcd49b8845)
- [SQIP - a pluggable image converter with vector support](https://github.com/axe312ger/sqip)
- [lazysizes](https://github.com/aFarkas/lazysizes)
