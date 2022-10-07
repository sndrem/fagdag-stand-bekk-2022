import { Link } from "react-router-dom";

const tips = [
    { emoji: "😻", query: "kittens" },
    { emoji: "🐶", query: "puppies" },
    { emoji: "🍁", query: "fall" },
    { emoji: "🍕", query: "pizza" },
    { emoji: "🐠", query: "fish" },
    { emoji: "📸", query: "photography" },
    { emoji: "🐢", query: "turtles" },
    { emoji: "🦄", query: "unicorns" },
    { emoji: "🐿", query: "chipmunks" },
    { emoji: "🎄", query: "christmas" },
    { emoji: "🌅", query: "sunset" },
    { emoji: "⛰", query: "mountains" },
];

export function Soketips() {
    return (
        <div className="text-center">
            <p>Usikker på hva du skal søke etter?</p>
            <p>Trykk på en av emojiene og se hva som skjer...</p>
            <div className="my-10 grid grid-cols-3 gap-5 text-4xl">
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
