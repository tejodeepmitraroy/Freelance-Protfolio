/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Inter: "Inter, sans-serif",
        Karla: "Karla, sans-serif",
        Pacifico:"Pacifico, cursive"
      },
      animation:{
        'hover':"hover 4s linear infinite"
      },
      keyframes: {
        hover: {
          "0%":{ opacity:0},
          "100%":{opacity:1}
        }
      }
    },
  },
  plugins: [],
};