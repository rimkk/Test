/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        'fly-gray': {
          0: '#121212',
          1: '#1c1c1c',
          2: '#292929',
          3: '#232323',
          4: '#2a2a2a',
        },
        'fly-accent': {
          9: '#3e7edd',
          10: '#548ee4',
          12: '#d6e6ff',
        },
        'fly-neutral': {
          11: '#b5b5b5',
          12: '#efefef',
        },
        'fly-text': '#eeeef0',
        'fly-error': {
          alpha: '#ff173f2d',
          text: '#ff9592',
        }
      }
    },
  },
  plugins: [],
} 