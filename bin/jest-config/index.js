const path = require('path');
const appRoot = process.cwd();
module.exports = function(options) {
  return Object.assign({}, {
    rootDir: '.', // 单元测试环境根目录
    transform: {
      //自定义如何处理js文件
      '^.+\\.jsx?$': path.resolve(__dirname, './js-processor.js'),
    },
    moduleDirectories: [path.resolve(appRoot, './src'), 'node_modules'],
    globals: {},
    collectCoverageFrom: [
      '**/src/**/*.{js,jsx}',
      '!**/node_modules/**'
    ],
    moduleNameMapper: {
      // 模块查找规则， 第一条与talent-ui的默认规则相同，其他的是非js模块的处理规则
      '&(.*)$': '<rootDir>/src$1',
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': path.resolve(__dirname, './file-mock.js'),
      '\\.(css|less|scss)$': path.resolve(__dirname, './style-mock.js')
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    testEnvironment: 'enzyme',
    setupFilesAfterEnv: ['jest-enzyme'],
  }, options);
}