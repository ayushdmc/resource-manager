const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client', // it reloads the page if hot module reloading fails.
    path.resolve(__dirname, '../src/index.js')
  ],
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
});
