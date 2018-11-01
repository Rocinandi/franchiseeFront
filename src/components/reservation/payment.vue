<template>
  <div class="page">
    <!-- 计算信息 -->
    <div class="onder-info" v-if="paySuccess == false">
      <div class="block">
        <div class="page-sub-title">
          <span>预约总览</span>
        </div>
        <div class="order-table">
          <div class="row">
            <span class="label">预约单号</span>
            <span class="value">R20180808092221035434783</span>
            <span class="label">会员编号</span>
            <span class="value">R20180808092221035434783</span>
          </div>
          <div class="row">
            <span class="label">预约时间</span>
            <span class="value">2018-08-08 13:15:00</span>
            <span class="label">会员姓名</span>
            <span class="value">王哈哈</span>
          </div>
          <div class="row">
            <span class="label">订单号</span>
            <span class="value">092221035434783</span>
            <span class="label">会员手机号</span>
            <span class="value">1388686184</span>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="page-sub-title">
          <span>订单支付</span>
        </div>
        <div class="payment-method">
          <el-tabs tab-position="left" style="height: 260px;">
            <el-tab-pane label="现金">
              <div class="payment-info">
                <div class="payment-info-inner">
                  <p><span>　　应付：<span class="money">￥777.00</span></span><span class="accounts-btn" @click="paySuccess = true">确认结算</span></p>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="会员余额">
              <div class="payment-info">
                <div class="payment-info-inner">
                  <p class="balance">当前余额：<span class="money">￥11777.00</span></p>
                  <p><span>　　应付：<span class="money">￥777.00</span></span><span class="accounts-btn">确认结算</span></p>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="刷卡">
              <div class="payment-info">
                <div class="payment-info-inner">
                  <p><span>　　应付：<span class="money">￥777.00</span></span><span class="accounts-btn">确认结算</span></p>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="微信">
              <div class="payment-info">
                <div class="payment-info-inner">
                  <p><span>　　应付：<span class="money">￥777.00</span></span><span class="accounts-btn">确认结算</span></p>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="支付宝">
              <div class="payment-info">
                <div class="payment-info-inner">
                  <p><span>　　应付：<span class="money">￥777.00</span></span><span class="accounts-btn">确认结算</span></p>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <!-- 支付成功 -->
    <div class="pay-success" v-if="paySuccess == true">
      <div class="block">
        <div class="icons"></div>
        <p class="title">订单支付成功</p>
        <p class="order-info"><span>支付方式：</span><span class="pay-method">余额支付</span></p>
        <p class="order-info"><span>支付金额：</span><span class="money">¥12312</span></p>
        <p class="btn-group">
          <span class="btns">进入首页</span>
          <span class="btns">查看订单</span>
          <span class="btns" @click="receipt = true">打印小票</span>
        </p>
      </div>
    </div>
    
    <!-- 打印小票弹框 -->
    <el-dialog
      title="打印小票"
      :visible.sync="receipt"
      width="350px"
      @close="receipt = false"
    >
      <div class="receipt-page">
        <h1 class="title">财务小票</h1>
        <table>
          <tr>
            <td align="left"><div class="thead">项目名称</div></td>
            <td><div class="thead">单价</div></td>
            <td><div class="thead">小计</div></td>
          </tr>
          <tr>
            <td align="left" >项目名称项目名称项目名称项目名称</td>
            <td >￥12200*10</td>
            <td >小计</td>
          </tr>
          <tr>
            <td align="left" >项目名称项目名称项目名称项目名称</td>
            <td >￥12200*10</td>
            <td >小计</td>
          </tr>
        </table>
        <div class="payment-info">
          <p>应付金额：￥11111.00</p>
          <p>折扣优惠：-￥250.00</p>
          <p>优惠券：-￥250.00</p>
          <p>实付金额：￥8888.00</p>
        </div>
        <div class="stroe-info">
          <p>北京心雨美容院广安门店</p>
          <p>地址：北京市东城区广安门内大街111号浪琴大厦底商</p>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="receipt = false">取 消</el-button>
        <el-button type="primary" @click="receipt = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      paySuccess: false,
      receipt: false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/stylus/mixin'
>>> .el-tabs__item
      height 45px
      line-height 45px
  .block
    font-size 14px
    color #666
    margin-bottom 20px
    background #fff
    .row
      display flex
      text-align center
      line-height 40px
      border-right 1px solid #e1e1e1
      border-bottom 1px solid #e1e1e1
      .label
        display inline-block
        width 160px
        border-left 1px solid #e1e1e1
        background #f1f1f1
      .value
        flex 1
  .payment-method
    width 700px
    padding 50px 0
    margin 0 auto
    font-size 14px
    .payment-info
      height 240px
      display flex
      align-items center
      text-align center
      font-size 16px
    .payment-info-inner
      width 500px
    .money
      display inline-block
      color #ff9c00
      min-width 120px
    .accounts-btn
      display inline-block
      height 40px
      padding 0 20px
      margin-left 40px
      line-height 40px
      font-size 12px
      color #fff
      border-radius 3px
      vertical-align middle
      cursor pointer
      background $color-light
    p
      line-height 55px
      text-align left
      padding-left 120px
  .pay-success
    .block
      height 400px
      padding-top 70px
      text-align center
      .icons
        width 72px
        height 72px
        margin 0 auto
        background url('~@/assets/image/icon-re-success.png') right bottom no-repeat
        background-size 72px
      .title
        line-height 55px
        font-size 18px
        color $color-light
      .order-info
        line-height 30px
        font-size 14px
        span
          display inline-block
          min-width 100px
          text-align right
        .pay-method
          color $color-light
          text-align left
        .money
          color #ffba00
          text-align left
      .btn-group
        margin-top 40px
        .btns
          display inline-block
          min-width 80px
          height 40px
          font-size 14px
          padding 0 10px
          line-height 40px
          color #999999
          text-align center
          border-radius 3px
          cursor pointer
          background #e1e1e1
          &:first-child
            color #fff
            background $color-light
        .btns + .btns
          margin-left 5px
  .receipt-page
    height 500px
    font-size 14px
    text-align center
    overflow auto
    .title
      padding-bottom 20px
      color #333
      border-bottom 1px dashed #e1e1e1 
    .thead
      display inline-block
      width 100px
      font-weight bold
    td
      padding 10px 0
    .payment-info
      padding 10px
      margin-top 10px
      border-top 1px dashed #e1e1e1 
      p
        line-height 30px
        text-align right
      border-bottom 1px dashed #e1e1e1 
    .stroe-info
      padding 15px 20px
      p
        text-align left
        line-height 30px
</style>
