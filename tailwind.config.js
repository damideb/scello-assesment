/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue100: '#F2F0F9',
        blue200: '#E5E5E5',
        blue300: '#6E6893',
        blue400: '#25213B',
        blue500: '#C6C2DE',
        purple100: '#6D5BD0'
      },
      fontFamily: {
        inter: ['Inter']
      }
    }
  },
  plugins: []
}
