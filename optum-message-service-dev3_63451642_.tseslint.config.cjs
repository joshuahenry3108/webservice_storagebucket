// eslint.config.cjs
const tseslint = require("@typescript-eslint/eslint-plugin");
const tsparser = require("@typescript-eslint/parser");

module.exports = [
  {
    files: ["**/*.{js,ts,tsx,jsx,cjs,mjs}"],
    ignores: ["**/*.json"],
    plugins: {
      "@typescript-eslint": tseslint,
    },
    languageOptions: {
      parser: tsparser,
    },
    rules: {
      "array-callback-return": "warn",
      "constructor-super": "error",
      "no-var": "error",
      "@typescript-eslint/no-unused-vars": "error",
    },
  },
];
