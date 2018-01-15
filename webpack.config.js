var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: "eval",
  entry: ["./src/index"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    extensions: [".js", ".jsx", ".styl"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        include: path.join(__dirname, "src")
      },
      {
        test: /\.styl$/,
        loaders: ["style-loader","css-loader","stylus-loader"]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};
