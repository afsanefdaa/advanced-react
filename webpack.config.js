const path = require('path');

module.exports = {
  /* all the folders we want webpack to resolve as its dependencies */
  resolve: {
    modules: [
      path.resolve('./src'),
      /* when we overwrite it it should contains the defaults */
      path.resolve('./node_modules'),
    ]
  },
  /* add polyfill to have the es6 codes transpile */
  entry: ['@babel/polyfill','./src/renderers/dom.js'],
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
