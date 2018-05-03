const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const extractTextPlugin = require("extract-text-webpack-plugin");
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const webpack = require('webpack');

var website = {
    publicPath: 'http://127.0.0.1:8080/'
}

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: website.publicPath
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: extractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            })
        }, {
            test: /\.(png|jsp|gif|jpg|svg|jpeg)/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '[name].[ext]',
                    outputPath: 'images/'
                }
            }, ]
        }, {
            test: /\.(htm|html)$/i,
            use: ['html-withimg-loader']
        }, {
            test: /\.less$/,
            use: extractTextPlugin.extract({
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                },{
                    loader: 'postcss-loader'
                }],
                fallback: 'style-loader'
            })
        }]
    },
    plugins: [
        new uglify(),
        new htmlPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: false,
            template: './src/index.html',
            favicon: './src/images/favicon.ico'
        }),
        new extractTextPlugin('[name].css'),
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,'src/*.html'))
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        port: 8080,
        open: true,
        hot: true
    }
}