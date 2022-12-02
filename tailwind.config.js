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

          "base-100": "#F1F1F1",

          "info": "#4B8EEC",

          "success": "#17968B",

          "warning": "#F5C238",

          "error": "#E8646D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
