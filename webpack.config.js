const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: {
    file: './app.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { 
        test: /\.js$/,
        loader: 'babel-loader', 
        query: {
          presets: ['es2015', 'react']
        },
        exclude: /(node_modules)/,
       }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  devServer: {
    historyApiFallback: true
  }
}
