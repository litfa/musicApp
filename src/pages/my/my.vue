<!--
 * @Author: litfa
 * @Date: 2022-01-23 15:24:54
 * @LastEditTime: 2022-02-05 13:40:42
 * @LastEditors: litfa
 * @Description: 我的
 * @FilePath: /music-app/src/pages/my/my.vue
 *
-->
<template>
  <div class="my">
    <div class="codeing">
      <image src="./../../static/image/codeing.png"
        mode="widthFix" />
      开发中...
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({}),
  computed: {},
  methods: {},
  watch: {},

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
.codeing {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 60rpx;
  font-weight: bold;
  color: #515151;
  margin-top: 20%;
  image {
    width: 50%;
  }
}
</style>
