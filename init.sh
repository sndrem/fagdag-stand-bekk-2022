#!/bin/bash
IMAGE_FOLDER=public/images
if [ ! -d "$IMAGE_FOLDER" ]; then
    echo "📸 Oppretter mappen '/public/images'"
    mkdir public/images
fi

# Sjekk om .env-fil eksisterer fra før
echo "🤫 Sjekker om .env-fil eksisterer fra før..."
FILE=.env
if test -f "$FILE"; then
    echo "🤫 $FILE-fil eksisterer. Oppretter ikke fil"
else
    echo "🤫 Oppretter .env-fil. Åpne filen og legg inn access token fra Unsplash."
    touch .env
    echo "UNSPLASH_ACCESS_KEY=<DITT ACCESS TOKEN>" >> .env
fi