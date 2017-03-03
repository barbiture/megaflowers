const BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    main: [
            './src/components/headerCity/headerCity.js',
            './src/components/headerCurency/headerCurency.js',
            './src/components/headerLanguage/headerLanguage.js',
            './src/components/headerTel/headerTel.js',
            './src/components/headerCall/headerCall.js',
            './src/components/headerCarousel/headerCarousel',
            './src/components/fastByRange/fastByRange.js',
            './src/components/fastByDropdown/fastByDropdown.js',
            './src/components/fastByToggle/fastByToggle.js'
          ],
    catalog: [
            './src/components/catalog/catalog.js'
          ]
  },
  output: {
    path: path.join( __dirname, './dist/'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader'
        }]
      },
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
    new HtmlWebpackPlugin({
      title: 'megaflowers',
      // minify: {
      //   collapseWhitespace: true
      // },
      chunks: ['main'],
      hash: true,
      template: './src/template/main.html',
      filename: 'main.html'
    }),
    new HtmlWebpackPlugin({
      title: 'megaflowers',
      // minify: {
      //   collapseWhitespace: true
      // },
      chunks: ['catalog'],
      hash: true,
      template: './src/template/catalog.html',
      filename: 'catalog.html'
    }),
    new ExtractTextPlugin("[name].css"),
    // new BrowserSyncPlugin({
    //   // browse to http://localhost:3000/ during development, 
    //   // ./public directory is being served 
    //   host: 'localhost',
    //   port: 3000,
    //   server: { baseDir: ['./dist'] },
    //   browser: '/Applications/Google\ Chrome.app'
    // })
  ]
}
