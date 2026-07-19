/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        smoke: '#6F6F6F',
        sand: '#F7F3EB',
        ocean: '#0E7C86',
        sunset: '#E8734A',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
