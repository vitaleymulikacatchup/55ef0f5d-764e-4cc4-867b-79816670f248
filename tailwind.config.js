/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bitso-green': '#00D4AA',
        'bitso-dark': '#2D3748',
        'bitso-gray': '#4A5568',
        'bitso-light-gray': '#E2E8F0',
        'bitso-bg': '#F7FAFC'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}