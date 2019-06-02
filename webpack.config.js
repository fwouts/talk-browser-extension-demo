module.exports = {
  entry: {
    popup: "./src/popup.jsx"
  },
  output: {
    filename: "[name].js"
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  module: {
    rules: [
      {
        include: __dirname + "/src",
        loader: "babel-loader",
        test: /\.jsx?$/
      }
    ]
  },
  mode: "development"
};
