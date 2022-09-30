const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        regn: "#BCCEDD",
        background: "#BCCEDD",
        accent: "#FF9999",
      },
    },
  },
  plugins: [],
};
