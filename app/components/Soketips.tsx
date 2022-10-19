import { Link } from "react-router-dom";

const tips = [
    { emoji: "🍁", query: "fall" },
    { emoji: "🦩", query: "bird" },
    { emoji: "😻", query: "kittens" },
    { emoji: "🐶", query: "puppies" },
    { emoji: "🐠", query: "fish" },
    { emoji: "🎃", query: "halloween" },
    { emoji: "🐢", query: "turtles" },
    { emoji: "🦄", query: "unicorns" },
    { emoji: "🐿", query: "chipmunks" },
    { emoji: "🌅", query: "sunset" },
    { emoji: "⛰", query: "mountains" },
    { emoji: "💐", query: "flower" },
];

export function Soketips() {
    return (
        <div className="text-center">
            <p className="stor-tekst">Bruk engelsk – søket går mot Unsplash</p>
            <p className="stor-tekst">
                Usikker på hva du skal søke etter? Trykk på en av emojiene og se
                hva som skjer...
            </p>
            <div className="my-10 grid grid-cols-3 gap-5 text-5xl lg:grid-cols-12">
                {tips.map(({ emoji, query }) => {
                    return (
                        <Link key={query} to={`/search?query=${query}`}>
                            {emoji}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
