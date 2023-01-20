/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
       fontFamily:
      {
        'poller1': '"Poller One"',
        'raleway': 'Raleway',
      }
    },
  },
  plugins: [],
}
