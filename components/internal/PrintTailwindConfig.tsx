import cn from "classnames";

const {
    colors,
    customFontFamily,
    typography,
  } = require("../../lib/design-tokens/parsed-tokens");

export const PrintTailwindConfig = () => {
    const printObject = (val:any) => JSON.stringify(val, null, 4).replace(/"([^"!-!\d]+)":/g, '$1:');
    const classes = {
        section: cn("mb-8"),
        pre: cn("p-4 border border-gray-300 shadow bg-white")
    }

    return (
        <div className="prose">
            <section className={classes.section}>
                <h2>Tailwind config variables</h2>
                <p>Copy the values below into your tailwind.config.js</p>
            </section>
            <section className={classes.section}>
                <h3>Colors</h3>
                <pre className={classes.pre}>
                    {printObject(colors)}
                </pre>
            </section>
            <section className={classes.section}>
                <h4>Typography</h4>
                <p>If we are using custom fonts, make sure to use the guide linked here to define the font-family variables below</p>
                <p><a className="font-bold text-primary" href="https://nextjs.org/docs/basic-features/font-optimization#with-tailwind-css" target="_blank">@next/font Setup Guide - Tailwind CSS</a></p>
                <pre className={classes.pre}>
                    {printObject(typography)}
                </pre>
            </section>
        </div>
    )
}
