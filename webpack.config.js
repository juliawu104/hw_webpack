const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
  entry: {
    main: "./src/index.js",
    error: "./src/libs/error.js"
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname,'./dist/'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    port: 10000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "monsters",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
          { from: "src/assets", to: "public" },
      ],
    }),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
  ],
};
