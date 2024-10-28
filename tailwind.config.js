/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#090D1F",
        primaryAlpha: "#00000057",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
