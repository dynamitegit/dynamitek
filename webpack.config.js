'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'src/scripts'),
  entry: './app',
  output: {
    path: path.join(__dirname, 'build/js'),
    filename: 'app.js'
  },
  watch: true,
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
