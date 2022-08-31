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
        'sky-550': 'rgba(29, 113, 177, 1)',
        'sky-750': 'rgba(0, 172, 229, 1)',
        'sky-775': 'rgba(0, 134, 179, 1)',
        'yellow-550': 'rgba(206, 171, 25, 1)',
      },
    },
  },
  plugins: [],
};
