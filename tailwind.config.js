module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {

        'xs': '450px',
        'sm': '768px',
        'md': '992px',
        'lg': '1200px',
      },
      maxWidth: {
        '540': '540px',
        '720': '720px',
        '960': '960px',
        '1140': '1140px',
      },
      fontSize: {
        '20px': ['20px', '25px'],
        '28px': ['28px', '35px'],
        '38px': ['38px', '45px'],
      },
      fontWeight: {
        '600': 600,
      },
      margin: {
        '20': '20px',
        '80': '80px',
        '120': '120px',
        '27': '27px',
        '30': '30px',
        '17': '17px',
        '50': '50px',
      },
    },
  },
  variants: {},
  plugins: [],
}
