/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
        animation: {
            'reverse-spin': 'reverse-spin 1s linear infinite'
        },
        keyframes: {
            'reverse-spin': {
                from: {
                transform: 'rotate(360deg)'
                },
            }
        }
    },
  },
  plugins: [],
}

