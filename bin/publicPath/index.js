const path = require('path');
const pkg = require(path.resolve(process.cwd(), './package.json'));
const BasePath = '//wwww.stnew03';
const publicPath = `${BasePath}/${pkg.moduleName}/${pkg.version}/`
module.exports = publicPath;