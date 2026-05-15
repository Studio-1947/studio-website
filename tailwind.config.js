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
          DEFAULT: "#D60000",
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
          500: "#D60000",
          700: "#B30000",
        },
      },
      animation: {
        "cell-ripple": "cell-ripple var(--duration, 200ms) ease-out none 1 var(--delay, 0ms)",
      },
      keyframes: {
        "cell-ripple": {
          "0%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
          "100%": { opacity: "0.4" },
        },
      },
    },
  },
  plugins: [],
};
