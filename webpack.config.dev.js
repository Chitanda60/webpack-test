
// 开发环境配置
var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge')

var baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
	plugins: [
        // 定义全局常量
        new webpack.DefinePlugin({
            __DEV__: true
        })        
    ]
})
