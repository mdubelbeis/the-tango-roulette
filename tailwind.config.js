/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-orange": "#f26122",
        "primary-teal": "#388084",
        "primary-teal-dark": "#387A88",
        "primary-white": "#f8f8f9",
        shades: {
          50: "#fff8f6",
          100: "#fff2ed",
          200: "#ffdfd0",
          300: "#e9d0bb",
          400: "#95a9a0",
          500: "#388084",
          600: "#0e6064",
          700: "#004a4e",
          800: "#002e30",
          900: "#001d1f",
        },
        white: {
          100: "#ffffff",
          200: "#e8e8eb",
          300: "#d7d7db",
          400: "#a3a3ac",
          500: "#72727b",
          600: "#53535c",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
        },
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
