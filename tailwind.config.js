/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
         
        primary: '#4CAF50',
        body: '#424242',
        title :'#C0C0C0'
       
        
    },
    fontFamily:{
      abc:['Merriweather']
    }
    },
  },
  plugins: [],
}

