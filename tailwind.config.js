/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'ls': '10px 10px 5px 0px rgba(0,0,0,0.75)',
        'xp': '2px 2px 5px 0px rgba(109, 104, 117)',
      }
    },
    fontFamily: {
      "body": ["Open Sans", "sans-serif"],
    }
  },
  plugins: [],
}