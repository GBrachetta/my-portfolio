module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb"],
  rules: {
    quotes: ["error", "double"],
    "react/function-component-definition": ["warn", { namedComponents: "arrow-function", unnamedComponents: "arrow-function" }],
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
  },
};
