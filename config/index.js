/* eslint-disable @typescript-eslint/no-var-requires */
const production = require('./webpack.production.config')
const development = require('./webpack.development.config')

module.exports = {
  production,
  development,
}
