/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#A274FF",
      },
    },
    fontFamily: {
      body: "OpenSans, sans-serif",
      footer: "Roboto, sans-serif",
      inter: "Inter, sans-serif",
    },
  },
  plugins: [],
};
