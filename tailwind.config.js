/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "d-background": "#141D2F",
        "d-themeBtn": "#fff",
        "d-card": "#1E2A47",
        "d-textNorm": "#fff",
        "d-textBolded": "#FFF",
        background: "#F6F8FF",
        themeBtn: "#4B6A9B",
        card: "#FEFEFE",
        textNorm: "#697C9A",
        textBolded: "#2B3442",
        searchBtn: "#0079ff",
      },
    },
  },
  plugins: [],
}

