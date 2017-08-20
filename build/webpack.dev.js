var config = require('./webpack.base')
var devServer = require('./dev-server')

config.devtool = 'eval'
config.devServer = devServer

module.exports = config
