module.exports = {
  mode: "jit",
  content: [
    "./public/**/*.html",
    "./components/**/*.{js,jsx,ts,tsx,vue}",
    "./pages/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    fontFamily: {
      body: ["DM Sans", "sans-serif"],
    },

    extend: {
      screens: {
        "2xl": "1420px",
        "3xl": "1680px",
        "4xl": "1900px",
        "5xl": "2400px",
      },

      colors: {
        primary: "#FCD1CA",
        navbarBg: "rgba(255, 255, 255, 0.04);",
        accent: "",
        _1: "#1D293F",
        _2: "#20E9BC",
        _3: "#F2C94C",
        _4: "#FF374F",
        primary1: "#FF6661",
        primary2: "#FF9D8D",
        primary3: "#FCD1CA",
        footerBg: "#131313",
        learnpapayatext: "#F9FAFB",
        learnpapayatext2: "#9CA3AF",
        backboneText: "#23262E",
        backboneText1: "#555555",
        footerText: "#9CA3AF",
        footerText2: "#C4C4C4",
        footerText3: "#FFFFFF",
        messageSent: "002F31",
        messageSentTwo: "4A5567",
      },
      cursor: {
        default: 'url(/assets/cursors/default-cursor.svg) 10 10, auto',
        dark: 'url(/assets/cursors/dark-cursor.svg) 20 20, auto',
        light: 'url(/assets/cursors/light-cursor.svg) 20 20, auto',
        scroll: 'url(/assets/cursors/slider-cursor.svg) 15 15, auto',

      }
    },
  },
  variants: {},
  plugins: [],
};
