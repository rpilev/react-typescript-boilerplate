const { merge } = require("webpack-merge")

const webpackConfig = require('./config')

module.exports = merge(
  webpackConfig.common,
  process.env.NODE_ENV ? webpackConfig.development : webpackConfig.production)
