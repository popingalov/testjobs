const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        fill: '#384564',
        employ: 'rgba(85, 105, 158, 0.3)',
        employBorder: 'rgba(85, 105, 158, 0.3)',
        empolyText: '#55699E',
        benefits: 'rgba(255, 207, 0, 1)',
        benefitsBorder: '#FFCF00',
        benefitsText: '#988B49',
      },
      text: {
        title: '#3A4562',
      },
      fontFamily: {
        sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
