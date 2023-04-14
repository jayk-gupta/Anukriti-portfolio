/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // What this query really means, is “If [device width] is greater than or equal to 600px, then do {…}”
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1300px",
    },
    fontFamily: {},
    extend: {
      // custom colors
      colors: {
        pinkishRed: "#fd2155"
      },
    },
  },
  plugins: [],
};

