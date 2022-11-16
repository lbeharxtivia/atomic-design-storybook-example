/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

const {
  colors,
  customFontFamily,
  typography,
} = require("./lib/design-tokens/parsed-tokens");

//console.log(colors);

module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./lib/**/*.{js,ts,jsx,tsx}",
      'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
      extend: {
          colors: {
              ...colors,

          },
          fontSize: {
              "size-inherit": "inherit",
          },
          screens: {
              smMax: { max: "640px" },
              mdMax: { max: "768px" },
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
  plugins: [
    require("@tailwindcss/typography"), 
    require('flowbite/plugin'),
  ],
};
