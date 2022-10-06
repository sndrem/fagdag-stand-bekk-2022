/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{ts,tsx,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                newzald: "newzald",
                din: ["din", "sans-serif"],
            },
            colors: {
                regn: "#BCCEDD",
                background: "#E7E7E7",
                accent: "#FF9999",
            },
        },
    },
    plugins: [],
};
