/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#002063",
        secondary: "#fbe6ba",
        primaryLight: "#248acc",
        primaryDark: "#002b4e",
        headingRed: "#F12006",
      },
      fontFamily: {
        heading: ["Aboreto", "cursive"],
        body: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      spacing: {
        "0.5rem": "0.5rem",
        "1rem": "1rem",
        "1.5rem": "1.5rem",
        "2rem": "2rem",
        "2.5rem": "2.5rem",
        "3rem": "3rem",
        "3.5rem": "3.5rem",
        "4rem": "4rem",
        "4.5rem": "4.5rem",
        "5rem": "5rem",
        "-0.5rem": "-0.5rem",
        "-1rem": "-1rem",
        "-1.5rem": "-1.5rem",
        "-2rem": "-2rem",
        "-2.5rem": "-2.5rem",
        "-3rem": "-3rem",
        "-3.5rem": "-3.5rem",
        "-4rem": "-4rem",
        "-4.5rem": "-4.5rem",
        "-5rem": "-5rem",
      },
    },
  },
  plugins: [],
};
