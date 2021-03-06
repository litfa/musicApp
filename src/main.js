/**
 * @Author: litfa
 * @Date: 2022-01-19 19:19:53
 * @LastEditTime: 2022-01-30 14:20:37
 * @LastEditors: litfa
 * @Description: main
 * @FilePath: /music-app/src/main.js
 * @
 */
import Vue from 'vue'
import App from './App'

import uView from 'uview-ui'
// 按需导入 $http 对象
import { $http } from '@escook/request-miniprogram'

import store from './store'

Vue.use(uView)

// 默认请求路径
// 临时用第三方api 生产环境用自己的
$http.baseUrl = 'http://cloud-music.pl-fe.cn'
// 把 $http 挂载到 uni 顶级对象之上，方便全局调用
uni.$http = $http
// 如此配置即可
uni.$u.config.unit = 'rpx'

// 隐藏tabbar 使用自定义的
uni.hideTabBar()


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()
export default app