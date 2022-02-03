<!--
 * @Author: litfa
 * @Date: 2022-01-30 15:34:35
 * @LastEditTime: 2022-02-03 14:29:33
 * @LastEditors: litfa
 * @Description: 音乐详情页
 * @FilePath: /music-app/src/subpkg/music-details/music-details.vue
 *
-->
<template>
  <div class="music-details">
    <div class="tabBar">
      <div class="icon" @click="exit">
        <u-icon name="arrow-down" color="#8a8c91" size="20"
          bold></u-icon>
      </div>
      <div class="info">
        <div class="name">{{name}}</div>
        <div class="author">{{author}}</div>
      </div>
      <div class="icon">
        <u-icon name="more-dot-fill" color="#8a8c91"
          size="20" bold></u-icon>

      </div>
    </div>
    <div class="image">
      <image :src="imgSrc" mode="widthFix"
        :class="playing ? '' : 'pause'" />
    </div>
    <div class="box"></div>
    <div class="progressBar">
      <div class="bar">
        <u-slider v-model="value" @input="change">
        </u-slider>
      </div>
      <div class="time">
        <span class="now">{{viewProgress || '0:00'}}</span>
        <span class="max">{{viewDuration || '0:00'}}</span>
      </div>
    </div>
    <div class="playButton">
      <div class="prev">
        <u-icon name="skip-back-left" color="#8a8c91"
          size="25" bold>
        </u-icon>
      </div>
      <div class="pause">
        <u-icon name="play-right" color="#8a8c91" size="30"
          bold v-if="!playing" @click="play">
        </u-icon>
        <u-icon name="pause" color="#8a8c91" size="30" bold
          v-if="playing" @click="pause">
        </u-icon>
      </div>
      <div class="next">
        <u-icon name="skip-forward-right" color="#8a8c91"
          size="25" bold>
        </u-icon>
      </div>
    </div>
    <div class="button"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import * as musicContext from '@/utils/music.js'
import dayjs from '@/utils/dayjs.min.js'
export default {
  components: {},
  data: () => ({
    value: 30,
    // 滑动选择器没有开始滑动/结束滑动的事件 又需要与音乐双向绑定
    // 因此使用 http请求中常用的 节流 更新数据
    timeout: '',
    setting: false,
  }),
  computed: {
    ...mapState(['audio']),
    name() {
      return this.audio.musicList[this.audio.index]?.name
    },
    author() {
      return this.audio.musicList[this.audio.index]?.author
    },
    imgSrc() {
      return this.audio.musicList[this.audio.index]?.picUrl
    },
    playing() {
      return this.audio.playing
    },
    // 音乐总长度 (秒)
    duration() {
      return this.audio.duration / 1000
    },
    // 音乐总长度 (格式化后)
    viewDuration() {
      return dayjs(this.audio.duration).format('mm:ss')
    },

    // 播放进度 （秒）
    progress() {
      // 当前进度
      return this.audio.progress
    },
    // 播放进度 （格式化后）
    viewProgress() {
      // 当前进度
      const progress = this.audio.progress
      return dayjs(progress * 1000).format('mm:ss')
    },
  },
  watch: {
    // 监听播放进度的变化 赋值给value 假双向绑定
    progress() {
      if (!this.setting) {
        this.value = this.progress
      }
    },
  },
  methods: {
    change(value) {
      clearTimeout(this.timeout)
      this.setting = true
      this.timeout = setTimeout(() => {
        this.setting = false
        musicContext.seek(value)
      }, 500)
    },
    pause() {
      musicContext.pause()
    },
    play() {
      musicContext.play()
    },
    exit() {
      uni.navigateBack()
    },
  },

  // 页面周期函数--监听页面加载
  onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {},
  // 页面处理函数--监听用户下拉动作
  onPullDownRefresh() {
    uni.stopPullDownRefresh()
  },
  // 页面处理函数--监听用户上拉触底
  onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  /* onPageScroll(event) {}, */
  // 页面处理函数--用户点击右上角分享
  /* onShareAppMessage(options) {}, */
}
</script>

<style lang="less" scoped>
.music-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f3f7;
  height: 100vh;
  justify-content: space-between;
  // 顶部栏
  .tabBar {
    width: 90%;
    margin: 20rpx 0;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    .icon {
      width: 80rpx;
      height: 80rpx;
      background-color: rgb(255, 255, 255);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 15rpx;
      box-shadow: 15rpx 15rpx 60rpx 0rpx rgba(56, 56, 56, 0.404);
    }
    .info {
      text-align: center;
      .name {
        color: #000;
        font-size: 36rpx;
      }
      .author {
        color: #9c9da1;
        font-size: 32rpx;
      }
    }
  }
  // 主图
  .image {
    width: 520rpx;
    height: 520rpx;
    image {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      animation: rotate 20s infinite linear forwards;
    }
    .pause {
      animation-play-state: paused;
    }
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
  // 歌词等 的盒子
  // 进度条
  .progressBar {
    width: 85%;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    .bar {
      width: 100%;
      /deep/ slider {
        margin: 0;
      }
    }
    .time {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 26rpx;
      color: #909195;
    }
  }
  // 播放按钮
  .playButton {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .next,
    .prev,
    .pause {
      background-color: #ffffff;
      box-shadow: 15rpx 15rpx 50rpx 0 rgba(31, 31, 31, 0.301);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
    .next,
    .prev {
      width: 80rpx;
      height: 80rpx;
    }

    .pause {
      width: 120rpx;
      height: 120rpx;
      // 三角形位置在视觉上会有偏差，偏移一些看起来居中
      padding-left: 8rpx;
      box-sizing: border-box;
    }
  }
  // 底部小按钮
}
</style>