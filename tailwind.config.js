/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1c3e6e',
        secondary: '#f79f21',
        lightgray: '#b3b3b3',
      },
      fontFamily: {
        primary: ['"Aspira"', 'sans'],
        secondary: ['"FSP DEMO - Olyford ExtLt"', 'sans'],
      },
    },
    plugins: [],
  },
};
