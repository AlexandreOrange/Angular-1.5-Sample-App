const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, 'src'),
  app: path.join(__dirname, 'src/app'),
  dist: path.join(__dirname, 'dist'),
};

const parts = require('./libs/parts');

module.exports = {
  // Entry accepts a path or an object of entries.
  entry: {
    app: `${PATHS.app}/app.module.js`,
    index: `${PATHS.src}/index.html`,
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', '!css-loader!postcss-loader'),
      },
      {
        test: /\.js$/,
        loader: 'ng-annotate!babel?cacheDirectory',
        include: PATHS.app,
      },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
  devServer: parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
  }),
  postcss(webpack) {
    return [
        require('postcss-reporter')(),
        require('postcss-import')({ 
          addDependencyTo: webpack,
          path: `${PATHS.app}/app.style/settings` 
        }),
        require('postcss-cssnext')(),
      ]
  },
  plugins: [
    // Enable multi-pass compilation for enhanced performance
    // in larger projects. Good default.
    new webpack.HotModuleReplacementPlugin({
      multiStep: true,
    }),
    new HtmlWebpackPlugin({
      title: 'GitRepos',
      template: `${PATHS.src}/index.html`,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new ExtractTextPlugin("[name].css"),
    // Reduces bundles total size
    new webpack.optimize.UglifyJsPlugin({
      mangle: {

        // You can specify all variables that should not be mangled.
        // For example if your vendor dependency doesn't use modules
        // and relies on global variables. Most of angular modules relies on
        // angular global variable, so we should keep it unchanged
        except: ['$super', '$', 'exports', 'require', 'angular']
      }
    })
  ],
};
