const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader',
        ],
      },
      {
        test: /\.html$/,
        loaders: [
          'file-loader?context=app&name=[path][name].[ext]',
          'extract-loader',
          'html-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015']
        },
      }
    ],
  },
}
