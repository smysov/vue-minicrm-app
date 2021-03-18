module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'airbnb/base', 'plugin:vue/recommended',
  ],
  plugins: [
    'babel', 'import', 'prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  rules: {
    eqeqeq: 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'arrow-body-style': [
      'error', 'always',
    ],
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'array-callback-return': 'error',
    'class-methods-use-this': 'error',
    'no-extra-label': 'error',
    'array-bracket-newline': [
      'error', 'always',
    ],
    'array-bracket-spacing': [
      'error', 'never',
    ],
    'block-spacing': [
      'error', 'always',
    ],
    'func-names': 'error',
    'max-len': [
      'error', { ignoreUrls: true },
    ],
    quotes: 'error',
    semi: 'error',
    'no-console': 'error',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'vue/html-self-closing': 'off',
    'no-new': 'off',
    indent: [
      'error', 2,
    ],
    'vue/no-side-effects-in-computed-properties': 'off',
  },
};
