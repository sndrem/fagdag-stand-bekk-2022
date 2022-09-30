/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        newzald: "newzald",
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
