// tailwind.config.js
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#d9cab2',
        secondary: '#b3a184',
        accent: '#937e5c',
        dark: '#705c3d',
        darkest: '#31230c',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],

}
