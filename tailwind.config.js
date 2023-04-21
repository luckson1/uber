// tailwind.config.js
const nativewind = require("nativewind/tailwind/css")
module.exports = {

  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}",     "./screens/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
    theme: {
      extend: {},
    },
    plugins: [nativewind],
  }