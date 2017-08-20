require('todomvc-app-css/index.css')

window.$ = require('jquery')
// 导入coala框架
var coala = require('coala')
var index = require("./layout.html")
// 挂载组件
app = coala.mount(index, '#app')
// 设置路由
coala.router({
  routes: {
    '/': 'hello',
    '/home': 'hello',
    '/intheaters': 'start',
    '/comingsoon': 'gotoPage',
    '/top250': 'docs',
    '/details/:id': 'nextdeta'

  },

  hello: function () {
    app.trigger('todo')
  },

  start: function () {
    app.trigger('hot')
  },

  gotoPage: function () {
    app.trigger('jijiang')

  },

  docs: function () {
    app.trigger('top250')

  },

  nextdeta: function (id) {
    app.trigger('details', id)
  }

});

