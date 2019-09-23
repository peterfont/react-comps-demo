import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import path from 'path';
const commonjs = require('rollup-plugin-commonjs');
const babelConfig = require('./babel-config/index.js');
const postcssConfig =  require('./style-config/index.js');

const input = 'src/index.js';
const pkg = require(path.resolve(process.cwd(), './package.json'));

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
