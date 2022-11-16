/* eslint-disable @typescript-eslint/no-var-requires */
const { generatePalette } = require('palette-by-numbers');
const kebabCase = require("lodash.kebabcase");
const ColorContrastChecker = require("color-contrast-checker");
const tokens = require("./design-tokens");

const getPalette = (color) => ({...generatePalette(color), DEFAULT:color})

const ccc = new ColorContrastChecker();
const colors = tokens.color
    ? Object.fromEntries(
          Object.values(tokens.color).map(({ attributes, value }) => [
              kebabCase(attributes.type),
              value,
          ]).map((value) => {
            return [value[0],getPalette(value[1])];
          })
      )
    : {};
const black =
    colors.body && ccc.isLevelAA(colors.body["500"], "#FFFFFF", 16)
        ? colors.body
        : "#222222";
const white =
    colors.body && !ccc.isLevelAA(colors.body["500"], "#FFFFFF", 16)
        ? colors.body
        : "#FFFFFF";
Object.keys(colors).forEach(key => {
    colors[`${key}-contrast`] = ccc.isLevelAA(colors[key]["500"], white, 16)
        ? white
        : black;
});
module.exports = colors;
