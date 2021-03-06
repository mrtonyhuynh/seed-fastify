/*
|--------------------------------------------------------------------------
| PREPARING
|--------------------------------------------------------------------------
|
| yarn add -D eslint-config-airbnb-base eslint-config-prettier
*/

const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc.json'), 'utf8'),
);

module.exports = {
  plugins: [
    'import',
    'prettier'
  ],
  parser: '@babel/eslint-parser', // bộ parser Eslint + Babel
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    // Môi trường source
    node: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ], // kế thừa rules từ
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'arrow-body-style': [2, 'as-needed'],
    'class-methods-use-this': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 1,
    'no-unused-vars': 2,
    'no-use-before-define': 0,
    'prefer-template': 2,
    'require-yield': 0,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './internals/webpack/webpack.prod.babel.js',
      },
    },
  },
};
