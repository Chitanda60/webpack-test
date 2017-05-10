
// 在实际项目中要根据环境封装一些配置
var path = require('path')

var express = require('express')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

var config = require('./webpack.config.dev')

var app = express()
var compiler = webpack(config)

var webpackDevOptions = {
	noInfo: true,
	historyApiFallback: true,
	publicPath: config.output.publicPath,
	headers: {
		'Access-Control-Allow-Origin': '*'
	}
}

// 应用中间件 webpack开发环境和热重载
app.use(webpackDevMiddleware(compiler, webpackDevOptions))
app.use(webpackHotMiddleware(compiler))

app.use(express.static(config.output.publicPath));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(8080, 'localhost', function(err) {
	console.log('listening at http://localhost:8080')
})