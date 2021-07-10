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
      },
      lineHeight: {
        "0.5": "0.5",
        "0.6": "0.6"
      },
      screens: {
        '2xl': {'max': '1535px'},
        'xl': {'max': '1279px'},
        'lg': {'max': '1023px'},
        'md': {'max': '767px'},
        'sm': {'max': '639px'},
        'xs': {'max': '490px'},
        'xxs': {'max': '376px'}
      },
      fontSize: {
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
        '5xl': '5rem',
        '6xl': '6rem',
        '7xl': '7rem',
        '10xl': '10rem',
        '12xl': '12rem',
        '14xl': '14rem',
        '15xl': '15rem'
      }

    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}