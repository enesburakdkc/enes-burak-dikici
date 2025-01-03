/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideIn: "slideIn 0.5s ease-in-out forwards",
        slideOut: "slideOut 0.5s ease-in-out forwards",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideOut: {
          "0%": { transform: "translateY(0px)", opacity: "1" },
          "100%": { transform: "translateY(-10)", opacity: "0" },
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      objectPosition: {
        'custom': '50% 30%',
      },
    },
  },
  plugins: [],
}

