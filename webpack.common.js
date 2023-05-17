const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Adjust the entry point as per your project structure
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')  // Adjust the output path as per your project structure
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
      // Add other loaders for different file types if needed
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Adjust the template file as per your project structure
    })
    // Add other plugins if needed
  ]
};
