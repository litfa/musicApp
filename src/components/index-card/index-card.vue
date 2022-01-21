<!--
 * @Author: litfa
 * @Date: 2022-01-21 15:43:05
 * @LastEditTime: 2022-01-21 16:24:27
 * @LastEditors: litfa
 * @Description: 首页卡片组件
 * @FilePath: /music-app/src/components/index-card/index-card.vue
 *
-->
<template>
  <div class="index-card">
    <div class="subtitle">{{ subtitle }}</div>
    <div class="title">{{ title }}</div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="bottom">
      <div class="tag" v-if="true">
        <div class="tag-title"></div>
        <div class="tag-subtitle"></div>
      </div>
      <div class="link" v-else></div>
      <image class="play" :src="require('@/static/image/play.png')" mode="aspectFit" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
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
.index-card {
  margin: 0 30rpx;
  background-color: rgb(105, 3, 100);
  // box-sizing: border-box;
  border-radius: 15rpx;
  padding: 1rpx 35rpx 0 35rpx;
  .subtitle {
    height: 28rpx;
    margin-top: 25rpx;
    color: #fff;
    font-size: 26rpx;
  }
  .title {
    margin-top: 15rpx;
    margin-bottom: 20rpx;
    height: 50rpx;
    font-size: 40rpx;
    font-weight: bold;
    color: #fff;
  }
  .content {
    margin-left: 20rpx;
  }
  .bottom {
    height: 145rpx;
    display: flex;
    width: 100%;
    justify-content: space-between;
    .play {
      width: 80rpx;
      height: 80rpx;
      border-radius: 50%;
      box-shadow: 0 0 8px 0 rgb(5, 5, 5);
    }
  }
}
</style>
