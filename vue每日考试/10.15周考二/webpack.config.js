/*
 * @Author:yaochong
 * @Date: 2018-10-15 08:58:20 
 * @Last Modified by: yaochong
 * @Last Modified time: 2018-10-15 09:58:15
 */
const path = require("path");
const htmlwebpackplugin = require('html-webpack-plugin');
const cleanwebpackplugin = require('clean-webpack-plugin');
const extracts = require('extract-text-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: extracts.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })

            },
            {
                test: /\.(jpe?g|png|svg|gif)$/,
                // use:['file-loader']
                use: ['url-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    /**
     * [plugins description]
     *
     * @return  {[type]}
     */
    plugins: [
        new htmlwebpackplugin({
            title: '标题',
            filename: "index.html",
            template: 'index.html',
            templateContent: "<div id='box'></div>"
        }),
        new extracts('styles.css'),
        new cleanwebpackplugin(['dist']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        contentBase: '/dist'
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    }

}