const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    stats: {
      colors: true,
    },

    contentBase: './dist',
    host: '0.0.0.0',
    port: 4001,
  },
});
