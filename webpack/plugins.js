'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),

  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body',
    minify: {
      collapseWhitespace: true,
    },
  }),
  new webpack.NoErrorsPlugin(),
];

const devPlugins = [
  new StyleLintPlugin({
    configFile: './.stylelintrc',
    files: ['src/**/*.css'],
    failOnError: false,
  }),
];

const prodPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    sourceMap: true
  }),
  // new webpack.optimize.CommonsChunkPlugin('common', commonName),
  new ExtractTextPlugin('[name]-[chunkhash].css', {
    disable: false,
    allChunks: true,
  }),
  new webpack.optimize.OccurenceOrderPlugin(),

];

module.exports = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);
