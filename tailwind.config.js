/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#59C1BD",
        // primaryHover: "#70D3C2",
        secondary: "#A0E4CB",
        lighter: "#CFF5E7",
        darkPrimary: "#0D4C92",
        backgroundPrimary: "#EEEEEE",
        backgroundSecondary: "#DDDDDD",
        backgroundDarkerSecondary: "#CCCCCC",
      }
    },
  },
  plugins: [],
}
