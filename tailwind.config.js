/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#FF8C32",
        darkPrimary: "#06113C",
        backgroundPrimary: "#EEEEEE",
        backgroundSecondary: "#DDDDDD",
        backgroundDarkerSecondary: "#CCCCCC",
      }
    },
  },
  plugins: [],
}
