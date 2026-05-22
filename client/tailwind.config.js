/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";


export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
   
      fontFamily: {
        //  heading: ["Cairo", "sans-serif"],
  sans: ["Poppins", "sans-serif"],
      },

      
      borderRadius: {
        DEFAULT: "var(--border-radius)",
      },
      
   


    },
  },
  plugins: [daisyui],
}