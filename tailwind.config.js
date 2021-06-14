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
      backgroundPosition:{right: '900px 100px'},
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      
    },
  },
  variants: {
    animation: ["motion-safe"],
    extend: {
    },
  },
  plugins: [],
}
