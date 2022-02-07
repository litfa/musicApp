<!--
 * @Author: litfa
 * @Date: 2022-01-23 15:48:35
 * @LastEditTime: 2022-02-05 17:08:49
 * @LastEditors: litfa
 * @Description:
 * @FilePath: /music-app/src/components/tab-bar/tab-bar.vue
 *
-->

<template>
  <div class="tab-bar">
    <div class="tab"
      :class="tabBar.now == 0 ? 'selected' : ''"
      @click="switchTab(list[0].pagePath, 0)">
      <image
        :src="require(`@/static/tabbar-icon/index${tabBar.now == 0 ? '-1' : ''}.png`)"
        mode="widthFix" />
      <span>发现</span>
    </div>
    <div class="tab"
      :class="tabBar.now == 1 ? 'selected' : ''"
      @click="switchTab(list[1].pagePath, 1)">
      <image
        :src="require(`@/static/tabbar-icon/my${tabBar.now == 1 ? '-1' : ''}.png`)"
        mode="widthFix" />
      <span>我的</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  props: {},
  data: () => ({
    list: [
      {
        pagePath: 'pages/index/index',
        text: '发现',
        iconPath: 'static/tabbar-icon/index.png',
        selectedIconPath: 'static/tabbar-icon/index-1.png',
      },
      {
        pagePath: 'pages/my/my',
        text: '我',
        iconPath: 'static/tabbar-icon/my.png',
        selectedIconPath: 'static/tabbar-icon/my-1.png',
      },
    ],
  }),
  computed: {
    ...mapState(['tabBar']),
  },

  methods: {
    ...mapMutations(['setTabBar']),
    switchTab(to, index) {
      console.log(to)
      uni.switchTab({
        url: '/' + to,
      })
      // console.log(this.setTabBar)
      // console.log('tabbar', this.tabBar)
      this.setTabBar(index)
    },
  },
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
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  height: 160rpx;
  background-color: #f3f3f3;
  border-radius: 40rpx 40rpx 0rpx 0rpx;
  box-shadow: 0rpx 0 50rpx 0 rgba(0, 0, 0, 0.692);

  display: flex;
  justify-content: space-around;
  align-items: center;
  .tab {
    width: 60rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    image {
      width: 100%;
    }
    span {
      font-size: 26rpx;
      color: #b8b8b8;
    }
  }
  .selected span {
    color: #000;
  }
  // .tab[selected='true'] span {
  //   color: #000;
  // }
}
</style>
