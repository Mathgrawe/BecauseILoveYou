// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          cursive: ['"Dancing Script"', 'cursive'],  // ✨ aqui!
        },
      },
    },
    plugins: [],
  }
  