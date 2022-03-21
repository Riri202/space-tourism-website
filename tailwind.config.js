module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'main': '#0B0D17',
      'primary': '#FFFFFF',
      'secondary': '#D0D6F9',
      'grey': '#979797'
    },
    fontFamily: {
      sans: ['Barlow Condensed', 'sans-serif'],
      serif: ['Bellefair', 'serif'],
    },
    screens: {
      'sm': '665px',
      'md': '906px',
    }, 
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      // borderWidth: ['active']
    },
  },
  plugins: [],
}
