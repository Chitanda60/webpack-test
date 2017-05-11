
// 在实际项目中要根据环境封装一些配置
var path = require('path')

var express = require('express')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

var config = require('./webpack.config.dev')

// express日志系统

var app = express()

// app.use(require('morgan')('short'))

var compiler = webpack(config)

var webpackDevOptions = {
	hot: true,
	// noInfo: true,
	historyApiFallback: true,
	// contentBase: 'http://localhost:8080',
	publicPath: 'http://localhost:8080/public/build',
	headers: {
		'Access-Control-Allow-Origin': '*'
	},
	stats: {
		colors: true 
	}	
}
var webpackHotOptions = {
	// 处理事件流？
	path: '/__webpack_hmr',
  	heartbeat: 10 * 1000,
}

var devMiddleware = webpackDevMiddleware(compiler, webpackDevOptions)
var hotMiddleware = webpackHotMiddleware(compiler, webpackHotOptions)

compiler.plugin('compilation', function(compilation) {
	compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
		hotMiddleware.publish({
			action: 'reload'
		})
		cb();
	})
})

// 应用中间件 webpack开发环境和热重载 
// 相当于在server上实现一个有hot reload功能的webpack-dev-server
app.use(devMiddleware)
app.use(hotMiddleware)

// 静态资源访问地址
app.use(express.static(path.resolve(__dirname, './')));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(8080, function(err) {
	console.log('listening at http://localhost:8080')
})