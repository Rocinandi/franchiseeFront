<template>
  <div class="page"> 
    <div class="head">
      <div class="main">LOGO</div>
    </div>
    <div class="content">
      <div class="main">
        <div class="login-form">
          <div class="login-top">用户登录</div>
          <div class="login-content">
            <div class="form-ctrl">
              <label class="icon-user icons" for="username"></label>
              <input type="text" class="form-input" id="username" placeholder="请输入手机号码">
            </div>
            <div class="form-ctrl">
              <label class="icon-pwd icons" for="passwrod"></label>
              <input type="password" class="form-input" id="passwrod" placeholder="请输入登录密码">
            </div>
            <div class="submit-btn">登录</div>
            <div class="tool-bar">
              <a href="" class="getpass">忘记密码</a>
              <a href="" class="registered">新用户注册</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  .main
    position relative
    max-width 1366px
    margin 0 auto
  .head
    height 80px
  .content
    height 540px
    background url('~@/assets/image/login-bg.jpg') center no-repeat
    background-size auto 540px
    .login-form
      position absolute
      top 80px
      right 100px
      width 380px
      height 390px
      background rgba(255,255,255,.3)
      .login-top
        line-height 64px
        text-align center
        font-size 16px
        color #fff
        background rgba(255,255,255,.12)
      .login-content
        width 264px
        margin 34px auto 0
        .form-ctrl
          position relative
          height 40px
          padding-left 40px
          margin-bottom 20px
          background #fff
          .icons
            position absolute
            left 0
            top 0
            width 40px
            height 40px
            background-size 22px
            background-repeat no-repeat
            background-position center
          .icon-user
            background-image: url('~@/assets/image/icon-user.png') 
          .icon-pwd
            background-image: url('~@/assets/image/icon-pwd.png') 
          .form-input
            width 215px
            height 40px
            font-size 14px
            color #28a9ff
        .submit-btn
          display inline-block
          width 100%
          height 40px
          margin-top 10px
          line-height 40px
          color #fff
          font-size 14px
          text-align center
          background #28a9ff
          cursor pointer
        .tool-bar
          height 50px
          line-height 50px
          font-size 14px
          .getpass
            color #fff
          .registered
            float right
            color #28a9ff
</style>
