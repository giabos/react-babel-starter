const path = require('path');


const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body',
        hash: true,
        chunksSortMode: 'manual',
        chunks: ['config', 'bundle']
})

module.exports = {
    entry: {
        config: './src/config.js',
        bundle: './src/index.js',
    },
    output: {
        path: path.resolve('build'),
        filename: '[name].js'
    },
    module: {
    loaders: [
         { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
         { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
    },
    plugins: [
        HtmlWebpackPluginConfig
    ]
}
