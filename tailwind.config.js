/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'text-gradient': 'background: linear-gradient(155.23deg, #061012 20.76%, rgba(6, 16, 18, 0) 49.04%)',
        'green-dotted': "url('/public/green-dotted.svg')",
        'dark-dotted': "url('/public/dark-dotted.svg')",
      }
    },
    colors: {
      "black": "#000000",
      "dark": '#061012',
      "white": '#ffffff',
      "primary": '#06FFC3',
      'secondary': '#06FFC34A',
      'green-bg': '#0655468C',
      'green': '#065546',
      'yellow': '#FFC806',
      'dark-green': '#06FFC324',
    }
  },
  plugins: [],
}

