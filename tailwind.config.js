/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mairy: ['Mairy', 'Helvetica', 'Arial', 'sans-serif'],
        kghappy: ['"KG Happy"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'red-550': 'rgba(234, 69, 69, 1)',
        'blue-350': 'rgba(64, 120, 213, 1)',
        'blue-650': 'rgba(38, 88, 170, 1)',
        'blue-750': 'rgba(30, 77, 154, 1)',
        'blue-850': 'rgba(31, 122, 182, 1)',
        'blue-925': 'rgba(28, 78, 144, 1)',
        'blue-950': 'rgba(25, 67, 139, 1)',
        'sky-150': 'rgba(189, 210, 245, 1)',
        'sky-250': 'rgba(159, 195, 255, 1)',
        'sky-450': 'rgba(51, 204, 255, 1)',
        'sky-550': 'rgba(29, 113, 177, 1)',
        'sky-650': 'rgba(0, 154, 226, 1)',
        'sky-750': 'rgba(0, 172, 229, 1)',
        'sky-775': 'rgba(0, 134, 179, 1)',
        'yellow-550': 'rgba(206, 171, 25, 1)',
      },
      backgroundImage: {
        'check-icon':
          "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")",
      },
      keyframes: {
        expand: {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.1)',
          },
        },
      },
      animation: {
        expand: 'expand 1.5s infinite ease-in-out both',
      },
      transitionDuration: {
        0: '0ms',
      },
    },
  },
  plugins: [],
};
