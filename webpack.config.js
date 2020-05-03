const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    unmiss: "./src/main.js",
    tests: "./test/main.js"
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: "unmiss",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"],
            plugins: ["transform-decorators-legacy"]
          }
        }
      }
    ]
  }
};
