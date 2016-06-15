const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body',
});

const path = require('path');
const PATHS = {
  app: path.join(__dirname, 'app'),
  dist: path.join(__dirname, 'dist'),
};

module.exports = {
  entry: [
    './app/index.jsx',
  ],
  output: {
    path: PATHS.dist,
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      { test: /\.(jsx|js)$/, loader: 'babel-loader', include: PATHS.app },
      { test: /\.(png|jpg|svg)$/,
        loader: 'file-loader?name=/img/[name].[ext]',
        include: PATHS.app,
      },
      { test: /\.(ico)$/,
        loader: 'file-loader?name=/[name].[ext]',
        include: PATHS.app,
      },
    ],
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
    ],
  },
  devServer: {
    stats: 'errors-only',
  },
};
