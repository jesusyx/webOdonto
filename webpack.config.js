var path = require("path");
const webpack = require('webpack');
module.exports = {
  resolve: {
    extensions:['.js','.jsx','.css']
  },
  entry: {
    app: ["./src/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
    publicPath: '/'/*Para las rutas sin hash #*/
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  module: {
    rules: [
      { test: /(\.js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options:{presets:['latest', 'react']}
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {limit: 50000}
      },
      /*{
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {name: '[path][name].[hash].[ext]'}
      },*/
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]'
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
        ],
      }
    ]
  },
    devServer: {
    historyApiFallback:true, /*Para las rutas sin hash #*/
    host: 'localhost',
    port: 8080,
    inline: true
  }
};