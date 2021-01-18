const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'slone.js',
    library: 'Slone',
    libraryExport: 'default',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    disableHostCheck: true,
    compress: true,
    host: '0.0.0.0',
    port: 8080
  }
}
