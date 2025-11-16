// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxl': '1.75rem',
        '3xl': '2rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s linear infinite',
      }
    },
  },
  plugins: [],
}