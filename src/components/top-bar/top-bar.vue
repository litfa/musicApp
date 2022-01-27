<!--
 * @Author: litfa
 * @Date: 2022-01-21 14:57:09
 * @LastEditTime: 2022-01-27 10:50:09
 * @LastEditors: litfa
 * @Description: topBar
 * @FilePath: /music-app/src/components/top-bar/top-bar.vue
 *
-->
<template>
  <div class="top-bar">
    <view class="nav">
      <image :src="require('@/static/image/fa_xian_1.png')"
        mode="aspectFit" />
      <image :src="require('@/static/image/ding_yue_0.png')"
        mode="aspectFit" />
    </view>
    <search class="search"></search>
  </div>
</template>

<script>
export default {
  props: {},
  data: () => ({}),
  computed: {},
  methods: {},
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
.top-bar {
  position: sticky;
  top: 0px;
  z-index: 100;
  margin-bottom: 10rpx;
  height: 90rpx;
  background-color: #f3f3f3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rpx 10rpx;
  box-sizing: border-box;
  .nav {
    width: 235rpx;
    height: 100%;
    display: flex;
    image {
      height: 100%;
      width: 93rpx;
    }
  }
  .search {
    height: 80%;
  }
}
</style>
