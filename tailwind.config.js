/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        tactical: {
          dark: '#0a0a0a',
          card: '#121212',
          accent: '#eab308', // Yellow-500
          accentDark: '#ca8a04', // Yellow-600
          gray: '#262626'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(234, 179, 8, 0.5)',
      }
    },
  },
  plugins: [],
}