/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        root: "250px",
      },
      colors: {
        primary: "#F5AA3A",
        secondary: "#ff0000",
        white: "#ffffff",
        black: "#000000",
        grey: "#f1f1f1",
        background: "#010613",
        secondaryBackground: "#1A1E2C",
        borderColor: "#313238",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Sen", "sans-serif"],
      },
    },
  },
  plugins: [],
};
