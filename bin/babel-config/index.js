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
        "targets": "last 1 version, > 1%, not dead"
      }
    ],
    [
      "@babel/preset-react"
    ]
  ],
  "plugins": [
    "@babel/proposal-class-properties"
  ]
}