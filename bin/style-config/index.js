const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer')
const browserlist = require('../browserlist-config/index.js');

// import postcssModules from 'postcss-modules';

// const cssExportMap = {};

module.exports =  postcss({
  extract: false,
  modules: true,
  plugins: [
    // postcssModules({
    //   getJSON (id, exportTokens) {
    //     console.log('xxxx', id, exportTokens);
    //     cssExportMap[id] = exportTokens;
    //   }
    // }),
    require("postcss-flexbugs-fixes"), // 支持flex
    autoprefixer({
      overrideBrowserslist: browserlist,
      // [
      //   ">1%",
      //   "last 4 versions",
      //   "Firefox ESR",
      //   "not ie < 9" // React doesn't support IE8 anyway
      // ],
      flexbox: "no-2009"
    }),
  ]
});