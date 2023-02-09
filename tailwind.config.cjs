/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',"./src/**/*.{js,jsx}"],
  theme: {
    extend: {
     
      colors:{
        primaryColor: '#2374B1',
        primaryDark: '#0A2647',
        primaryLight1:'background: #205295',
        primaryLight2: 'background: #2C74B3',
        
        secondryColor: ' #273C7F',
        secondryDark: '#13005A',
        secondryLight: '#1C82AD',
        
        
      },
      container:{
        margin: '0 auto'
      }
    },
    
  },
  plugins: [],
}
