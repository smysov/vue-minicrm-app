const presetPostCss = require('postcss-preset-env');
const autoprefixer = require('postcss-preset-env');
const mediaQuery = require('postcss-preset-env');

module.exports = {
  plugins: [
    presetPostCss, autoprefixer, mediaQuery,
  ],
};
