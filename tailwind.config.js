module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "'Roboto', sans-serif",
      secondary: "'Righteous', cursive",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
      },
      backgroundImage: {
        site: "url('./assets/HexagonBg.svg')",
        about: "url('./assets/about-main.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
