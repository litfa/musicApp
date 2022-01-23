<!--
 * @Author: litfa
 * @Date: 2022-01-19 19:19:53
 * @LastEditTime: 2022-01-23 16:34:12
 * @LastEditors: litfa
 * @Description: 首页
 * @FilePath: /music-app/src/pages/index/index.vue
 *
-->
<template>
  <div class="index">
    <top-bar></top-bar>
    <index-cards></index-cards>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          text: '点赞',
          color: 'blue',
          fontSize: 28,
        },
        {
          text: '分享',
        },
        {
          text: '评论',
        },
      ],
      show: true,
    }
  },
}
</script>

<style lang="less" scoped>
.top-bar {
  position: sticky;
  top: 0px;
  z-index: 100;
  margin-bottom: 10rpx;
}
.index {
  background-color: #f3f3f3;
}
</style>
