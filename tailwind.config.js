/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        tinkoff: ['Tinkoff Sans', 'sans-serif'],
      },
      fontSize: {
        xs: '.75rem',
        lg: '1.25rem',
        '2xl': '1.75rem',
      },
      colors: {
        'tf-black': '#202020',
        'tf-white': '#F0F0F0',
        'tf-yellow': '#FFDD2D',
        'tf-yellow-hover': '#FFE457',
        'tf-yellow-push': '#EFCF2C',
        'tf-gray': '#AAAAAA',
        'tf-gray-hover': '#BCBCBC',
        'tf-gray-push': '#969696',
        'tf-gray-dark': '#282828',
      },
    },
  },
  plugins: [],
};
