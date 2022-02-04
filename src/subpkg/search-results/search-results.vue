<!--
 * @Author: litfa
 * @Date: 2022-01-26 16:54:47
 * @LastEditTime: 2022-02-04 20:05:07
 * @LastEditors: litfa
 * @Description: 搜索结果页
 * @FilePath: /music-app/src/subpkg/search-results/search-results.vue
 *
-->
<template>
  <div class="search-results">
    <search-input :keyValue="keywords" disable>
    </search-input>
    <div v-for="item in resMusicList" :key="item.id">
      <!-- {{ item.name }} -->
      <music-item :name="item.name"
        :author="item.ar[0].name" :musicId="item.id"
        :picUrl="item.al.picUrl">
      </music-item>
    </div>
    <tabbar-music v-if="musicList.length > 0">
    </tabbar-music>
  </div>
</template>

<script>
import searchMusic from '@/apis/searchMusic.js'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {},
  data: () => ({
    keywords: '',
    resMusicList: [],
  }),
  computed: {
    ...mapState(['audio']),
    musicList() {
      return this.audio.musicList
    },
  },
  methods: {
    async initMusic() {
      const { data: res } = await searchMusic(this.keywords)
      console.log(res)
      this.resMusicList = res.result.songs
    },
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad(option) {
    console.log(option)
    this.keywords = option.keywords

    this.initMusic()
  },
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

<style></style>
