/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        green:"#16b81c",
        greenDark:"#0a8f10",
        secondary:"#6b6b6b",
        buttonPrimary:"#0b2a66",
        primary:"#1a1a1a",
        cardBg:"#f1f1f1",
        footerBg:"linear-gradient(#0aa010, #000 85%);"
      },
       backgroundImage: {
        footerBg: "linear-gradient(#0aa010, #000 85%)",
      },
    },
  },
  plugins: [],
}