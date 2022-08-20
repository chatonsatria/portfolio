/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  purge: {
    enabled: true,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: ["dark"], //specific classes
    },
  },
  theme: {
    typography: (theme) => ({}),
    extend: {
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
      transitionProperty: {
        height: "height",
        width: "widht",
      },
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
