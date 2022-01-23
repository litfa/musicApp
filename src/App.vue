<!--
 * @Author: litfa
 * @Date: 2022-01-19 19:19:53
 * @LastEditTime: 2022-01-23 15:36:31
 * @LastEditors: litfa
 * @Description:
 * @FilePath: /music-app/src/App.vue
 *
-->
<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import 'uview-ui/index.scss';
</style>
