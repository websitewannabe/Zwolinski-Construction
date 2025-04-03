/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'zwolinski-burgundy': '#8B0D24',
        'zwolinski-navy': '#00205B',
      },
    },
  },
  plugins: [],
};