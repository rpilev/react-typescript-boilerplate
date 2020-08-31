module.exports = {
  mode: 'production',
  optimization: {
    mangleWasmImports: true,
    mergeDuplicateChunks: true,
    minimize: true,
    nodeEnv: 'production',
  },
}
