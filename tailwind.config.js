const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        title: ['Rakkas', 'cursive'],
        navbar: ['Cantarell', 'sans-serif'],
        list: ['Cinzel', 'serif'],
        
      },
      backgroundImage: theme => ({
        'about': "url('/images/taipei.jpg')",
      }),
      brightness: {
        35: '.35',
        40: '.40',
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}