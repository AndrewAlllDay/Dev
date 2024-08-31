/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Fustat", 'sans-serif'],
        'hand': ['Shadows Into Light', 'cursive'],
      },
      gridTemplateColumns: {
        '7-30': '70% 28%',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/logotop.png)",
      },
      colors: {
        'cityblue': '#2a4780',
        'cityred': '#cd2033',
      },

      animation: {
        // Bounces 5 times 1s equals 5 seconds
        'bounce-short': 'bounce 1s ease-in-out 5'
      },


    },
  },
  plugins: [],
}