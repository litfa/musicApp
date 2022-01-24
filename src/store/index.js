/**
 * @Author: litfa
 * @Date: 2022-01-23 16:50:19
 * @LastEditTime: 2022-01-23 16:54:45
 * @LastEditors: litfa
 * @Description: vuex index
 * @FilePath: /music-app/src/store/index.js
 * @
 */

import Vue from 'vue'
import Vuex from 'vuex'

import state from './state.js'
import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store