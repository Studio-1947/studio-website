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
        primary: {
          DEFAULT: "#4D00DF",
          foreground: "#FFFFFF",
          hero: "var(--color-primary-hero)",
        },
        background: "var(--color-bg-primary)",
        foreground: "var(--color-text-primary)",
        muted: {
          DEFAULT: "var(--color-bg-secondary)",
          foreground: "var(--color-text-secondary)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "#FFFFFF",
        },
        border: "var(--color-gray-200)",
        royal: {
          500: "#a855f7",
          700: "#7e22ce",
        },
      },
    },
  },
  plugins: [],
};
