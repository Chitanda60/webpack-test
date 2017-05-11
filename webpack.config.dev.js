
// 开发环境配置
var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge')

var baseConfig = require('./webpack.config.base');

Object.keys(baseConfig.entry).forEach(function(name) {
    baseConfig.entry[name] = ['webpack-hot-middleware/client?noInfo=true&reload=true', baseConfig.entry[name]]
})

module.exports = merge(baseConfig, {
	devtool: 'cheap-module-eval-source-map',
	plugins: [
        // 定义全局常量
        new webpack.DefinePlugin({
            __DEV__: true
        }),
        // 模块热替换
        new webpack.optimize.OccurenceOrderPlugin(),
	    new webpack.HotModuleReplacementPlugin()
    ],    
})
