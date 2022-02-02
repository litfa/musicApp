<!--
 * @Author: litfa
 * @Date: 2022-01-30 21:06:59
 * @LastEditTime: 2022-01-31 17:08:08
 * @LastEditors: litfa
 * @Description: 底部栏音乐图标
 * @FilePath: /music-app/src/components/tabbar-music/tabbar-music.vue
 *
-->
<template>
  <div class="tabbar-music" @click="openMusicDetails">
    <image :src="audio.musicList[audio.index].picUrl"
      mode="widthFix" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  props: {},
  data: () => ({
    // src: this.audio.musicList[this.audio.indexs].picUrl,
  }),
  computed: {
    ...mapState(['audio']),
  },
  methods: {
    openMusicDetails() {
      uni.navigateTo({
        url: '/subpkg/music-details/music-details',
      })
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
.tabbar-music {
  width: 110rpx;
  height: 110rpx;
  background-color: pink;
  position: fixed;
  bottom: 25rpx;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  z-index: 101;
  image {
    width: 100%;
    height: 100%;
  }
}
</style>
