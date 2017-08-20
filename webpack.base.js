//导入根据模版文件生成index.html的插件
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app.js', //打包入口文件
  output: { //输出文件
    path: __dirname,
    filename: 'build.js'
  },
  module: {
    rules: [
      {
      test: /\.html$/,
      use: ['coala-dot-loader']
      },
      {
        test: /\.css$/, //凡是以.vue结尾的文件使用vue-loader去打包
        use: [//2.x的写法
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(png|ttf)$/, //凡是以.png,ttf结尾的文件使用vue-loader去打包
        use: [//2.x的写法
          {
            loader: "url-loader"
          }
        ]
      }
    ]
  },
  plugins: [
     new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      chunks: ['app'],
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ]
}
