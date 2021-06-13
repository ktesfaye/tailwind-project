module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: { 'xl': '0px 0px 15px 15px rgba(0, 0, 0, 0.12)'},
      backgroundPosition:{
        right: '900px 100px',
      }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
