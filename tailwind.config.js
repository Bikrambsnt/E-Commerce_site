/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {

      colors:{
        primary: 'var(--primary-color)',
        lightDark: 'var(--light-dark)',
        mediumGreen: 'var(--medium-green)',
        darkGreen:'var(--dark-green)',
        normalGreen:'var(--normal-green)',
      },
      fontFamily:{
        Raleway: ['Raleway' ," sans-serif"],
      },

    },
  },
  plugins: [],
}

