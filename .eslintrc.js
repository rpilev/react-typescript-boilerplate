module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    'airbnb-typescript'
  ],
  rules: {
    "semi": "off",
    "@typescript-eslint/semi": ['error', 'never'],

    "import/prefer-default-export": ["off"],
    'import/newline-after-import': ['error', { count: 2 }],

    'no-multiple-empty-lines': ['error', { max: 2 }],

    'react/jsx-one-expression-per-line': 'off',
  },
};
