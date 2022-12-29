module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  plugins: [ "@typescript-eslint"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: [ "./tsconfig.json"]
  },
  rules: {
    "no-continue": "off",
    "no-console": "off"
  },
  ignorePatterns: [
    "__tests__/**",
    "dist/**",
    "src/**/*.test.js",
    "*.js",
    "public/**"
  ]
};
