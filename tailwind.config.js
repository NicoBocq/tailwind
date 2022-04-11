module.exports = {
  content: ['./src/**/*.{tsx,ts, js}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#008bd2',
          100: '#008bd2',
          200: '#008bd2',
          300: '#008bd2',
          400: '#009EED',
          500: '#008bd2',
          600: '#008bd2',
          700: '#008bd2',
          800: '#006BA1',
          900: '#004161'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
