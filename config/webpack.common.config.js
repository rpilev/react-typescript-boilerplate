/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const tsconfig = require('../tsconfig.json')

const filename = path.resolve(__dirname, '../dist/index.html')
const template = path.resolve(__dirname, '../public', 'index.html')

// Import and normalize aliases from tsconfig to reduce repetition of the path alias configuration
const { paths } = tsconfig.compilerOptions

const alias = Object.keys(paths).reduce(
  (accumilator, key) => ({
    ...accumilator,
    [key]: path.resolve(__dirname, `.${paths[key][0]}`),
  }),
  {},
)

module.exports = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias,
  },
  plugins: [
    new HtmlWebpackPlugin({
      env: 'development',
      filename,
      template,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread',
            ],
          },
        },
      },
      {
        loader: 'source-map-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: '[name]/index.js',
  },
}
