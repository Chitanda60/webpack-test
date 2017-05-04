var webpack = require('webpack');
var path = require('path');

module.exports = {
// 程序的入口文件
    entry: {
        "entry":'./src/app.js',
        // "entry2":'./src/app2.js'
    },
    output: {
// 生产环境下资源访问路径
        publicPath: './build/',
// 所有打包好的资源的存放位置
        path: './public/build',
// 生成的打包文件名
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
//             {
// // 用于匹配加载器支持的文件格式的正则表达式
//                 test: /\.(js)$/,
// // 要使用的加载器类型
// // 加载器支持通过查询字符串的方式接收参数
//                 loader: 'jsx-loader?harmony'
//             },
            {
                test: /\.(css)$/,
// 多个加载器通过“!”连接
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg)$/,
// url-loader 支持base64 编码的行内资源
                loader: 'url-loader?size=8192'
            }
        ],
        // 确认模块中没有依赖，webpack扫描略过
        noParse: /es6-promise\.js$/
    },
    babel: {
        presets: ['stage-0', 'es2015', 'react'],
        plugins: [
            'transform-class-properties',
            'transform-async-to-generator',
            [
                'transform-runtime',
                {
                    'regenerator': true
                }
            ]
        ]
    },
    // 以脚本引用形式引进而不被打包进来    
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    // 插件
    plugins: [
        new webpack.BannerPlugin('This file is created by zhixia'),
        //提取多个入口文件的公共脚本部分，打包成一个资源文件方便多页面复用
        new webpack.optimize.CommonsChunkPlugin({name: 'commons'})
    ],
    // 预加载
    preLoaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jsxhint'
    }],
    // 模块解析处理细节（文件路径指向，加快打包过程）
    resolve: {
        alias: {
            js: path.join(__dirname, "./asset/js"),
            css: path.join(__dirname, "./asset/css"),
            img: path.join(__dirname, "./asset/img")
        },
        //添加默认搜索路径
        root: [
            path.join(__dirname, "asset")
        ]
    }
    // 转码规则，如 插件配置
    // babel: {
    //     presets: ['es2015'],
    //     plugins: ['transform-runtime']
    // },

};