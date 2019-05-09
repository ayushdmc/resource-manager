const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: true,
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_console: true,
            inline: false
          },
          output: {
            comments: false
          }
        }
      })
    ]
  }
});
