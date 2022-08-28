/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      mairy: ['Mairy', 'Helvetica', 'Arial', 'sans-serif'],
      kghappy: ['"KG Happy"', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        'blue-950': 'rgba(25, 67, 139, 1)',
        'sky-450': 'rgba(51, 204, 255, 1)',
      },
    },
  },
  plugins: [],
};
