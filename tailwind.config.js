module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Source-Sans':["Source Sans Pro",'sans-serif'],
      },
      colors: {
        "custom-pink":'#E93B85',
        "custom-blue":'#1742C1',
        "custom-darkblue":'#191E5B',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
