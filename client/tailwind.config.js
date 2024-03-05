/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        lato: ["Lato"],
      },

      screens: {
        xs: "200px",
      },

      objectFit: ["cover"],
      backgroundColor: {
        primary: "#2B1A4E",
        secondary: "#9F1B64",
        tertiary: "#ECBA3B",
        "rp-black": "#1B1B1B",
        "rp-dark-gray": "#282828",
        "rp-gray": "#484848",
        "rp-white-gray": "#E4E4E4",
      },

      textColor: {
        primary: "#2B1A4E",
        secondary: "#9F1B64",
        tertiary: "#ECBA3B",
        "rp-black": "#1B1B1B",
        "rp-dark-gray": "#282828",
        "rp-gray": "#484848",
        "rp-error": "#FE3838",
        "rp-success": "#68EC52",
      },
    },
  },
  plugins: [],
};
