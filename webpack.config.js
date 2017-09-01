const path = require('path');

module.exports = {
  entry: {
    unmiss: './src/main.js',
    tests: './test/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'unmiss',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['transform-decorators-legacy']
          }
        }
      }
    ]
  }
};