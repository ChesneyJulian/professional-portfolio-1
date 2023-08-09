/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{views,public}/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'purple': '#37033A'
      },
    },
  },
  plugins: [],
}

