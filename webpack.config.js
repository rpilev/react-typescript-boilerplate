const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = require('./config')
const tsconfig = require('./tsconfig.json')

const filename = path.resolve(__dirname, 'dist/index.html')
const template = path.resolve(__dirname, 'public', 'index.html')
const contentBase = path.resolve(__dirname, 'dist')

// Import and normalize aliases from tsconfig to reduce repetition of the path alias configuration
let alias = {}
const paths = tsconfig.compilerOptions.paths
Object.keys(paths).map((key) => {
  alias[key] = '.' + paths[key][0].slice(5)
})
const props = { webpack, HtmlWebpackPlugin, filename, template, contentBase }

// Use development config for dev-server and production config for building
module.exports = () =>  process.env.NODE_ENV
  ? { ...webpackConfig.common({ alias }), ...webpackConfig.development(props) }
  : { ...webpackConfig.common({ alias }), ...webpackConfig.production }
