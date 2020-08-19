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
    'airbnb-typescript',
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  rules: {
    "semi": "off",
    "@typescript-eslint/semi": ['error', 'never'],
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'react/jsx-one-expression-per-line': 'off',
    'no-magic-numbers': ["error"],
    'arrow-body-style': ["error", "never"],

    "import/prefer-default-export": ["off"],
    'import/newline-after-import': ['error', { count: 1 }],

    "react/prop-types": 'off',
  },
};
