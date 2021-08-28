const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  entry: [
    'react-hot-loader/patch',
    './src/index.tsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(svg|png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },

      /*
      NOTES:
      - These are the important configurations
      - This demo works just as well with .css files as .scss files.
      - Non module files are not transformed much. Just convert SCSS to CSS and extract it into a separate file
      - Module files are converted from SCSS to CSS, classnames are uglified, global CSS is prevented, types are generated, and then CSS is extracted into a separate file
      */

      // Traditional/untyped CSS+SCSS
      {
        test: /\.(css|scss)$/,
        exclude: /\.module\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'                                             // If you don't want SCSS, you could remove this or replace it with something that processes PostCSS or LESS
        ],
      },
      
      // Typed CSS+SCSS
      {
        test: /\.(css|scss)$/,
        include: /\.module\.(css|scss)$/,                           // Only do this for .module.css and .module.scss files, not for just .css and .scss
        use: [
          MiniCssExtractPlugin.loader,                              // Webpack puts CSS into own file instead of leaving in JS files. (versus style-loader)
          {
            loader: 'dts-css-modules-loader',                       // Create types for CSS 
            options: { namedExport: true },                         // Makes more legible .css.d.ts files 
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'pure',                                       // Prevents global CSS. Options: local|global|pure
                exportLocalsConvention: 'camelCaseOnly',
                localIdentName: "[name]__[local]__[hash:base64:5]", // Uglify CSS classes' names
              },
            }
          },
          'sass-loader'                                             // Convert SCSS to CSS. If you don't want SCSS, you could remove this or replace it with something that processes PostCSS or LESS
        ],
      },
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.tsx',
      '.ts'
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: {
    contentBase: './dist',
    port: 3000,
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'src/index.html' }],
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin()
  ]
};

module.exports = config;