<template>
  <div class="page"> 
    <div class="head">
      <div class="main">
        <span>LOGO</span>
        <router-link tag="a" to="/login" class="tologin">已有账号，<span style="color:#45abf8">立即登录</span></router-link>
      </div>
    </div>
    <div class="main content" v-if="!registerSuccess">
      <div class="title">新用户注册</div>
      <div class="register-form">
        <div class="form-ctrl">
          <label class="label" for="brandname" ><span>*</span>品牌名称：</label>
          <input type="text" class="form-input" id="brandname">
        </div>
        <div class="form-ctrl">
          <label class="label"><span>*</span>品牌logo：</label>
          <div class="uparea"><input type="file"></div>
        </div>
        <div class="form-ctrl">
          <label class="label"><span>*</span>主营类别：</label>
          <el-select v-model="engageVla" placeholder="请选择">
            <el-option
              v-for="item in engage"
              :key="item.label"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="form-ctrl">
          <label class="label" >所在国家：</label>
          <el-select v-model="countryVal" placeholder="请选择">
            <el-option
              v-for="item in country"
              :label="item.label"
              :key="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="form-ctrl">
          <label class="label" for="website">官网地址：</label>
          <input type="text" class="form-input" id="website">
        </div>
        <div class="form-ctrl">
          <label class="label" for="serviceTel">客服电话：</label>
          <input type="text" class="form-input" id="serviceTel">
        </div>
        <div class="form-ctrl">
          <label class="label" for="contacts">联系人姓名：</label>
          <input type="text" class="form-input" id="contacts">
        </div>
        <div class="form-ctrl">
          <label class="label" for="contactsTel">联系人电话：</label>
          <input type="text" class="form-input" id="contactsTel">
        </div>
        <div class="form-ctrl">
          <label class="label" for="contactsTel"><span>*</span>会员跨店消费：</label>
          <el-radio v-model="crossPay" label="1">允许</el-radio>
          <el-radio v-model="crossPay" label="2">不允许</el-radio>
        </div>
        <div class="submit-btn">立即注册</div>
      </div>
    </div>
    <div class="main content" v-if="registerSuccess">
      <div class="re-success">
        <div class="icons"></div>
        <p>恭喜注册成功</p>
        <p>请妥善保管您的账户信息</p>
        <span class="btn" @click="toSetPage()">进入系统</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerSuccess: false,
      form: {
        protocol: '1',
      },
      engage: [{
        value: '1',
        label: '综合'
      }, {
        value: '1',
        label: '美容院'
      }, {
        value: '3',
        label: '美发店'
      }, {
        value: '4',
        label: '美甲店'
      }, {
        value: '5',
        label: '按摩院'
      },{
        value: '5',
        label: '足疗店'
      }],
      engageVla: '',
      country:[{
        value: '1',
        label: '中国大陆'
      }],
      countryVal: '',
      crossPay: '1'
    }
  },
  methods: {
    toSetPage() {
      this.$router.push({
        path: `/main/setting`,
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.el-input--suffix .el-input__inner{padding-right: 24px;}
.el-radio{margin-left: 14px !important;}
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
      width 500px
      margin 0 auto
      padding 70px 0
      text-align left 
      font-size 14px
      .label 
        display inline-block
        width 180px
        text-align right
        span
          font-size 14px
          color #ff0000
      .form-ctrl
        line-height 40px
        margin-bottom 24px
        .uparea
          position relative
          display inline-block
          width 80px
          height 80px
          vertical-align top
          background url('~@/assets/image/upload-bg.jpg')
          cursor pointer
          overflow hidden
          input 
            width 80px
            height 80px
            opacity 0
        .form-input
          width 190px
          padding 0 10px
          height 36px
          font-size 14px
          color #45abf8
          border 1px solid #dcdfe6
          &:focus
            border-color #45abf8  
      .protocol
        color #45abf8
        font-size 14px
        cursor pointer
      .submit-btn
        width 310px
        height 40px
        margin -10px auto 0
        line-height 40px
        color #fff
        font-size 14px
        text-align center
        border-radius 3px
        background #28a9ff
        cursor pointer
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
