module.exports = {
  optimization: {
    mangleWasmImports: true,
    mergeDuplicateChunks: true,
    minimize: true,
    nodeEnv: 'production',
  },
}
