<!--
 * @Author: litfa
 * @Date: 2022-01-21 15:43:05
 * @LastEditTime: 2022-01-22 20:08:40
 * @LastEditors: litfa
 * @Description: 首页卡片组件
 * @FilePath: /music-app/src/components/index-card/index-card.vue
 *
-->
<template>
  <div class="index-card">
    <div class="blurPicUrl" :style="{ backgroundImage: `url(${blurPicUrl});` }"></div>
    <div class="subtitle">{{ subtitle }}</div>
    <!-- {{ blurPicUrl }} -->
    <div class="title">{{ title }}</div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="bottom">
      <div class="tag" v-if="bottomView == 'tag'">
        <div class="tag-title"></div>
        <div class="tag-subtitle"></div>
      </div>
      <div class="link" v-else-if="bottomView == 'link'"></div>
      <span v-else>
        <slot name="bottom"></slot>
      </span>
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
    blurPicUrl: {
      type: String,
      required: true,
    },
    // 底部 左下角展示内容
    // 标签 或 链接 或 无
    // tag  or link or none
    bottomView: {
      type: String,
      default: 'none',
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
  margin: 20rpx 30rpx;
  border-radius: 15rpx;
  padding: 1rpx 35rpx 0 35rpx;
  position: relative;
  .blurPicUrl {
    border-radius: 16rpx;
    background-color: rgb(105, 3, 100);
    background-size: cover;
    filter: blur(1.5px);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
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
  // .content {
  //   margin-left: 20rpx;
  // }
  .bottom {
    height: 145rpx;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-top: 20rpx;
    box-sizing: border-box;
    .play {
      width: 80rpx;
      height: 80rpx;
      border-radius: 50%;
      box-shadow: 0 0 8px 0 rgb(5, 5, 5);
    }
  }
}
</style>
