const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Updated entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js' // Bundle filename (adjusted from "[name].pack.js")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/i, // Handle image files
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Path to your index.html
      filename: 'index.html'
    })
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Resolve .js and .jsx files
  }
};
