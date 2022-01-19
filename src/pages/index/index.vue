<!--
 * @Author: your name
 * @Date: 2022-01-19 19:19:53
 * @LastEditTime: 2022-01-19 19:47:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \music-app\src\pages\index\index.vue
-->
<template>
  <div>
    <!-- <u-action-sheet :list="list" v-model="show">111</u-action-sheet> -->
    <u-button text="月落">111</u-button>
    <u-button type="primary" text="确定"></u-button>
    <u-button type="primary" size="small" text="大小尺寸"></u-button>
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
