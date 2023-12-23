/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#1A1A1A",
      overlay: "#262626",
      btn: "#CAFF33",
      btnDisabled: "#d51a1a",
    },
    screens: {
      sm: "",

      md: "850px",

      lg: "1200px",
    },
    fontFamily: {
      parent: "",
    },
    extend: {},
  },
  plugins: [],
};
