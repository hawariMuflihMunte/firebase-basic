const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: './dist', // Adjust the directory path as per your project structure
    },
    port: 8080,  // Adjust the port number as per your preference
    hot: true
  }
});
