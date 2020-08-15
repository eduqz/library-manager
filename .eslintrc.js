module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    es2020: true,
  },
  extends: ['airbnb-base', 'prettier', 'plugin:prettier/recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: ['prettier', 'react'],
  rules: {
    'prettier/prettier': 'error',
  },
};