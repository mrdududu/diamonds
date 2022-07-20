/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        tinkoff: ["Tinkoff Sans", "sans-serif"],
      },
      colors: {'tf-black': '#202020', 'tf-white': '#F0F0F0'}
    },
  },
  plugins: [],
}
