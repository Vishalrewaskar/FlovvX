/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};