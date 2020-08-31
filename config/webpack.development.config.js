module.exports = ({ contentBase, webpack, HtmlWebpackPlugin, filename, template }) => ({
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      env: 'development',
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
