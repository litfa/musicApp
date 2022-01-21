<!--
 * @Author: litfa
 * @Date: 2022-01-21 14:46:24
 * @LastEditTime: 2022-01-21 15:40:04
 * @LastEditors: litfa
 * @Description: 搜索组件
 * @FilePath: /music-app/src/components/search/search.vue
 *
-->
<template>
  <div class="search">
    <navigator url="/subpkg/search/search" redirect>
      <view class="input">
        <u-icon name="search" color="#b6b6b6"></u-icon>
        单曲/频道
      </view>
    </navigator>
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
.search {
  width: 350rpx;
  height: 60rpx;
  navigator {
    width: 100%;
    height: 100%;
  }
  .input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 500rpx;
    background-color: #eeeeee;
    color: #b6b6b6;
    box-shadow: 0px 0px 5px 5px rgba(173, 173, 173, 0.479) inset;
  }
}
</style>
