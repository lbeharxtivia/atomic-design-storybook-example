/** @type {import('tailwindcss').Config} */
const {
  colors,
  fontFamily,
  typography,
} = require("./lib/design-tokens/parsed-tokens");

//console.log(colors);

module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      fontFamily,
      extend: {
          colors: {
              ...colors,
          },
          fontSize: {
              "size-inherit": "inherit",
          },
          transitionProperty: {
              height: "height",
              "max-height": "max-height",
              padding: "padding",
          },
      },
      typography: ({ theme }) => ({
          DEFAULT: {
              css: {
                  ...typography,
                  color: theme("colors.body"),
                  a: {
                      ...typography.a,
                      color: theme("colors.primary"),
                      marginBottom: "0",
                  },
                  div: { ...typography.p, marginBottom: "0" },
              },
          },
      }),
  },
  daisyui: {
      themes: [
          {
              myCitcTheme: {
                  ...colors,
              },
          },
      ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
