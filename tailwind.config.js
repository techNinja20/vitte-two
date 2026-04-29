/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wale: {
          100: "#6EE7B7",
          200:"#a5ebcf"
        }
      },
      fontSize: {
        twoRem: "2rem",
        eightRem:"8rem"
      },
      padding: {
         twoRem: "2rem",
        eightRem:"8rem"
      },
      backgroundImage: {
        bg:"url('/public/main.svg')"
      }
    },
  },
  plugins: [],
}