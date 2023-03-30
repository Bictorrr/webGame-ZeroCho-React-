const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.jsx', '.js']
  },

  entry: {
    app: './client',
  },
  module: {
    rules: [{
      test: /\.jsx$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            target: {
              browsers: ['> 1% in KR'],
            },
            debug: true,
          }],
          '@babel/preset-react',
        ],
        plugins: [],
      },
    }],
  },
  plugin: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  },
};