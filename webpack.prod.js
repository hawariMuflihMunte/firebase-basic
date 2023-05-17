const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'bundle.[contenthash].js'  // Add contenthash to the filename for better caching
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
      // Add other loaders for different file types if needed
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),  // Minify JavaScript
      new OptimizeCssAssetsPlugin()  // Minify CSS
    ]
    // Add other optimization settings if needed
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css'  // Add contenthash to the filename for better caching
    })
    // Add other plugins if needed
  ]
});
