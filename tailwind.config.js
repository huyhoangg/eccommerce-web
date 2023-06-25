/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFE4A7",
        secondary: "#FFF4F4",
      },
    },
  },
  plugins: [],
};
