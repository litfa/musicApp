<!--
 * @Author: litfa
 * @Date: 2022-01-29 20:51:35
 * @LastEditTime: 2022-02-04 12:24:10
 * @LastEditors: litfa
 * @Description: 音乐
 * @FilePath: /music-app/src/components/music-item/music-item.vue
 *
-->
<template>
  <div class="music-item" @click="play">
    <div class="info">
      <span class="name">{{ name }}</span>
      <span class="artists">
        <span class="transNames"
          v-if="transNames">{{ transNames }}</span>
        <span class="author">{{ author }}</span>
      </span>
    </div>
    <div class="any">···</div>
  </div>
</template>

<script>
import musicContext from '@/utils/music.js'
import songUrl from '@/apis/songUrl.js'
export default {
  props: {
    name: {
      type: String,
    },
    author: {
      type: String,
    },
    transNames: {
      type: String,
    },
    musicId: {
      type: [String, Number],
    },
    picUrl: {
      type: String,
    },
  },
  data: () => ({}),
  computed: {},
  methods: {
    async play() {
      const { src, size } = await this.getAudioSrc()
      console.log(src)
      musicContext.playMusic({
        src,
        picUrl: this.picUrl,
        name: this.name,
        author: this.author,
        // duration: size/2,
      })
      // const innerAudioContext = uni.createInnerAudioContext()
      // innerAudioContext.autoplay = true
      // innerAudioContext.src =
      //   'https://webfs.ali.kugou.com/202201301349/190af852b84b8b4e422003b444a1eda5/KGTX/CLTX001/f2e7e2ea86744b6511963a069c7ccb19.mp3'
      // innerAudioContext.onPlay(() => {
      //   console.log('开始播放')
      // })
      // innerAudioContext.onError((res) => {
      //   console.log(res.errMsg)
      //   console.log(res.errCode)
      // })
    },
    async getAudioSrc() {
      const { data: res } = await songUrl(this.musicId)
      return {
        src: res.data[0].url,
        size: res.data[0].size,
      }
    },
  },
  watch: {},

  // 组件周期函数--监听组件挂载完毕
  mounted() {},
  // 组件周期函数--监听组件数据更新之前
  beforeUpdate() {},
  // 组件周期函数--监听组件数据更新之后
  updated() {},
  // 组件周期函数--监听组件激活(显示)
  activated() {},
  // 组件周期函数--监听组件停用(隐藏)
  deactivated() {},
  // 组件周期函数--监听组件销毁之前
  beforeUnmount() {},
}
</script>

<style lang="less" scoped>
.music-item {
  display: flex;
  justify-content: space-between;
  padding: 15rpx 10rpx;
  margin: 15rpx 0;
  align-items: center;
  transition: all 0.5s;
  &:active {
    background-color: rgb(207, 207, 207);
  }
  .info {
    display: flex;
    flex-direction: column;
    .name {
      font-size: 35rpx;
      font-weight: bold;
    }
    .artists {
      font-size: 30rpx;
      .transNames {
        color: #1396ed;
        margin-right: 10rpx;
      }
      .author {
        color: #8c8c8c;
      }
    }
  }
}
</style>
