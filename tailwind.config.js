/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '540px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}