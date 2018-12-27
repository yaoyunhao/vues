/*
 * @Author: yc
 * @Date: 2018-10-12 10:44:46 
 * @Last Modified by: yc
 * @Last Modified time: 2018-10-12 10:46:26
 */
const path = require("path");
const webpack = require("webpack");
const htmlwebpackplugin = require('html-webpack-plugin');
const cleanwebpack = require('clean-webpack-plugin');
const extracts = require('extract-text-webpack-plugin');
const fs = require('fs');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: "main.js",
        path: path.join(__dirname, "dist")
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: extracts.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }]
    },
    plugins: [
        new htmlwebpackplugin({
            title: "标题",
            filename: "index.html",
            template: './index.html',
            templateContent: "<div id='box'></div>"
        }),
        new cleanwebpack(['dist']),
        new extracts('styles.css'),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: '/dist',
        port: 8787,
        before(app) {
            app.get('/data', function(req, res) {
                let newPath = path.join(__dirname, './mock/data.json');
                fs.readFile(newPath, 'utf-8', function(error, data) {
                    res.json(data);
                })
            })
        }
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    }
}