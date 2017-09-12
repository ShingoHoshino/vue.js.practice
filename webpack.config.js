const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
};
