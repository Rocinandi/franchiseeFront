<template>
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
      <span class="personal"><i class="icon-huiyuan"
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
</template>

<script>
export default {
  data() {
    return {
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
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/stylus/mixin';
.el-dropdown{color:$color-light;vertical-align: middle;cursor pointer}
.el-dropdown-menu{min-width: 140px;padding:0;}
.el-icon-arrow-down{margin-left: 10px;color: #383838;font-size: 15px;font-weight: bold;}
.el-dropdown-menu .el-dropdown-menu__item{font-size:12px; line-height: 40px;text-align:center;border-top:1px solid rgba(228, 228, 228, 1)}
.el-dropdown-menu .el-dropdown-menu__item--divided{margin-top: 0;color:#478af3}
.el-dropdown-menu .el-dropdown-menu__item--divided:hover{background-color:#fff} 
.el-dropdown-menu__item--divided:before{display:none}
.lang .el-dropdown{min-width: 140px;color:#333;}
.header
  position relative
  height 50px
  line-height 50px
  border 1px solid rgba(228, 228, 228, 1)
  font-size $normal-font
  text-align center
  background #fff
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
    font-size 18px
    color #262b2f
    .personal
      display inline-block
      margin-left 20px
      cursor pointer
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
      font-size $small-font
      line-height 36px
      text-align left
      color $color-base
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
      color $color-base
      border-bottom 1px solid rgba(228, 228, 228, 1)
      .set-btn
        float right
        margin-left 25px
        color $color-light 
        cursor pointer

</style>

