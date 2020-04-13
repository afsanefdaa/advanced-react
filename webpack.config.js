const path = require('path');

module.exports = {
  /* add polyfill to have the es6 codes transpile */
  entry: ['@babel/polyfill','./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ]
  },
};
