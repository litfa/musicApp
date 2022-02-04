/**
 * @Author: litfa
 * @Date: 2022-01-30 13:59:07
 * @LastEditTime: 2022-02-04 13:07:08
 * @LastEditors: litfa
 * @Description: 音乐控制组件
 * @FilePath: /music-app/src/utils/music.js
 * @
 */

import vue from '@/main.js'

const { state } = vue.$store

// 绑定事件 播放完成调用next

export default {
  reSetMusicContext () {
    // 销毁原有实例
    console.log(state.audio.musicContext.destroy)
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
    // 播放结束事件
    state.audio.musicContext.onEnded(() => {
      console.log('onEnded')
      this.next()
    })

    /**
     * 向 vuex 传递数据
     */
    // 播放状态
    state.audio.musicContext.onPlay(() => {
      console.log('onPlay')

    })

    // 进度条更新
    state.audio.musicContext.onTimeUpdate(() => {
      // state.audio.duration = state.audio.musicContext.duration
      state.audio.progress = state.audio.musicContext.currentTime
    })
    state.audio.musicContext.onCanplay(() => {
      console.log('onCanplay')
      state.audio.duration = state.audio.musicContext.duration
      // state.audio.progress = state.audio.musicContext.currentTime
      function getDuration () {
        setTimeout(() => {
          console.log('can', state.audio.musicContext.duration)
          if (state.audio.musicContext.duration == 0) {
            getDuration()
          } else {
            state.audio.duration = state.audio.musicContext.duration
          }
        }, 500)
      }
      getDuration()

    })

  },

  /**
   * 向播放列表添加音乐
   */
  addMusic (src) {
    state.audio.musicList.push({
      status: 1,
      src: 'https://webfs.ali.kugou.com/202201301349/190af852b84b8b4e422003b444a1eda5/KGTX/CLTX001/f2e7e2ea86744b6511963a069c7ccb19.mp3'
    })
    this.reSetMusicContext()
  },
  /**
   * 立即播放歌曲
   * 从当前位置添加， 并切换到该音乐
   */
  playMusic (data) {
    // 向列表添加数据
    state.audio.musicList.push(data)
    // 增加索引
    state.audio.index++
    // 重置实例
    this.reSetMusicContext()
    console.log(state.audio.musicList)

  },

  // 下一首播放

  // 删除音乐

  /**
   * 下一首
   */
  next () {
    // 设置索引
    if (state.audio.musicList.length - 1 == state.audio.index) {
      state.audio.index = 0
    } else state.audio.index++
    // 重置实例
    this.reSetMusicContext()
    console.log(state.audio.musicList)
  },

  /**
   * 上一首
   */
  prev () {
    // 设置索引
    if (state.audio.index == 0) {
      state.audio.index = state.audio.musicList.length - 1
    } else state.audio.index--
    // 重置实例
    this.reSetMusicContext()
    console.log(state.audio.musicList)
  },

  /**
   * 暂停
   */
  pause () {
    state.audio.musicContext.pause()
    state.audio.playing = false
  },

  /**
   * 播放
   */
  play () {
    console.log('播放')
    state.audio.musicContext.play()
    state.audio.playing = true
  },

  /**
   * 设置音乐播放进度
   */
  seek (position) {
    state.audio.musicContext.seek(position)
    this.play()
  },

}
