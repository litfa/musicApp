<!--
 * @Author: litfaaaa
 * @Date: 2022-01-26 16:55:53
 * @LastEditTime: 2022-02-04 21:26:10
 * @LastEditors: litfa
 * @Description: 搜索输入框
 * @FilePath: /music-app/src/components/search-input/search-input.vue
 *
-->
<template>
  <div class="search-input">
    <div class="back" @click.stop="back()" v-if="disable">
    </div>
    <div class="input">
      <!-- 输入框 -->
      <input type="text" v-model="keywords"
        confirm-type="search" @confirm="search(keywords)"
        :auto-focus="disable ? false: true" />
      <!-- 叉号 清除按钮 有内容时显示 -->
      <!-- uniapp 的 v-show 有问题？ v-if 正常 v-show 无效果 -->
      <div class="clearValue" v-if="keywords"
        @click.stop="clearValue">×</div>
    </div>
    <div class="cancel" @click="cancel">取消</div>

    <div class="suggest"
      :style="{height: `calc(${windowHeight}px  - 100rpx)`}"
      v-if="!disable">
      <div v-for="item in suggest" :key="item.id"
        @click.stop="search(item.keyword)">

        <u-icon name="search" color="#888" size="22">
        </u-icon>
        <span>
          {{item.keyword}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import searchSuggest from '@/apis/searchSuggest.js'
export default {
  props: {
    keyValue: {
      type: String,
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    keywords: '',
    timeout: '',
    suggest: [],
  }),
  watch: {
    keywords(e) {
      clearTimeout(this.timeout)
      setTimeout(async () => {
        const { data: res } = await searchSuggest(e)
        console.log(res)
        this.suggest = res.result.allMatch
        console.log(this.suggest)
      }, 500)
    },
  },
  computed: {
    windowHeight() {
      const res = uni.getSystemInfoSync()
      return res.windowHeight
    },
  },
  methods: {
    cancel() {
      // console.log('back')
      uni.navigateBack({
        url: '/pages/index/index',
      })
    },
    back() {
      console.log('back')
      uni.navigateBack({ delta: 1 })
    },
    clearValue() {
      console.log('clear')
      this.keywords = ''
    },
    editValue() {
      this.$emit('editValue', this.keywords)
    },
    search(keywords) {
      console.log(keywords)
      console.log('this.keywords', this.keywords)
      if (!keywords) {
        keywords = this.keywords
      } else {
        this.keywords = keywords
      }
      uni.navigateTo({
        url: `/subpkg/search-results/search-results?keywords=${keywords}`,
      })
    },
  },

  // 组件周期函数--监听组件挂载完毕
  mounted() {
    this.keywords = this.keyValue
  },
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
.search-input {
  display: flex;
  height: 70rpx;
  justify-content: space-around;
  align-items: center;
  margin: 15rpx 15rpx 0 15rpx;
  position: relative;
  .back {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 20;
  }
  .input {
    height: 70rpx;
    flex: 1;
    position: relative;
    // 点击叉号时仍会触发点击文本框的操作 导致无法触发点击事件
    // 因此将文本框的样式加在外层div上，文本框和叉号不重合
    box-shadow: 0 0 10rpx 0 #919191 inset;
    border-radius: 70rpx;
    input {
      width: 100%;
      height: 100%;
      font-size: 35rpx;
      padding-left: 0.6em;
      margin-right: 100rpx;
    }
    .clearValue {
      width: 70rpx;
      height: 70rpx;
      // background-color: pink;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 10rpx;
      top: 0;
      z-index: 10;
    }
  }
  // div {
  //   width: 100rpx;
  //   height: 100%;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  // }
}
.suggest {
  position: absolute;
  // z-index: 10;
  top: 80rpx;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  background-color: #fff;
  div {
    height: 100rpx;
    margin: 0 15rpx;
    padding-left: 5rpx;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    border-bottom: 1px solid rgba(228, 228, 228, 0.89);
    transition: all 0.3s;
    &:active {
      background-color: rgb(236, 236, 236);
    }
    span {
      margin-left: 5rpx;
      overflow: hidden;
      word-break: normal;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
