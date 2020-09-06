const webpackConfig = require('./config')

module.exports = {
  ...webpackConfig.common,
  ...(process.env.NODE_ENV ? webpackConfig.development : webpackConfig.production),
}
