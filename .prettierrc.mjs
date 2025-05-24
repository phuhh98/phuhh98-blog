// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  endOfLine: "crlf",
  plugins: ["prettier-plugin-astro"],
  printWidth: 120,
};

export default config;
