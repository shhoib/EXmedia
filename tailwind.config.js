/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'ffont' : ["Jersey 15", 'sans-serif']
      }
    },
  },
  plugins: [],
}

