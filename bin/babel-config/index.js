const browserlist = require('../browserlist-config/index.js');
module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": {
          "version": 2,
          "proposals" : true
        },
        "targets": browserlist
      }
    ],
    [
      "@babel/preset-react"
    ]
  ],
  "plugins": [
    "@babel/proposal-class-properties",
  ]
}