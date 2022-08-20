const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Lobster', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
