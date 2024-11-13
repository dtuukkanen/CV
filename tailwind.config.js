/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        'fira': ['Fira Sans', 'sans-serif'],
      },
      colors: {
        primary: "#021526",
        secondary: "#03346E",
        accent: "#6EACDA",
        text: "#E2E2B6",
      },
    },
  },
  plugins: [],
}

