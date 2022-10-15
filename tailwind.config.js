module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /[h, p]-\d/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins"],
      },
      colors: {
        bLightPrimary: "#ffffff",
        bLightSecondary: "#f0f1f2",
        tLightPrimary: "#242424",
        bDarkPrimary: "#121318",
        bDarkSecondary: "#212328",
        tDarkPrimary: "#dbdbdb",
        accent1: "#ff6740",
      },
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
  },
  plugins: [],
  darkMode: "class",
};
