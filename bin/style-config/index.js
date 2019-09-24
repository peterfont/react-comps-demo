const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer')
const browserlist = require('../browserlist-config/index.js');
const cssUrl = require('postcss-url');
const path = require('path');

module.exports =  postcss({
  extract: true,
  modules: true,
  plugins: [
    cssUrl({
      url: 'copy',
      basePath: path.resolve(process.cwd(), './src/'),
      assetsPath: path.resolve(process.cwd(), './dist/img'),
      useHash: true
    }),
    require("postcss-flexbugs-fixes"), // 支持flex
    autoprefixer({
      overrideBrowserslist: browserlist,
      flexbox: "no-2009"
    }),
  ]
});