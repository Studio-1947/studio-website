/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Bricolage Grotesque"', "sans-serif"],
      },
      colors: {
        primary: "#340963",
        royal: {
          500: "#a855f7",
          700: "#7e22ce",
        },
      },
    },
  },
  plugins: [],
};
