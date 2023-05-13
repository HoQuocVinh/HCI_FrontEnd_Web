/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#A274FF",
      },
      maxWidth: {
        1172: "1172px",
      },
      fontFamily: {
        body: "OpenSans, sans-serif",
        roboto: "Roboto, sans-serif",
        inter: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
