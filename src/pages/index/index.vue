<!--
 * @Author: litfa
 * @Date: 2022-01-19 19:19:53
 * @LastEditTime: 2022-01-21 16:22:22
 * @LastEditors: litfa
 * @Description: 首页
 * @FilePath: /music-app/src/pages/index/index.vue
 *
-->
<template>
  <div>
    <top-bar></top-bar>
    <index-card title="概念新歌速递" subtitle="副·标题"> 插槽内容 </index-card>
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
