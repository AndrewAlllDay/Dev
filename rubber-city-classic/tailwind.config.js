/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      gridTemplateColumns: {
        '7-30': '70% 28%',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/logotop.png)",
      },
      colors: {
        'cityblue': '#2a4780',
      },
    },
  },
  plugins: [],
}