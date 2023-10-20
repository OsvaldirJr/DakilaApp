/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'white60': '#F0F0F0',
        'gray30': '#C4C4C4',
        'grayLight': '#E3E3E3',
        'grayDark': '#666666',
        'gold10': '#E2C535',
        'black': '#000000',
        'redAlert': '#E11515',
        'greenActive': '#49CF3D',
        'blueGraphs': '#007BFF',
        // gradiente dourado
        'goldGradientFrom': '#FBE485',
        'goldGradientTo': '#AF8729',
        // gradiente cinza
        'grayGradientFrom': '#E3E3E3',
        'grayGradientTo': '#A3A3A3',
        // gradiente preto
        'blackGradientFrom': '#292929',
        'blackGradientVia': '#000000',
        'blackGradientTo': '#000000',
      }
    },
  },
  plugins: [],
}