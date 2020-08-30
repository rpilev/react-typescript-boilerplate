module.exports = ({ alias, contentBase, webpack, HtmlWebpackPlugin, filename, template }) => ({
  entry: './src/index.tsx',
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias,
  },
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
    ],
  },
  output: {
    filename: '[name]/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      env: 'production',
      title: 'React Typescript Project',
      filename,
      template,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase,
    publicPath: '/',
  },
  optimization: {
    mangleWasmImports: true,
    mergeDuplicateChunks: true,
    minimize: true,
    nodeEnv: 'production',
  },
})
