// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './app//*.{js,ts,jsx,tsx}',
      './pages//*.{js,ts,jsx,tsx}',
      './components//*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'media', // or 'class'
    theme: {
      extend: {},
    },
    plugins: [],
  }