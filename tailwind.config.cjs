/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        violet: "#5964e0",
        lightViolet: "#939bf4" ,
        bgBtn: "#eeeffc",
        bgBtn2: "#303642",
        lightGray: "#f4f6f8",
        midnight: "#121721",
        veryDarkBlue: "#19202d",
      },
    },
  },
  plugins: [],
}
