export default {
    content: ["./index.html", "./src//*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        animation: {
          slideIn: "slideIn 0.4s ease-in-out forwards",
          slideOut: "slideOut 0.4s ease-in-out forwards",
        },
        keyframes: {
          slideIn: {
            "0%": { transform: "translateY(-100%)", opacity: "0" },
            "100%": { transform: "translateY(0)", opacity: "1" },
          },
          slideOut: {
            "0%": { transform: "translateY(0)", opacity: "1" },
            "100%": { transform: "translateY(100%)", opacity: "0" },
          },
        },
      },
    },
   plugins:[],
  };