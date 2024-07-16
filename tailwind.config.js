/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   'inter': ["Inter", 'sans-serif']
      // }
      colors:{
        'simple': '#E17654',
        'rugged': '#115E59',
        'luxury': '#161616'
      },
    },
  },
  plugins: [],
}