<!--
 * @Author: litfa
 * @Date: 2022-01-22 15:57:02
 * @LastEditTime: 2022-01-22 17:43:04
 * @LastEditors: litfa
 * @Description: 所有卡片（在这里请求遍历）
 * @FilePath: /music-app/src/components/index-cards/index-cards.vue
 *
-->
<template>
  <div class="index-cards">
    <!-- 新歌速递 -->
    <index-card title="新歌速递" class="newMusic" :blurPicUrl="newMusic[0].album.blurPicUrl">
      <div class="musics">
        <div class="item" v-for="item in newMusic" :key="item.id">
          <image :src="item.album.blurPicUrl" mode="widthFix" />
          <span class="name">{{ item.name }}</span>
          <span class="author">{{ item.artists[0].name }}</span>
        </div>
      </div>
      <!-- 底部插槽 -->
      <template #bottom>
        <span class="bottom"> ...{{ newMusicLength }}首</span>
      </template>
    </index-card>
    <!-- 飙升帮 -->
    <index-card title="热门音乐" :blurPicUrl="hotMusic[1].al.picUrl">
      <div class="hotMusic">
        <div class="item" v-for="item in hotMusic" :key="item.id">
          <image :src="item.al.picUrl" mode="heightFix" />
          <div class="info">
            <span class="name">{{ item.name }}</span>
            <span></span>
            <span class="author">{{ item.ar[0].name }}</span>
          </div>
        </div>
      </div>
    </index-card>
  </div>
</template>

<script>
import newMusic from '@/apis/newMusic.js'
import hotMusic from '@/apis/hotMusic.js'
export default {
  props: {},
  data: () => ({
    newMusic: [],
    newMusicLength: 0,
    hotMusic: [],
  }),
  computed: {},
  watch: {},

  created() {
    this.getNewMusic()
    this.getHotMusic()
  },
  methods: {
    async getNewMusic() {
      const { data: res } = await newMusic()
      // 总数
      this.newMusicLength = res.data.length
      // 保留前三项
      res.data.splice(3, res.data.length)
      // 赋值
      this.newMusic = res.data
    },
    async getHotMusic() {
      const { data: res } = await hotMusic()
      console.log(res.playlist.tracks)
      const musicList = res.playlist.tracks
      musicList.splice(3, musicList.length)
      this.hotMusic = musicList
    },
  },

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
.index-cards {
  .musics {
    display: flex;
    justify-content: space-around;
    .item {
      width: 30%;
      display: flex;
      flex-direction: column;
      image {
        width: 100%;
        height: 100%;
        border-radius: 15rpx;
      }
      .name {
        color: #fffff6;
        line-height: 50rpx;
      }
      .author {
        color: #ffffffb7;
        font-size: 22rpx;
      }
    }
  }
  .bottom {
    font-size: 20rpx;
    color: #fffff6;
  }

  .hotMusic {
    display: flex;
    flex-direction: column;
    .item {
      display: flex;
      height: 120rpx;
      margin: 15rpx 0 15rpx 50rpx;
      align-items: center;
      image {
        height: 100%;
        flex-shrink: 0;
        border-radius: 15rpx;
        margin-right: 30rpx;
      }
      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .name {
          color: #fffff6;
          overflow: hidden;
          width: 10em;
          text-overflow: ellipsis;
          white-space: nowrap;
          height: 1.2em;
        }
        .author {
          color: #fffff69c;
          // font-weight: lighter;
          font-size: 25rpx;
        }
      }
    }
  }
}
</style>
