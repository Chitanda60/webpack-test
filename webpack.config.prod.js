
// 生产环境配置
var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge')

var baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
	plugins: [		        
        // 定义全局常量
        new webpack.DefinePlugin({
            __DEV__: false
        }),
        // 按chunk引用次数分配id 排序输出
        new webpack.optimize.OccurrenceOrderPlugin(),
        // 压缩
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                unused: true,
                dead_code: true
            }
        })
    ]
})