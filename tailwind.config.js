module.exports = {
  mode: "jit",
  content: [
    "./public/**/*.html",
    "./components/**/*.{js,jsx,ts,tsx,vue}",
    "./pages/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    fontFamily: {
      body: ["Casper", "sans-serif"],
    },
    extend: {
      screens:{
        '3xl':'1950px',
        '4xl':'2400px',
      },
      colors: {
        primary: "#FCD1CA",
        navbarBg:"rgba(255, 255, 255, 0.04);",
        accent: "",
        _1: "#1D293F",
        _2: "#20E9BC",
        _3: "#F2C94C",
        _4: "#FF374F",
      },
    },
  },
  variants: {},
  plugins: [],
};
