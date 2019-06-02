const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    background: "./src/background.ts",
    popup: "./src/popup.tsx"
  },
  output: {
    filename: "[name].js"
  },
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"]
  },
  module: {
    rules: [
      {
        include: __dirname + "/src",
        loader: "babel-loader",
        test: /\.jsx?$/
      },
      {
        include: __dirname + "/src",
        loader: "ts-loader",
        test: /\.tsx?$/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/popup.html",
      filename: "popup.html",
      inject: true,
      chunks: ["popup"]
    }),
    new CopyPlugin([{ from: "manifest.json", to: "." }]),
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: "development",
  devServer: {
    hot: true,
    port: 9000
  }
};
