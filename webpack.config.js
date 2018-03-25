const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
    	template: 'app/index.html'
    })
  ],
  mode: "development"
};

// line 9 & 17-19 needed -- when user refreshes, the browser tries to fetch data from '/popular' for example -- problem is, the router is handling those requests --> adding these lines to webpack.config file tells browser to go back to route dir '/' THEN React will see this and route us to our intended view at '/popular'