module.exports = {
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended", "prettier"],
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/no-unescaped-entities": "off",
    "react/display-name": "off",
    "@next/next/no-img-element": "off",
    "prefer-const": "error",
    "no-var": "error"
  },
  settings: {
    next: {
      rootDir: ["./"],
    },
  },
}

