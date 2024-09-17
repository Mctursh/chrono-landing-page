/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'text-gradient': 'linear-gradient(179.77deg, #061012 1.76%, rgba(6, 16, 18, 0) 85.04%)',
        'green-dotted': "url('/public/green-dotted.svg')",
        'dark-dotted': "url('/public/dark-dotted.svg')",
      },
      fontFamily: {
        'grotesk': ['Space Grotesk'],
        'suisse': ['suisse'],
        'neubit': ['neubit'],
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
      'faq-green': '#04261E',
    },
    screens: {
      'desktop-above': { 'min': '1536px' },
      'desktop': { 'min': '1440px' },
      'desktop-mini': { 'max': '1400px' },
      'desktop-midi': { 'max': '1285px' },
      'laptop': { 'max': '1200px' },
      'ipad': { 'max': '1024px' },
      'tablet': { 'max': '856px' },
      'phone': { 'max': '768px' },
      'android': { 'max': '678px' },
      'phablet': { 'max': '441px' },
      'iphone': { 'max': '375px' },
      'mini': { 'max': '325px' },
    }
  },
  plugins: [],
}