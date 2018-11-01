<template>
  <div class="page"> 
    <div class="order-status">
      <div class="status" :class="orderStatus()">
        <span v-if="status == 0"><span class="icon-wait"></span><span>当前订单状态：待付款</span></span>
        <span v-if="status == 1"><span class="icon-finished"></span><span>当前订单状态：已完成</span></span>
        <span v-if="status == 2"><span class="icon-closed"></span><span>当前订单状态：已关闭</span></span>
      </div>
      <span class="ctrl-btn" v-if="status == 0"><router-link to="/main/payment/">去付款</router-link></span>
      <span class="ctrl-btn" v-if="status == 0">关闭订单</span>
      <span class="ctrl-btn"  @click="remarksDialog = true">备注订单</span>
    </div>
    <!-- 基本信息 -->
    <div class="info-block">
      <div class="title"><span class="icon-info"></span><span>基本信息</span></div>
      <ul class="data-table">
        <li class="thead">
          <div class="col-16">订单编号</div>
          <div>订单类型</div>
          <div>用户账号</div>
          <div>支付方式</div>
          <div>订单来源</div>
          <div>订单可得成长值</div>
          <div>折扣信息</div>
        </li>
        <li class="table-tr">
          <div class="col-16">201707196398345</div>
          <div>服务订单</div>
          <div>18000000000 <span class="ctrl-btn"></span></div>
          <div>现金</div>
          <div>订单来源</div>
          <div>200</div>
          <div>整单95折</div>
        </li>
      </ul>
    </div>
    <!-- 商品信息 -->
    <div class="info-block">
      <div class="title"><span class="icon-goods"></span><span>商品信息</span></div>
      <ul class="data-table goods">
        <li class="thead">
          <div>商品图片</div>
          <div class="col-20">商品名称</div>
          <div>价格</div>
          <div>数量</div>
          <div> 技师/营销顾问</div>
          <div>折后价</div>
        </li>
        <li class="table-goods">
          <div><img src="" alt="" class="pic"></div>
          <div class="col-20">商品名称商品名称商品</div>
          <div>18000000000 <span class="ctrl-btn"></span></div>
          <div>现金</div>
          <div><p>技师：小丽<br>营销顾问：张三</p></div>
          <div>￥200</div>
        </li>
        <li class="table-footer"><span>合计：</span> <span class="count">¥34.00</span></li>
      </ul>
    </div>
    <!-- 费用信息 -->
    <div class="info-block">
      <div class="title"><span class="icon-price"></span><span>费用信息</span></div>
      <ul class="data-table price-data">
        <li class="thead">
          <div>商品合计</div>
          <div>营销折扣</div>
          <div>会员权益折扣</div>
          <div>卡项抵扣</div>
          <div>应付总金额</div>
          <div>实付金额</div>
        </li>
        <li class="table-tr">
          <div>¥120.00</div>
          <div>-¥12.00</div>
          <div>-¥12.00</div>
          <div>-¥12.00</div>
          <div>¥120.00</div>
          <div>¥120.00</div>
        </li>
      </ul>
    </div>
    <!-- 操作信息 -->
    <div class="info-block">
      <div class="title"><span class="icon-price"></span><span>费用信息</span></div>
      <ul class="data-table record-data">
        <li class="thead">
          <div>操作者</div>
          <div>操作时间</div>
          <div class="col-12">订单状态</div>
          <div class="col-12">付款状态</div>
          <div class="col-remark">备注</div>
        </li>
        <li class="table-tr">
          <div>18011111111</div>
          <div>2017-07-19 15:43:23</div>
          <div class="col-12">已完成</div>
          <div class="col-12">已支付</div>
          <div class="col-remark">----</div>
        </li>
      </ul>
      <!-- 没有操作信息 -->
      <div class="no-data"><span class="icon-prompt"></span><span>当前无操作信息</span></div>
    </div>
    <!-- 添加备注弹窗 -->
    <el-dialog
      title="提示"
      :visible.sync="remarksDialog"
      width="600px"
    >
      <div class="remarks-dialog">
        <div>
          <span class="label"><span>*</span> 操作备注：</span>
          <textarea class="remarks-area"></textarea>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="remarksDialog = false">取 消</el-button>
        <el-button type="primary" @click="remarksDialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 0 - wait: 待付款  
      // 1 - finished:  已完成
      // 2 - closed: 已关闭
      status: '0', 
      remarksDialog: false
    }
  },
  methods: {
    // 订单状态
    orderStatus() {
      let className = ''
      if(this.status == 0){
        className = 'wait'
      }else if(this.status == 1){
        className = 'finished'
      }else if(this.status == 2){
        className = 'closed'
      }
      return className
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/stylus/mixin'
  .order-status
    height 80px
    padding 0 20px
    margin-bottom 30px
    line-height 80px
    text-align right
    background #fff
    .ctrl-btn
      display inline-block
      height 32px
      min-width 80px
      padding 0 12px
      margin-left 12px
      text-align center
      box-sizing border-box
      line-height 32px
      color #333
      vertical-align middle
      border 1px solid #eee
      border-radius 3px
      background #f8f8f8
      cursor pointer
      &:hover
        color #fff
        background $color-light
    .status
      float left
      height 80px
      span
        vertical-align middle
      .icon-finished
        font-size 26px
        padding-right 14px
      .icon-finished:before
        content:"\e670"
      .icon-closed
        font-size 22px
        padding-right 14px
      .icon-closed:before
        content:"\e633"
      .icon-wait
        font-size 26px
        padding-right 14px
      .icon-wait:before
        content:"\e6b5"  
    .wait
      color #ff7172
    .closed
      color #cccccc
    .finished
      color #39aafb
  .info-block
    margin-bottom 20px
    background #fff
    .title
      height 48px
      padding 0 18px
      line-height 48px
      color #333
      font-weight bold
      border 1px solid #e1e1e1
      span
        vertical-align middle
      .icon-info
        display inline-block
        margin-top -2px
        font-size 19px
        padding-right 8px
      .icon-info:before
        content:"\e615"
      .icon-price
        font-size 18px
        padding-right 8px
      .icon-goods
        font-size 16px
        padding-right 8px
      .icon-goods:before
        content:"\e73e"
    .data-table
      box-sizing border-box
      width 100%
      font-size 14px
      border 1px solid #e1e1e1
      border-top 0
      .thead
        height 50px
        color #062b7b
        border-bottom 1px solid #e1e1e1
        background #e7f5ff
      .table-tr
        min-height 50px
        line-height 50px
        color #333
        background #fff
      .table-tr + .table-tr
        border-top 1px solid #e1e1e1
      .table-goods
        height 120px
      .table-goods + .table-goods
        border-top 1px solid #e1e1e1
      div
        float left
        display flex
        width 14%
        height 100%
        padding 0 6px
        font-size 14px
        justify-content center
        box-sizing border-box
        align-items center
        text-align center
        no-wrap()
        p
          line-height 22px
      div + div
        margin-left -1px
        border-left 1px solid #e1e1e1
      .table-footer
        height 62px
        padding 0 30px
        line-height 62px
        text-align right
        border-top 1px solid #e1e1e1
        span
          vertical-align middle
          color #333
        .count
          font-size 18px
          color $color-light
      .col-12
        width 12%
      .col-16
        width 16%
      .col-20
        width 20%
      .col-remark
        width 43%
      .ctr-btn
        padding 0 3px
        color #39aafb
        cursor pointer
      .pic
        display inline-block
        width 100px
        height 100px
        border 1px solid #eee
    .goods > li > div
      width 16%
    .price-data
      div
        width 16.66%
    .record-data
      div
        width 16.66%
      .table-tr
        .col-remark
          padding 0 14px
          justify-content left
    .no-data
      display flex
      height 65px
      line-height 65px
      font-size $normal-font
      justify-content center
      align-items center
      color #999
      .icon-prompt
        font-size 16px
        padding-right 6px
      .icon-prompt:before
        content:"\e608"
  .remarks-dialog
    width 500px
    height 180px
    margin 0 auto
    font-size 14px
    color #333
    .label
      display inline-block
      vertical-align top
      line-height 35px
      span
        color red
        vertical-align middle
    .remarks-area
      width 370px
      height 130px
      padding 6px 14px
      line-height 20px
      color #333
      vertical-align top
      border 1px solid #e1e1e1
      border-radius 3px
      resize none
</style>
