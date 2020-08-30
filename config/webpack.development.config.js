module.exports = ({ alias, contentBase, webpack, HtmlWebpackPlugin, filename, template }) => ({
  entry: './src/index.tsx',
  devtool: 'source-map',
  mode: 'development',
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
      env: 'development',
      title: 'React Typescript Project',
      filename,
      template,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase,
    publicPath: '/',
    stats: {
      colors: true,
      hash: false,
      version: false,
      assets: true,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      publicPath: false,
    },
  },
  optimization: {
    mergeDuplicateChunks: false,
    minimize: false,
    nodeEnv: 'development',
  },
})
