<template>
  <div class="page"> 
    <div class="head">
      <div class="main">
        <span>LOGO</span>
        <router-link tag="a" to="/login" class="tologin">已有账号，<span style="color:#45abf8">立即登录</span></router-link>
      </div>
    </div>
    <div class="main content">
      <div class="title">新用户注册</div>
      <div class="register-form">
        <div class="form-ctrl">
          <label for="telphone" class="icons icon-tel"></label>
          <input type="text" class="form-input" id="telphone" placeholder="请填写手机号" maxlength="11">
        </div>
        <div class="form-ctrl">
          <label for="message" class="icons icon-msg"></label>
          <input type="text" class="form-input" id="message" maxlength="6" placeholder="请填写验证码">
          <span class="verifyCode">获取验证码</span>
          <!-- <span class="verifyCode">重新发送(60)</span> -->
        </div>
        <div class="form-ctrl">
          <label for="password" class="icons icon-pwd"></label>
          <input type="password" class="form-input" id="password" placeholder="设置6至20位登录密码">
        </div>
        <div class="form-ctrl">
          <label for="rpassword" class="icons icon-pwd"></label>
          <input type="password" class="form-input" id="rpassword" placeholder="请再次填密码">
        </div>
        <div class="form-ctrl">
          <el-radio v-model="form.protocol" label="1">已阅读并同意</el-radio>
          <span class="protocol">《用户服务协议》</span>
        </div>
        <div class="submit-btn" @click="handleSubmit()">下一步</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        protocol: '1',
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$router.push({
        path: `/registebrand`,
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.el-radio__label{color: #999 !important}
  .page
    min-height 100vh
    overflow auto
    background #f6f6f6
  .main
    position relative
    max-width 1130px
    margin 0 auto
  .head
    height 80px
    line-height 80px
    border-bottom 1px solid #e5e5e5
    background #fff
  .tologin
    float right
    font-size 16px
    color #333
  .content
    margin-top 20px
    background #fff
    .title 
      height 50px
      line-height 50px
      border-bottom 1px solid #e5e5e5
      color #45abf8
      font-size 14px
      text-indent 20px
    .register-form
      width 310px
      margin 0 auto
      padding 70px 0 
      .form-ctrl
        position relative
        width 308px
        height 38px
        margin-bottom 24px
        .verifyCode
          position absolute
          right 0
          top 0
          height 40px
          line-height 40px
          width 95px
          text-align center
          color #45abf8
          cursor pointer
        .form-input
          width 267px
          height 38px
          padding-left 40px
          font-size 14px
          color #45abf8
          border 1px solid #eee
          &:focus
            border-color #45abf8 
        .icons
          position absolute
          left 0
          top 0
          width 40px
          height 40px
          background-size 22px
          background-repeat no-repeat
          background-position center
        .icon-tel
          background-image: url('~@/assets/image/icon-tel.png') 
        .icon-pwd
          background-image: url('~@/assets/image/icon-pwd2.png') 
        .icon-msg
          background-image: url('~@/assets/image/icon-msg.png') 
      .protocol
        color #45abf8
        font-size 14px
        cursor pointer
      .submit-btn
        width 100%
        height 40px
        margin-top -20px
        line-height 40px
        color #fff
        font-size 14px
        text-align center
        background #28a9ff
        border-radius 3px
        cursor pointer   
</style>
