// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/styles/tw-animate.css",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1beaa5",
        gold: "#f5c59f",
        bronze: "#ad937c",
        "primary-dark": "#1a1a2e",
        "secondary-dark": "#16213e",
        "accent-color": "#0f3460",
        "highlight-color": "#e94560",
        dark: "#080a0e",
        "dark-gray": "#2a2c31",
        "white-inverse": "#f5f5f5",
      },
      fontFamily: {
        alcxTitles: ['"Neue Kabel"', "sans-serif"],
        sans: ['"Montserrat"', "system-ui", "sans-serif"],
      },
      animation: {
        "tokens-scroll": "tokensScroll 15s linear infinite",
        "tokens-scroll-reverse": "tokensScrollReverse 15s linear infinite",
        "button-glow":
          "buttonMovingGradientBg var(--speed, 2s) infinite linear",

        // "bottom-to-top": "bottomToTop 3s ease-in-out forwards",
        "bottom-to-top-vanish":
          "bottomToTopVanish 4s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "bottom-to-top": "bottomToTop 4s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
      keyframes: {
        tokensScroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        tokensScrollReverse: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(50%)" },
        },
        buttonMovingGradientBg: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "200% 0%" },
        },
        // tailwind.config.js
        // tailwind.config.js
        bottomToTopVanish: {
          "0%": {
            transform: "translateY(100vh)",
            opacity: "1",
          },
          // "15%": {
          //   transform: "translateY(0)",
          //   opacity: "1",
          // },
          // "30%": {
          //   transform: "translateY(0)",
          //   opacity: "0.8",
          // },
          // "45%": {
          //   transform: "translateY(0)",
          //   opacity: "0.6",
          // },
          // "60%": {
          //   transform: "translateY(0)",
          //   opacity: "0.4",
          // },
          // "75%": {
          //   transform: "translateY(0)",
          //   opacity: "0.2",
          // },
          // "90%": {
          //   transform: "translateY(0)",
          //   opacity: "0.1",
          // },
          "100%": {
            transform: "translateY(0vh)",
            opacity: "0",
          },
        },

        bottomToTop: {
          "0%": {
            transform: "translateZ(-500vh)",
            opacity: "0",
          },
          // "15%": {
          //   transform: "translateY(0)",
          //   opacity: "0",
          // },
          // "45%": {
          //   transform: "translateY(0)",
          //   opacity: "0",
          // },
          // "85%": {
          //   transform: "translateY(0)",
          //   opacity: "1",
          // },
          "100%": {
            transform: "translateZ(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
