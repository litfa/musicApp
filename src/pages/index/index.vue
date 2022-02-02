<!--
 * @Author: litfa
 * @Date: 2022-01-19 19:19:53
 * @LastEditTime: 2022-01-30 21:09:46
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
    <tabbar-music></tabbar-music>
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
.index {
  background-color: #f3f3f3;
}
</style>
