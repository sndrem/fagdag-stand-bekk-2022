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

echo "Sjekker om Brew er installert..."
if ! [ -x "$(command -v brew)" ]; 
then
  echo '💥 Error: brew er ikke installert.' >&2
  echo "Prøver å installere brew"
  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  brew update
else
    echo "Brew er installert 👍🏼"
fi

echo "Sjekker om Go er installert..."
if ! [ -x "$(command -v go)" ]; 
then
  echo '💥 Error: go er ikke installert.' >&2
  echo "Prøver å installere Go"
  brew install golang
  mkdir -p $HOME/go/{bin,src,pkg}
  export GOPATH=$HOME/go
  export GOROOT="$(brew --prefix golang)/libexec"
  export PATH="$PATH:${GOPATH}/bin:${GOROOT}/bin"
  source $HOME/.bashrc
  source $HOME/.zshrc
else
    echo "Go er installert 👍🏼"
fi

echo "Sjekker om Primitive er installert..."
if ! [ -x "$(command -v primitive)" ]; 
then
  echo '💥 Error: primitive er ikke installert.' >&2
  echo "Prøver å installere Primitive"
  go install github.com/fogleman/primitive@latest
  export PATH=$PATH:$(go env GOPATH)/bin
else
    echo "Primitive er installert 👍🏼"
fi