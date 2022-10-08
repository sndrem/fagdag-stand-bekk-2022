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
                accent: "#FF8034",
                bekkRod: "#FF5B5B",
                soloppgang: "#FFB88D",
                gronn: "#16DBC4",
                skyfriKontrast: "#43CBFF",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
