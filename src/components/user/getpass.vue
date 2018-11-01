<template>
  <div class="page"> 
    <div class="head">
      <div class="main">
        <span>LOGO</span>
        <router-link tag="a" to="/login" class="tologin"><i class="el-icon-arrow-left"></i>返回登录</router-link>
      </div>
    </div>
   <div class="main content">
      <div class="title">重置密码</div>
      <div class="steps" v-if="step < '3'">
        <el-steps :active="step" finish-status="success" align-center>
          <el-step title="填写账户名"></el-step>
          <el-step title="验证身份"></el-step>
          <el-step title="设置新密码"></el-step>
          <el-step title="完成"></el-step>
        </el-steps>
      </div>
      <!-- 第一步 -->
      <div class="form-area" v-if="step=='0'">
        <div class="form-ctrl">
          <label for="telphone" class="label">手机号码：</label>
          <input type="text" class="form-input" id="telphone" v-model="telphone">
        </div>
        <div class="form-ctrl">
          <label for="verifyPic" class="label">验证码：</label>
          <input type="text" class="form-input" id="verifyPic">
        </div>
        <div class="form-ctrl">
          <img :src="picCode" alt="" class="pic-code">
          <span class="label-pic">看不清？<span class="get-pic">换一张</span></span>
        </div>
        <div class="sub-btn" @click="next()">下一步</div>
      </div>
      <!-- 第二步 -->
      <div class="form-area" v-if="step=='1'">
        <div class="form-ctrl">
          <label class="label">手机号码：</label>
          <input type="text" class="form-input" id="telphone" disabled="disabled" v-model="telphone">
          <span class="tips">若该手机号已无法使用请联系客服</span>
        </div>
        <div class="form-ctrl">
          <label for="verifyPic" class="label">验证码：</label>
          <input type="text" class="form-input" id="verifyPic">
          <span class="verifyCode">获取验证码</span>
        </div>
        <div class="sub-btn" @click="next()">下一步</div>
      </div>
      <!-- 第三步 -->
      <div class="form-area" v-if="step=='2'">
        <div class="form-ctrl">
          <label for="password" class="label">新的密码：</label>
          <input type="password" class="form-input" id="password" >
        </div>
        <div class="form-ctrl">
          <label for="repassword" class="label">重复密码：</label>
          <input type="password" class="form-input" id="repassword">
        </div>
        <div class="sub-btn" @click="next()">下一步</div>
      </div>
      <!-- 重置成功 -->
      <div class="re-success" v-if="step == '3'">
        <div class="icons"></div>
        <p>密码重置成功</p>
        <p>下次请使用新密码进行登录</p>
        <span class="btn" @click="toHomePage()">进入系统</span>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      telphone:'',
      step: 0,
      picCode: 'https://static.idengyun.com/staticWebRoot/static/images/icon_bottom_store_n.png'
    }
  },
  methods: {
    next() {
      this.step++ 
    },
    toHomePage() {
      this.$router.push({
        path: `/main/overview`,
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
>>> .el-steps
      .el-step__head.is-success
        .el-step__line
          background-color #45abf8
      .el-step__title.is-process
        color #999999
      .el-step__head.is-process
        .el-step__icon-inner
          color #fff
        .el-step__icon.is-text
          border-color #45abf8
          background #45abf8
      .el-step__icon.is-text
        border-color #e1e1e1
        background #e1e1e1
        color #999
      .el-step.is-horizontal .el-step__line
        top 18px
        height 3px
      .el-step__head.is-success
        color #45abf8
        border-color #45abf8
        .el-step__icon
          font-size 20px
          color #fff
          border-color #45abf8
          background #45abf8
      .el-step__title
        font-size 14px
        font-weight normal
      .el-step__title.is-success
        color #45abf8
      .el-step__icon
        width 35px
        height 35px
      .el-step__title.is-wait
        color #999
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
    color #45abf8
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
    .steps
      width 870px
      padding 70px 0 45px
      margin 0 auto
  .form-area
    width 300px
    margin 0 auto
    padding-bottom 70px
    .form-ctrl
      position relative
      margin-bottom 20px
      .label
        position absolute
        width 120px
        height 40px
        line-height 40px
        text-align right
        font-size 14px
        color #333
        left -125px
      .pic-code
        width 140px
        height 40px
      .label-pic
        padding-left 6px
        vertical-align top
        line-height 40px
        color #999
        font-size 14px
      .get-pic
        vertical-align top
        color #45abf8
        cursor pointer
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
      .tips
        position absolute
        top 0
        right -310px
        line-height 40px
        color #999
        font-size 14px
        width 300px
    .form-input
      width 280px
      padding 0 10px
      height 38px
      font-size 14px
      color #45abf8
      border 1px solid #dcdfe6
      &:focus
        border-color #45abf8
      &:disabled
        background #ededed
        color #999999
        opacity 1
        cursor no-drop
    .sub-btn
      display inline-block
      width 300px
      height 40px
      margin-top 12px
      line-height 40px
      color #fff
      font-size 16px
      border-radius 3px
      cursor pointer
      text-align center
      background #45abf8
  .re-success
    height 400px
    padding-top 85px
    text-align center
    background #fff
    .icons
      width 70px
      height 70px
      margin 0 auto
      background url('~@/assets/image/icon-re-success.png') center no-repeat
      background-size 70px
    p:nth-child(2)
      color #45abf8
      font-size 18px
      line-height 45px
      font-weight bold 
    p:nth-child(3)
      font-size 14px
      color #333333
      line-height 20px  
    .btn
      display inline-block
      width 160px
      height 40px
      margin-top 12px
      line-height 40px
      color #fff
      font-size 16px
      border-radius 3px
      cursor pointer
      background #45abf8
</style>
