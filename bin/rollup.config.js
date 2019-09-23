import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss'
import path from 'path';
const commonjs = require('rollup-plugin-commonjs');
const babelConfig = require('./babel-config/index.js');
const input = 'src/index.js';
const pkg = require(path.resolve(process.cwd(), './package.json'));
const autoprefixer = require('autoprefixer')
// import postcssModules from 'postcss-modules';

// const cssExportMap = {};

const postcssConfig = postcss({
  extract: true,
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
      overrideBrowserslist: [
        ">1%",
        "last 4 versions",
        "Firefox ESR",
        "not ie < 9" // React doesn't support IE8 anyway
      ],
      flexbox: "no-2009"
    }),
  ]
});
const plugins = [
  resolve(),
  postcssConfig,
  commonjs({
    exclude: path.resolve(process.cwd(), './src/**'),
  }),
  babel({
    exclude: 'node_modules/**',
    babelrc: false,
    ...babelConfig,
  }),
];
const external = ['react'];
export default [
  {
    input,
    output: {
      file: pkg.browser,
      format: 'umd',
      name: pkg.moduleName,
      globals: {
        'react': 'React'
      }
    },
    plugins,
    external,
  },
  {
    input,
    output: {
      file: pkg.browser.replace(/\.js$/, '.min.js'),
      format: 'umd',
      name: pkg.moduleName,
      globals: {
        'react': 'React'
      }
    },
    plugins: plugins.concat([terser()]),
    external
  },
  {
    input,
    output: {
      file: pkg.module,
      format: 'es'
    },
    plugins,
    external,
  },
];
