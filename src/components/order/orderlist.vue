<template>
  <div class="page"> 
    <div class="tab-bar">
      <ul class="page-title">
        <li :class="tabIndex== '0' ? 'active' : '' " @click="tabChange(0)">全部订单（9999）</li>
        <li :class="tabIndex== '1' ? 'active' : '' " @click="tabChange(1)">代付款（9999）</li>
        <li :class="tabIndex== '2' ? 'active' : '' " @click="tabChange(2)">已完成（9999）</li>
        <li :class="tabIndex== '3' ? 'active' : '' " @click="tabChange(3)">已关闭（9999）</li>
      </ul>     
    </div>

    <div class="data-area">
      <div class="page-sub-title">
        <span>订单列表</span>
        <div class="align-right">
          <div class="search-area">
            <input type="text" class="search-input" placeholder="输入订单编号/会员账号">
            <span class="icon-search"></span>
          </div>
          <!-- 订单类型 -->
          <el-select v-model="orderType" class="select" placeholder="选择订单类型">
            <el-option
              v-for="item in orderTypeOptions"
              :key="item.label"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <!-- 所属门店 -->
          <el-select v-model="store" class="select" placeholder="选择所属门店">
            <el-option
              v-for="item in storeOptions"
              :key="item.label"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <!-- 下单时间 -->
          <el-select v-model="postTime" class="select" placeholder="选择下单时间">
            <el-option
              v-for="item in postTimeOptions"
              :key="item.label"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <!-- 支付方式 -->
          <el-select v-model="paymentType" class="select" placeholder="选择支付方式">
            <el-option
              v-for="item in paymentTypeOptions"
              :key="item.label"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <!-- 订单来源 -->
          <el-select v-model="orderSource" class="select" placeholder="选择订单来源">
            <el-option
              v-for="item in orderSourceOptions"
              :key="item.label"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          
        </div>
      </div>
      <!-- 表格 -->
      <ul class="data-table">
        <li class="thead">
          <div class="col-12">订单编号</div>
          <div class="col-12">提交时间</div>
          <div>顾客手机号</div>
          <div>订单金额</div>
          <div>支付方式</div>
          <div>订单来源</div>
          <div>订单状态</div>
          <div class="col-btn">操作</div>
        </li>
        <li class="table-tr">
          <div class="col-12">31231313122</div>
          <div class="col-12">2018-08-08 21:15</div>
          <div>15134443234</div>
          <div>￥1232.00</div>
          <div>现金</div>
          <div >线下预约</div>
          <div >已完成</div>
          <div class="col-btn">
            <router-link tag="a" class="ctrl-btn" to="/main/order/detail/12322" target="_blank">查看详情</router-link>
          </div>
        </li>
        <li class="table-tr">
          <div class="col-12">31231313122</div>
          <div class="col-12">2018-08-08 21:15</div>
          <div>15134443234</div>
          <div>￥1232.00</div>
          <div>现金</div>
          <div >线下预约</div>
          <div >代付款</div>
          <div class="col-btn">
            <router-link tag="a" class="ctrl-btn" to="/main/payment/" target="_blank">付款</router-link>
            <span class="ctrl-btn">取消订单</span>
            <router-link tag="a" class="ctrl-btn" to="/main/order/detail/12322" target="_blank">查看详情</router-link>
          </div>
        </li>
      </ul>
    </div>
    <!-- 分页 -->
    <div class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1, //分页
      tabIndex: 0,
      orderType: '1', // 订单类型
      orderTypeOptions: [{ // 订单类型list
        value: '1',
        label: '全部订单类型'
      }, {
        value: '2',
        label: '服务订单'
      }, {
        value: '3',
        label: '卡项订单'
      },{
        value: '4',
        label: '产品订单'
      }],
      store: '1', // 所属门店
      storeOptions: [{ // 门店list
        value: '1',
        label: '全部门店'
      }, {
        value: '2',
        label: '门店1'
      }, {
        value: '3',
        label: '门店2'
      }],
      postTime: '1', //提交时间
      postTimeOptions: [{ //提交时间list
        value: '1',
        label: '全部提交时间'
      }, {
        value: '2',
        label: '今日'
      }, {
        value: '3',
        label: '昨日'
      },{
        value: '4',
        label: '7天内'
      },{
        value: '5',
        label: '15天内'
      },{
        value: '6',
        label: '30天内'
      }],
      paymentType: '1', //支付方式
      paymentTypeOptions: [{
        value: '1',
        label: '全部支付方式'
      },{
        value: '2',
        label: '现金'
      }, {
        value: '3',
        label: '余额'
      }, {
        value: '4',
        label: '刷卡'
      },{
        value: '5',
        label: '微信'
      },{
        value: '6',
        label: '支付宝'
      }],
      orderSource: '1',
      orderSourceOptions:[{
        value: '1',
        label: '全部来源'
      },{
        value: '2',
        label: '线下预约',
      }]
    }
  },
  methods: {
    tabChange(index) {
      this.tabIndex = index
    },
    handleCurrentChange(val) { //分页
      console.log(`第 ${val} 条`);
      console.log(`currentPage： ${this.currentPage} `);
    },
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/stylus/mixin'
>>> .el-input__inner
      width 130px
      height 30px
      padding-right 25px
      line-height 30px
      border-radius 3px
      border 1px solid #e1e1e1
    .el-select
      margin-right 8px
  .tab-bar
    height 46px
    font-size 14px
    color #333
    background #fff
    .page-title
      float left
    .align-right 
      float right
      height 30px
      padding 8px 0
  .data-area
    margin-top 20px
    background #fff
    .page-sub-title
      padding-right 2px
    .align-right
      float right
      text-align right
    .add-btn
      display inline-block
      height 30px
      padding 0 10px
      line-height 30px
      border-radius 3px
      color #fff
      background $color-light
    .search-area
      position relative
      display inline-block
      width 190px
      height 32px
      padding-right 40px
      margin-right 10px
      line-height 30px
      border 1px solid #e1e1e1
      border-radius 3px
      box-sizing border-box
      .search-input
        height 28px
        width 150px
        padding 0 10px
        color #333
      .icon-search
        position absolute
        right 0
        top 0
        width 30px
        height 30px
        line-height 30px
        text-align center
        font-size 18px
        color $color-light
      .icon-search:before
        content:"\e929"
  .data-table
    box-sizing border-box
    width 100%
    font-size 14px
    border 1px solid #e1e1e1
    .thead
      height 50px
      color #062b7b
      background #e7f5ff
    .table-tr
      height 50px
      line-height 50px
      font-size 12px
      color #333
      background #fff
    .table-tr + .table-tr
      border-top 1px solid #e1e1e1
    div
      float left
      height 50px
      width 12%
      padding 0 6px
      box-sizing border-box
      line-height 50px
      text-align center
      no-wrap()
    div + div
      margin-left -1px
      border-left 1px solid #e1e1e1
    .col-12
      width 12%
    .col-btn
      width 16%
    .ctrl-btn
      padding 0 3px
      color #39aafb
      cursor pointer
    .ordertime
      height 20px
      line-height 30px
    .overtime
      height 30px
      line-height 30px
      color #ff0000  
  .pagination
    padding 20px 10px
    text-align right
    background #fff
</style>
