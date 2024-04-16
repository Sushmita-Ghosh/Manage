/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        glory: ["Glory", "sans-serif"],
      },
      colors: {
        "primary-blue": "#64c9cf",
        "yellow-light": "#fde49c",
        "yellow-ochre": "#ffb740",
        "deep-brown": "#df711b",
      },
    },
  },
  plugins: [],
};
