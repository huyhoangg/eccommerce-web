/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily : {
      poppins: ["Poppins"],
    },
    extend: {
      colors: {
        primary: "#FFF9E5",
        secondary: "#FFF4F4",
      },
    },
  },
  plugins: [],
};
