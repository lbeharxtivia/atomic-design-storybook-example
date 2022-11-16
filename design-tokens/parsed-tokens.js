/* eslint-disable @typescript-eslint/no-var-requires */
const tokens = require("./design-tokens");
const colors = require("./get-colors");

// const prefix = "myCITC-";

const sanitizeClass = className =>
    className.toLowerCase().replace(/[^a-z0-9]/gi, "");

// format the Design Token value obj to proper css syntax
const formatValue = value => ({
    fontSize: `${value.fontSize / 16}rem`,
    textDecoration: value.textDecoration,
    fontFamily: value.fontFamily,
    fontWeight: value.fontWeight,
    fontStyle: value.fontStyle,
    fontStretch: value.fontStretch,
    letterSpacing: `${value.letterSpacing / value.fontSize}em`,
    lineHeight: `${value.lineHeight / value.fontSize}em`,
    marginBottom: `${value.paragraphSpacing / value.fontSize}em`,
    marginLeft: `${value.paragraphIndent / value.fontSize}em`,
    textTransform: `${value.textCase}`,
});

const isHTMLElement = element =>
    !!(
        element === "h1" ||
        element === "h2" ||
        element === "h3" ||
        element === "h4" ||
        element === "h5" ||
        element === "h6" ||
        element === "a" ||
        element === "p" ||
        element === "ul" ||
        element === "ol" ||
        element === "li" ||
        element === "blockquote" ||
        element === "figure" ||
        element === "figcaption" ||
        element === "strong" ||
        element === "em" ||
        element === "code" ||
        element === "pre" ||
        element === "table" ||
        element === "thead" ||
        element === "tr" ||
        element === "th" ||
        element === "td" ||
        element === "label" ||
        element === "div"
    );

// font families only if named sans or serif in Figma
const fontFamily = tokens.font
    ? Object.fromEntries(
          Object.values(tokens.font).reduce((prev, cur) => {
              const { attributes, value } = cur;
              const sansFallback = "Helvetica, sans-serif";
              const serifFallback = "Times, serif";

              if (attributes.type === "sans" || attributes.type === "serif") {
                  prev.push([
                      sanitizeClass(attributes.type),
                      attributes.type === "sans"
                          ? `${value.fontFamily}, ${sansFallback}`
                          : `${value.fontFamily}, ${serifFallback}`,
                  ]);
              }
              return prev;
          }, [])
      )
    : {};

// parse html elements typography info for TW Typography plugin
const typography = tokens.font
    ? Object.fromEntries(
          Object.values(tokens.font).reduce((prev, cur) => {
              const { attributes, value } = cur;
              if (isHTMLElement(attributes.type)) {
                  prev.push([
                      sanitizeClass(attributes.type),
                      { ...formatValue(value) },
                  ]);
              }
              return prev;
          }, [])
      )
    : {};

module.exports = {
    colors,
    fontFamily,
    typography,
};
