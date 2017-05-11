
var path = require('path')

console.log(__dirname)
console.log(__filename)
console.log(process.cwd())
console.log(path.resolve(__dirname, './src'))
console.log(path.join(__dirname, 'src'))