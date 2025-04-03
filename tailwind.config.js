/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'zwolinski-primary': '#000000',
        'zwolinski-secondary': '#C0C0C0',
        'zwolinski-accent': '#808080',
      },
    },
  },
  plugins: [],
};