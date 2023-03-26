/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "fully": "109%",
      },
      padding: {
        "1/10": "10%",
      },
      spacing: {
        "7rm": "7.625rem",
        "6rm": "6.75rem",
        15: "3.75rem",
        22: "5.625rem"
      },
      boxShadow: {
        'ls': '10px 10px 5px 0px rgba(0,0,0,0.75)',
        'xp': '2px 2px 5px 0px rgba(109, 104, 117)',
        "inbf": "-161px -22px 92px 0px rgba(0,0,0,0.58) inset",
        "inaf": "142px -22px 92px 0px rgba(0,0,0,0.58) inset",
      },
      zIndex: {
        5: "5"
      },
      fontFamily: {
        "body": ["Open Sans", "sans-serif"],
      },
      textColor: {
        "black": "#000000",
        "white": "#FFFFFF",
        "aliceBlue": "#f0f8ff",
        "perfume": "#CB9CF2",
      },
      backgroundColor: {
        "almostBlack": "rgba(0, 0, 0, 0.8)",
        "citrineWhite": "#faf3dd",
        "perfume": "#CB9CF2",
        "saltBox": "#6D6875",
        "malibu": "#61DBFB",
        "ronchi": "#f0db4f",
        "cerulean": "#01B7D6",
        "mariner": "#2d79c7",
        "cinnabar": "#e13332",
        "camelot": "#853957",
        "flamingo": "#f05033",
      },
      hover: {
        backgroundColor: {
          "black": "#000000",
          "white": "#FFFFFF",
          "citrineWhite": "#faf3dd",
          "perfume": "#CB9CF2",
          "saltBox": "#6D6875"
        }
      },
    }
  },
  plugins: [],
}