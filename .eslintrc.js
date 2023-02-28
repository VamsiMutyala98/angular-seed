module.exports = () =>  ({
    root: true,
    env: {
      browser: true,
      es6: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
      ecmaVersion: 2021,
      sourceType: 'module',
      extraFileExtensions: ['.html'],
      tsconfigRootDir: __dirname,
      jsx: 'preserve',
    },
    plugins: ['@typescript-eslint', 'import', 'jsx-a11y', 'react-hooks'],
    extends: ['airbnb-typescript/base', 'plugin:prettier/recommended', 'eslint:recommended', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
    },
  });