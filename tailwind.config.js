/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pri: "#a8d8e6",
        sec: "#4b8da3",
        grey: "#b2c2c6",
        ter: "#2c3e50",
      },
    },
  },
  plugins: [],
};
