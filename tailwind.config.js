/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#EFEFEF",
        primary: "#E3A976",
        secondary: "#EECFA1",
      },
    },
  },
  plugins: [],
};
