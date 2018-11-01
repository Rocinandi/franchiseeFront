<template>
  <div> 
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
    <!--  -->
    <div class="main">
      <div class="head">
        <div class="header">
          <div class="p-left">
            <img src="https://static.idengyun.com/staticWebRoot/static/images/user.png" alt="" class="logo">
            <!-- 选择门店下拉框 -->
            <el-dropdown @command="handleCommand" trigger="click">
              <span class="el-dropdown-link color-light">
                {{this.name}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(item,index) in lists" :key="(item,index)" :command="item">{{item.value}}</el-dropdown-item>
                <el-dropdown-item command="n" divided class="color-light"> <i class="el-icon-plus"></i> 新增门店</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <!-- 切换语言 -->
          <div class="lang">
            <el-dropdown @command="changeLang" trigger="click" >
              <span class="el-dropdown-link">
                {{lang}}
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(item,index) in languages" :key="(item,index)" :command="item">{{item.name}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <!--  -->
          <div class="right-menu">
            <router-link tag="a" class="menu-item" to="/main/search"><i class="icon-fangdajing"></i></router-link>
            <span class="personal"><i class="icon-wode"
              @click="showPerMenu()"
            ></i></span>
            <!-- 个人设置弹框 -->
            <div class="per-set" 
              v-show="perSetPanel"
              @mouseleave="hidePerMenu()"
            >
              <p class="per-set-head">
                <span>账户信息</span>
                <span class="set-btn" @click="goAccountSet()">安全退出</span>
                <span class="set-btn" @click="goLogout()">账户设置</span>
              </p>
              <p><span class="per-inof-label">用户姓名：</span><span>张三</span></p>
              <p><span class="per-inof-label">所在门店：</span><span>北京心语美容院</span></p>
              <p><span class="per-inof-label">登录地区：</span><span>广东省深圳市 (IP：183.14.135.1)</span></p>
              <p><span class="per-inof-label">登陆时间：</span><span>2018-07-03 14:36:21 </span></p>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
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
  name: 'App',
  components: {
  },
  data () {
    return {
      radio: '1',
      perSetPanel: false,
      name: "北京心雨美容院总店",
      lang: "中文",
      lists: [
        {
          value: "总店",
          label: "1"
        },
        {
          value: "北京心雨美容院一号店",
          label: "2"
        },
        {
          value: "北京心雨美容院二号店",
          label: "3"
        }
      ],
      languages: [
        {
          id: "1",
          name: "中文"
        },
        {
          id: "2",
          name: "English"
        }
      ]
    };
  },
  methods: {
    handleCommand(command) {
      if (command == "n") {
        this.$message("跳转到新增门店页面");
        return;
        this.$router.push({
          path: "路径"
        });
      } else {
        this.name = command.value;
      }
    },
    changeLang(lag) {
      this.$message("这个语言的编号" + lag.id);
      this.lang = lag.name;
    },
    showPerMenu() {
      this.perSetPanel = true
    },
    hidePerMenu() {
      this.perSetPanel = false
    },
    goAccountSet() {
      conosle.log('跳转设置页面')
    },
    goLogout() {
      conosle.log('登出操作！')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~@/assets/stylus/reset"
.menu
  position fixed
  left 0
  top 0
  width 150px
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
.main
  padding 70px 40px 80px 190px
  background #f6f6f6
  .head
    position fixed
    left 150px
    top 0 
    width calc(100% - 150px)
    background #fff
    z-index 10
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
    right 5px
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
      transition all .1s 0s ease
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
      background: url('~@/assets/image/icon-sbumenu.png') right bottom no-repeat
      background-size 65px
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

.header
  position relative
  height 50px
  line-height 50px
  border 1px solid rgba(228, 228, 228, 1)
  font-size 14px
  text-align center
  background #fff
  .el-dropdown
    color #39aafb
    vertical-align middle
    cursor pointer
  .el-icon-arrow-down
    margin-left: 10px 
    color: #383838
    font-size: 15px
    font-weight: bold
  .lang 
    .el-dropdown
      min-width: 140px
      color:#333
  .p-left
    position absolute
    left 20px
    top 0
    height 40px
  .logo
    display inline-block
    width 30px
    height 30px
    vertical-align middle
    border-radius 50%
  .lang
    width 200px
    text-index -2em
    margin 0 auto
  .right-menu
    position absolute
    top 0
    right 35px
    height 50px
    font-size 20px
    color #272a2f
    .personal
      display inline-block
      margin-left 10px
      cursor pointer
      font-size 22px
  .per-set
    position fixed
    right 10px
    top 65px
    width 420px
    height 220px
    padding 0 15px 15px
    box-sizing border-box
    background #fff
    border 1px solid rgba(228, 228, 228, 1)
    border-radius 3px
    &:after
      content ''
      position absolute
      right 20px
      top -10px
      width 0
      height 0
      border-width:0 10px 10px;
      border-style solid
      border-color transparent transparent #fff
      z-index 10
    p
      font-size 12px
      line-height 36px
      text-align left
      color #343d50
      .per-inof-label
        &:before
          content '·'
          padding-left 1em
          padding-right 5px
          color #999
    .per-set-head
      height 45px
      margin-bottom 10px
      line-height 45px
      color #343d50
      border-bottom 1px solid rgba(228, 228, 228, 1)
      .set-btn
        float right
        margin-left 25px
        color #39aafb
        cursor pointer
.el-dropdown
  color $color-light
  vertical-align middle
  cursor pointer
.el-dropdown-menu
  min-width 160px
  padding:0
.el-icon-arrow-down
  margin-left 10px
  color #383838
  font-size 15px
  font-weight bold
.el-dropdown-menu .el-dropdown-menu__item
  font-size 12px
  line-height 40px
  text-align center
  border-top 1px solid rgba(228, 228, 228, 1)
.el-dropdown-menu .el-dropdown-menu__item--divided
  margin-top 0
  color #478af3
.el-dropdown-menu .el-dropdown-menu__item--divided:hover
  background-color #fff
.el-dropdown-menu__item--divided:before
  display none
.lang .el-dropdown
  min-width 140px
  color #333
</style>
