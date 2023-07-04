/** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     fontFamily : {
//       lora: ["Lora"],
//     },
//     extend: {
//       colors: {
//         primary: "#FFF9E5",
//         secondary: "#FFF4F4",
//       },
//     },
//   },
//   plugins: [],
// };

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily : {
      lora: ["Lora"],
    },
    extend: {
      colors: {
        primary: "#FFF9E5",
        secondary: "#FFF4F4",
      },
    },
  },
  plugins: [],
});