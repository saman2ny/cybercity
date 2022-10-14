module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2019,
    project: join(__dirname, "./tsconfig.json"),
    sourceType: "module"
  },
  plugins: ["rxjs-angular"],
  extends: [],
  rules: {
    "rxjs-angular/prefer-takeuntil": "error"
  }
};
