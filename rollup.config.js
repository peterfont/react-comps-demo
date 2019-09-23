import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const input = 'src/main.js';
const plugins = [
  resolve(),
  commonjs({
    exclude: 'src/**',
    namedExports: { 'react': ['createElement', 'Component' ] },  // Default: undefined
  }),
  babel({
    exclude: 'node_modules/**'
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
