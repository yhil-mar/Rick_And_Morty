/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lato": ["Lato", "sans-serif"],
      },
      fontSize: {
        "step--2": "clamp(0.69rem, calc(0.66rem + 0.19vw), 0.80rem)",
        "step--1": "clamp(0.83rem, calc(0.77rem + 0.30vw), 1.00rem)",
        "step-0": "clamp(1.00rem, calc(0.91rem + 0.45vw), 1.25rem)",
        "step-1": "clamp(1.20rem, calc(1.07rem + 0.66vw), 1.56rem)",
        "step-2": "clamp(1.44rem, calc(1.25rem + 0.93vw), 1.95rem)",
        "step-3": "clamp(1.73rem, calc(1.47rem + 1.30vw), 2.44rem)",
        "step-4": "clamp(2.07rem, calc(1.72rem + 1.78vw), 3.05rem)",
        "step-5": "clamp(2.49rem, calc(2.01rem + 2.41vw), 3.82rem)",

        "h1": "clamp(2.07rem, calc(1.72rem + 1.78vw), 3.05rem)",
        "h2": "clamp(1.73rem, calc(1.47rem + 1.30vw), 2.44rem)",
        "h3": "clamp(1.44rem, calc(1.25rem + 0.93vw), 1.95rem)",
        "h4": "clamp(1.20rem, calc(1.07rem + 0.66vw), 1.56rem)",
        "h5": "clamp(1.00rem, calc(0.91rem + 0.45vw), 1.25rem)",
        "h6": "clamp(0.83rem, calc(0.77rem + 0.30vw), 1.00rem)",
        "p": "clamp(1.20rem, calc(1.07rem + 0.66vw), 1.56rem)",
        "button": "clamp(1.00rem, calc(0.91rem + 0.45vw), 1.25rem)",
        "input": "clamp(1.00rem, calc(0.91rem + 0.45vw), 1.25rem)",
        "select": "clamp(1.00rem, calc(0.91rem + 0.45vw), 1.25rem)",
        "span": "clamp(0.83rem, calc(0.77rem + 0.30vw), 1.00rem)",
        "label": "clamp(1.00rem, calc(0.91rem + 0.45vw), 1.25rem)",
      },
      colors: {
        "first-color": "#E5EEF8",
        "second-color": "#126679",
        "third-color": "#081233",
        "fourth-color": "#12454F",
        "warning-color": "#FF6161",
        "warning-altern-color": "#FF002E",
        "check-color": "#00AD21",
        "blue-login-color": "#01B6EC",
      },
      backgroundImage: {
        "login": "url('./images/rick_and_morty_2.jpg')",
        "home": "url(./images/rick_and_morty_5.jpg)"
      },
      animation: {
        "entryMessage": "entryMessage 4s ease",
        "loadingScreen": "loadingScreen 2s ease alternate both",
      },
      keyframes: {
        entryMessage: {
          "0%, 100%": { transform: "translateY(-6rem)" },
          "10%, 90%": { transform: "translateY(0.5rem)" },
          "15%, 85%": { transform: "translateY(0)" },
        },
        loadingScreen: {
          "0%": { transform: "scale(0)" },
          "10%": { transform: "scale(1.1)" },
          "20%": { transform: "scale(1)" }
        }
      },
    },
  },
  plugins: [],
}