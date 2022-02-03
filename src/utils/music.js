/**
 * @Author: litfa
 * @Date: 2022-01-30 13:59:07
 * @LastEditTime: 2022-02-03 14:31:13
 * @LastEditors: litfa
 * @Description: 音乐控制组件
 * @FilePath: /music-app/src/utils/music.js
 * @
 */

import vue from '@/main.js'

// console.log(_vue)
// _vue.$store.state
// $store.state\
console.log(vue)

const { state } = vue.$store

// 绑定事件 播放完成调用next
const reSetMusicContext = () => {
  // 销毁原有实例
  if (state.audio.musicContext.destroy) state.audio.musicContext.destroy()
  // 创建实例
  state.audio.musicContext = uni.createInnerAudioContext()
  // 设置音乐总长度
  state.audio.duration = state.audio.musicList[state.audio.index]?.duration
  // 获取音频路径
  const src = state.audio.musicList[state.audio.index]?.src
  // 音设置频路径
  state.audio.musicContext.src = src
  // 播放
  state.audio.musicContext.play()
  state.audio.playing = true
  /**
   * 向 vuex 传递数据
   */
  // 播放状态
  state.audio.musicContext.onPlay(() => {
    console.log('onPlay')

  })

  // 进度条更新
  state.audio.musicContext.onTimeUpdate(() => {
    state.audio.progress = state.audio.musicContext.currentTime
  })

}

/**
 * 向播放列表添加音乐
 */
export const addMusic = (src) => {
  state.audio.musicList.push({
    status: 1,
    src: 'https://webfs.ali.kugou.com/202201301349/190af852b84b8b4e422003b444a1eda5/KGTX/CLTX001/f2e7e2ea86744b6511963a069c7ccb19.mp3'
  })
  reSetMusicContext()
}
/**
 * 立即播放歌曲
 * 从当前位置添加， 并切换到该音乐
 */
export const playMusic = (data) => {
  // 向列表添加数据
  state.audio.musicList.push(data)
  // 增加索引
  state.audio.index++
  // 重置实例
  reSetMusicContext()
  console.log(state.audio.musicList)

}

// 下一首播放

// 删除音乐

// 下一首

// 上一首

// 暂停
export const pause = () => {
  state.audio.musicContext.pause()
  state.audio.playing = false
}

// 播放
export const play = () => {
  console.log('播放')
  state.audio.musicContext.play()
  state.audio.playing = true
}

/**
 * 设置音乐播放进度
 */
export const seek = (position) => {
  state.audio.musicContext.seek(position)
  play()
}