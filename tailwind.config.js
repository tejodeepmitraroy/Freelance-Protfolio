/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
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
        Pacifico: "Pacifico, cursive",
      },
      animation: {
        fadedown: "fadedown 0.5s",
      },
      keyframes: {
        fadedown: {
          "0%": {
            transform: "translateY(-30px) scale(0.9)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0px) scale(1)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [
    // require('@tailwindcss/typography')
  ],
  purge: {
    content: [
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
    ],
    // Other configuration options...
  },
};
