const babelConfig = require('../babel-config/index.js');
module.exports = require('babel-jest').createTransformer(babelConfig);