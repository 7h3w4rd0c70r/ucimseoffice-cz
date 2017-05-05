
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, 'src/index.jsx')
    },
    output: {
        publicPath: '/',
        path: __dirname + '/dist',
        filename: '[chunkhash].js'
    },
    devtool: 'source-map',
    resolve: {
        alias: {
            root:       path.resolve(__dirname),
            src:        path.resolve(__dirname, 'src'),
            core:       path.resolve(__dirname, 'src/core'),
            helpers:    path.resolve(__dirname, 'src/helpers'),
            assets:     path.resolve(__dirname, 'src/assets'),
            actions:    path.resolve(__dirname, 'src/actions'),
            components: path.resolve(__dirname, 'src/components'),
            smart:      path.resolve(__dirname, 'src/components/smart'),
            dumb:       path.resolve(__dirname, 'src/components/dumb'),
            stores:     path.resolve(__dirname, 'src/stores'),
            sources:    path.resolve(__dirname, 'src/sources')
        }
    },
    devServer: {
        port: 8075,
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!postcss-loader!less-loader'
                })
            },
            {
                test: /\.(png|svg|jpg)$/,
                loader: 'file-loader?name=./img/[hash].[ext]'
            },
            {
                test: /\.(ttf|woff|woff2|otf|eot)$/,
                loader: 'file-loader?name=./fonts/[hash].[ext]'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname),
            verbrose: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new ExtractTextPlugin({
            filename: '[name].[chunkhash].css',
            allChunks: false
        }),
        new CopyWebpackPlugin([])
    ]
};
