'use strict';

const path = require('path');
const proxy = require('./server/webpack-dev-proxy');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');
const postcssInit = require('./webpack/postcss');

const baseAppEntries = ['./src/index.tsx'];
const devAppEntries = ['webpack-hot-middleware/client?reload=true'];
const appEntries = baseAppEntries
  .concat(process.env.NODE_ENV === 'development' ? devAppEntries : []);

// FIXME: change next line if you don't want publish to gh-pages
const publicPath = process.env.PUBLIC_PATH === 'gh'
  ? '/typescript-react-redux-starter/' : '/';

const vendor = [
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'react-router-redux',
  'redux',
  'redux-thunk',
  'redux-localstorage',
  'immutable',
  'whatwg-fetch',
];
module.exports = {
  entry: {
    app: appEntries,
    vendor: vendor,
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: publicPath,
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },

  devtool: 'cheap-module-source-map',
  resolve: { extensions: ['', '.webpack.js', '.web.js', '.tsx', '.ts', '.js'] },
  plugins: plugins,

  devServer: {
    historyApiFallback: { index: '/' },
    proxy: Object.assign({}, proxy(), { '/api/*': 'http://localhost:3000' }),
  },

  module: {
    preLoaders: [
      loaders.tslint,
    ],
    loaders: [
      loaders.tsx,
      loaders.html,
      loaders.css,
      loaders.svg,
      loaders.image,
      loaders.eot,
      loaders.woff,
      loaders.woff2,
      loaders.ttf,
    ],
  },

  postcss: postcssInit,
};
