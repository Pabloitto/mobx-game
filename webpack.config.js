const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: ['babel-polyfill', './client/index.js'],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [ 'react',
            ['env', {
              'targets': {
                'browsers': ['last 2 versions']
              }
            }]],
          plugins: ['transform-decorators-legacy', 'transform-class-properties']
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [HtmlWebpackPluginConfig]
}
