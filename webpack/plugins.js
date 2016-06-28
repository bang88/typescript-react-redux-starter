const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
]

const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new StyleLintPlugin({
    configFile: './.stylelintrc',
    files: ['src/**/*.css'],
    failOnError: false,
  }),
]

const prodPlugins = [
  new ExtractTextPlugin('[name]-[chunkhash].css', {
    disable: false,
    allChunks: true,
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      unused: true,
      dead_code: true,
      warnings: false
    }
  }),
  // new webpack.optimize.CommonsChunkPlugin('common', commonName),

  new webpack.optimize.OccurenceOrderPlugin(),

  new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor']
  })

]

module.exports = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : [])
