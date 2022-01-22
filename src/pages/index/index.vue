<!--
 * @Author: litfa
 * @Date: 2022-01-19 19:19:53
 * @LastEditTime: 2022-01-22 17:44:29
 * @LastEditors: litfa
 * @Description: 首页
 * @FilePath: /music-app/src/pages/index/index.vue
 *
-->
<template>
  <div>
    <top-bar></top-bar>
    <index-cards></index-cards>
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

<style lang="less">
.top-bar {
  position: sticky;
  top: 0px;
  z-index: 100;
  margin-bottom: 10rpx;
}
</style>
