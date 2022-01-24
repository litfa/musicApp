/**
 * @Author: litfa
 * @Date: 2022-01-23 16:54:39
 * @LastEditTime: 2022-01-23 16:56:48
 * @LastEditors: litfa
 * @Description: vuex mutations
 * @FilePath: /music-app/src/store/mutations.js
 * @
 */

export default {
  setTabBar (state, data) {
    state.tabBar.now = data
  }
}