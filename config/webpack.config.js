const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: '[name].[hash].js',
    libraryTarget: 'umd',
    globalObject: 'this',
    path: path.resolve(__dirname, '..', 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['./dist'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'index.html'),
    }),

  ],
};
