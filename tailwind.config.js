module.exports = {
  content: [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        100: 'hsl(233, 26%, 24%)',
        200: 'hsl(136, 65%, 51%)',
        300: 'hsl(192, 70%, 51%)'
      },
      neutrals: {
        100: 'hsl(0, 0%, 100%)',
        200: 'hsl(0, 0%, 98%)',
        300: 'hsl(220, 16%, 96%)',
        400: 'hsl(233, 8%, 62%)'
      }
    },
    fontFamily: {
      main: ['Public Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
