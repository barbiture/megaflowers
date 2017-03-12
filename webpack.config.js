var path = require('path'),
    webpack = require('webpack')
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    main: [
            './src/js/main.js',
            './src/components/dropdown/dropdown.js',
            './src/components/search-autocomplete/search-autocomplete.js',
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:3030'
          ],
  },
  output: {
    path: path.join( __dirname, './dist/'),
    filename: '[name].js'
  },
  module: {
    rules: [
      // {
      //   test: /\.html$/,
      //   use: [{
      //     loader: 'html-loader'
      //   }]
      // },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
    new HtmlWebpackPlugin({
      title: 'megaflowers',
      // minify: {
      //   collapseWhitespace: true
      // },
      chunks: ['main'],
      hash: true,
      // template: './src/main.html',
      filename: 'main.html'
    }),
    new ExtractTextPlugin("./style/styles.css"),
  ]
}



// new BrowserSyncPlugin({
//   // browse to http://localhost:3000/ during development, 
//   // ./public directory is being served 
//   host: 'localhost',
//   port: 3000,
//   server: { baseDir: ['./dist'] },
//   browser: '/Applications/Google\ Chrome.app'
// })