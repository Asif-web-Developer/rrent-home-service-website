/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["*"],
  theme: {
    extend: {
      
      fontFamily:{
       new:["New Amsterdam", "sans-serif"]
      }
      

      
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

