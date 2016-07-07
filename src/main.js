import 'lib-flexible'
import FastClick from 'fastclick'
window.FastClick = FastClick
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueResource)
Vue.use(VueRouter)

import list from './view/list.vue'
import comments from './view/comments.vue'
import detail from './view/detail.vue'
import recommenders from './view/recommender.vue'
import section from './view/section.vue'
import editors from './view/editor.vue'
import author from './view/author.vue'
import listDefault from './components/list-default.vue'
import listTheme from './components/list-theme.vue'

import Swiper from 'swiper'
window.Swiper = Swiper

import filters from './filters'
Object.keys(filters).forEach((k) => Vue.filter(k, filters[k]))

/* eslint-disable no-new */
let App = Vue.extend({})
// 路由器需要一个根组件。
// 出于演示的目的，这里使用一个空的组件，直接使用 HTML 作为应用的模板
// var Apptest = Vue.extend({})
// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router = new VueRouter()
// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由
router.map({
  '/': {
    component: list,
    subRoutes: {
      '/': {
        component: listDefault
      },
      '/theme/:id': {
        name: 'theme',
        component: listTheme
      },
      '/author/:id': {
        name: 'author',
        component: author
      }
    }
  },
  '/detail/:id': {
    name: 'detail',
    component: detail
  },
  '/comments': {
    component: comments
  },
  '/recommenders': {
    component: recommenders
  },
  '/section': {
    component: section
  },
  '/editors': {
    component: editors
  }
})
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app')
