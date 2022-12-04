module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {},
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#1678CB",

          "secondary": "#3B8BEA",

          "accent": "#68D6F5",

          "neutral": "#242424",

          "base-100": "#FFFFFF",

          "info": "#A4A4A4",

          "success": "#17968B",

          "warning": "#F5C238",

          "error": "#E8646D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
