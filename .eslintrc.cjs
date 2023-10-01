/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "standard-with-typescript",
    "prettier",
  ],
  "rules": {
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "curly": "off",
    "@typescript-eslint/ban-ts-ignore": "off"
  },
};
