const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const tsconfig = require('./tsconfig.json')

// Import and normalize aliases from tsconfig to reduce repetition of the path alias configuration
let alias = {}
const paths = tsconfig.compilerOptions.paths
Object.keys(paths).map((key) => {
  alias[key] = '.' + paths[key][0].slice(5)
})

module.exports = (env) => {
  const mode = env ? env.mode : 'development'

  const config = {
    entry: './src/index.tsx',
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
              plugins: [
                "@babel/plugin-transform-runtime",
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
        }
      ],
    },
    output: {
      filename: '[name]/index.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        env: mode,
        title: 'React Typescript Project',
        filename: path.resolve(__dirname, 'dist/index.html'),
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  }

  if (mode === 'development') {
    config.devServer = {
      contentBase: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      stats: {
        colors: true,
        hash: false,
        version: false,
        timings: true,
        assets: true,
        chunks: false,
        modules: false,
        reasons: false,
        children: false,
        source: false,
        errors: true,
        errorDetails: true,
        warnings: false,
        publicPath: false,
      },
    };
    config.optimization = {
      mangleWasmImports: true,
      mergeDuplicateChunks: true,
      minimize: false,
      nodeEnv: 'development',
    };
  }

  if (mode === 'production') {
    config.optimization = {
      mangleWasmImports: true,
      mergeDuplicateChunks: true,
      minimize: true,
      nodeEnv: 'production',
    };
  }

  return config;
};