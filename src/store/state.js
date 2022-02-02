/**
 * @Author: litfa
 * @Date: 2022-01-23 16:53:17
 * @LastEditTime: 2022-02-01 16:19:58
 * @LastEditors: litfa
 * @Description: vuex state
 * @FilePath: /music-app/src/store/state.js
 * @
 */

export default {
  tabBar: {
    now: 0
  },
  audio: {
    // 音频实例对象
    musicContext: () => { },
    // 音乐列表
    // src name imgurl status
    musicList: [],
    // 索引
    index: -1,
    // 播放进度
    progress: 0,
    // 音乐长度
    duration: 0,
    // 是否正在播放
    playing: false
  }
}