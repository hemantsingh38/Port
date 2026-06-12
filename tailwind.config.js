/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7F5F0',
        ink: '#141414',
        border: '#E8E8E8',
        blue: '#1A4BE8',
        pink: '#FF2D78',
        magenta: '#C8186C',
        green: '#3DF03D',
        orange: '#FF5A1F',
        blush: '#F3D9DC',
        sky: '#BFD4E8',
        'pale-yellow': '#FFFACD',
      },
      fontFamily: {
        serif: ['Bookmania', 'Rank', 'serif'],
      },
    },
  },
  plugins: [],
}
