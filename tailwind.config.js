/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'indigo-900': '#0f152a',
        'violet-600': '#3c457b',
        'burgundy-700': '#7f2447',
        'rose-400': '#a66685',
        'taupe-300': '#c9b9a5',
        'offwhite': '#efe8e3',
        'text': 'var(--text)',
        'muted-text': 'var(--muted-text)',
      }
    },
  },
  plugins: [],
}

