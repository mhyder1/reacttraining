var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
      rules: [
          {test: /\.(js)$/, use: 'babel-loader'},
          {test: /\.(css)$/, use: ['style-loader', 'css-loader']},
        ]
    },
    plugins: [new HtmlWebpackPlugin({
      template: 'app/index.html'
    })]
}
