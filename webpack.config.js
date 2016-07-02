module.exports = {
  entry: './src/app.eth',
  output: {path: './js', filename: 'app.js'},
  module: {
    loaders: [{test: /\.eth$/, loader: 'eth-loader'}]
  }
};
