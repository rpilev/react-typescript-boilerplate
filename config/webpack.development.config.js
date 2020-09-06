// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

const contentBase = path.resolve(__dirname, '../dist')

module.exports = {
  mode: 'development',
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
    proxy: [
      {
        context: ['/api'],
        target: `http://localhost:8080`,
        changeOrigin: true,
      },
    ],
  },
  optimization: {
    mergeDuplicateChunks: false,
    minimize: false,
    nodeEnv: 'development',
  },
}
