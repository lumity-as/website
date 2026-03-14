/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a192f',
          800: '#112240',
          700: '#1d3557',
        },
        ocean: {
          500: '#64ffda',
          400: '#7fecdf',
        },
        sail: {
          100: '#e6f1ff',
          200: '#ccd6f6',
          300: '#8892b0',
        },
        lighthouse: '#ffd700',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
