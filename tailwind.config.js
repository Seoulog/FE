/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inknut: ['Inknut Antiqua', 'serif'],
      },
      colors: {
        'seoul-brown': '#5F4541',
        'form-label': '#504E48',
      },
    },
  },
  plugins: [],
};
