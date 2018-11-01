<template>
  <div>
    <div class="fixed-menu" >
      <div class="menu-main" ></div>
      <el-tooltip class="item" content="快速开单" placement="left">
        <div class="menu-item"><i class="icon-kuaisukaidan"></i></div>
      </el-tooltip>
      <el-tooltip class="item" content="新增预约" placement="left">
        <div class="menu-item"><i class="icon-yuyue1"></i></div>
      </el-tooltip>
      <el-tooltip class="item" content="新增会员" placement="left">
        <div class="menu-item"><i class="icon-xinzenghuiyuan1"></i></div>
      </el-tooltip>
      <el-tooltip class="item" content="新增潜客" placement="left">
        <div class="menu-item"><i class="icon-qianke"></i></div>
      </el-tooltip>
      <div class="menu-coverd"></div>
    </div>
    <div class="footer">CopyRight © 登云 2015 - 2017</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/stylus/mixin'
.el-tooltip__popper.is-dark{background:#0e4a77}
  .footer
    position fixed
    left 0
    bottom 0
    width 100%
    height 60px
    padding-left 150px
    box-sizing border-box
    line-height 60px
    text-align center
    font-size 14px
    color #999
    background #31394a
    z-index 2
  .fixed-menu
    position fixed
    right 35px
    bottom 150px
    width 65px
    height 65px
    &:hover
      .menu-item:nth-child(2)
        transform translate(-35px, -85px)
      .menu-item:nth-child(3)
        transform translate(-90px, -35px)
      .menu-item:nth-child(4)
        transform translate(-90px, 35px)
      .menu-item:nth-child(5)
        transform translate(-35px, 85px)
      .menu-coverd
        bottom -80px
        height 220px
        width 220px
    .menu-item
      position absolute
      right 5px
      bottom 0px
      width 50px
      height 50px
      line-height 50px
      text-align center
      color #fff
      font-size 20px
      border-radius 50%
      background #28a9ff
      cursor pointer
      z-index 10
      transition all .3s 0s ease
    .menu-coverd
      position absolute
      right 0
      bottom 0px
      width 65px
      height 65px
    .menu-main
      position absolute
      right 0
      bottom 0px
      width 65px
      height 65px
      fixed-menu()
      cursor pointer
      z-index 11
    .menu-item:nth-child(2)
      text-indent 2px
    .menu-item:nth-child(3)
      transition-duration .1s
    .menu-item:nth-child(4)
      font-size 28px
      transition-duration .2s
    .menu-item:nth-child(5)
      transition-duration .3s
</style>
