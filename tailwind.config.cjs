/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',"./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        primaryColor: '#D9D9D9',
        secondryColor: '#000000'
      }
    },
  },
  plugins: [],
}
