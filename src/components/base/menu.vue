<template>
  <div class="menu">
    <div class="logo"></div>
    <div class="menu-wrapper">
      <router-link tag="a" class="menu-item" to="/main/overview"><i class="icon-shouye"></i>概览</router-link>
      <router-link tag="a" class="menu-item" to="/main/calendar"><i class="icon-yuyueshezhi"></i>预约</router-link>
      <router-link tag="a" class="menu-item" to="/main/member"><i class="icon-huiyuan"></i>会员</router-link>
      <router-link tag="a" class="menu-item" to="/main/cuslist"><i class="icon-biaoqian"></i>潜客</router-link>
      <router-link tag="a" class="menu-item" to="/main/serving"><i class="icon-icon27401"></i>商品</router-link>
      <router-link tag="a" class="menu-item" to="/main/order"><i class="icon-porder"></i>订单</router-link>
      <router-link tag="a" class="menu-item" to="/main/marketing"><i class="icon-yingxiao"></i>营销</router-link>
      <router-link tag="a" class="menu-item" to="/main/statistics"><i class="icon-statistics1"></i>统计</router-link>
      <router-link tag="a" class="menu-item" to="/main/setting"><i class="icon-shezhi"></i>设置</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>
<style lang="stylus">
@import "~@/assets/stylus/mixin"
.menu
  height 100%
  min-height 100vh
  background #343d50
  .logo
    height 70px
  .menu-item
    display block
    height 50px
    line-height 50px
    font-size $normal-font
    color #f9f9f9
    &.router-link-active
      background #39aafb
    .icon-biaoqian
      font-size 19px
      padding-right 15px
    i
      display inline-block
      padding-right 18px
      margin-left 30px
      font-size 16px
    &:hover
      background #39aafb 
  
</style>
