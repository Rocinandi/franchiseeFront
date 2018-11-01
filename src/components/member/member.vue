<template>
  <div class="page"> 
    <div class="page-sub-title">
      <span>会员列表</span>
      <span class="ctrl-btn" >新增会员</span>
      <router-link tag="span" class="ctrl-btn" to="/main/member/import/">导入会员</router-link>
      <span class="ctrl-btn" >导出会员</span>
      <div class="search-area">
        <input type="text" class="search-input" placeholder="输入会员姓名／会员账号">
        <span class="icon-search"></span>
      </div>
    </div>
    <!-- 表格 -->
    <ul class="data-table">
      <li class="thead">
        <div class="col-sort">会员编号<span class="sort-btn"></span></div>
        <div class="col-info">会员信息</div>
        <div class="col-sort">成长值<span class="sort-btn"></span></div>
        <div>账户启用状态</div>
        <div>操作</div>
      </li>
      <li class="table-tr" v-for="item in list" :key="item">
        <div class="col-sort">15023500943</div>
        <div class="col-info">
          <ul class="user-info">
            <li>
              <img src="" alt="" class="avatar">
              <span class="mb-typs">普通会员</span>
            </li>
            <li>
              <p class="name">张三</p>
              <p class="telphone">15023500943</p>
            </li>
          </ul>
          <!-- 弹层 -->
          <ul class="popover">
            <li>
              <span>会员编号</span><span>123123132</span>
              <span>性别</span><span>女</span>
            </li>
            <li>
              <span>手机号</span><span>123123132</span>
              <span>微信号</span><span>12312</span>
            </li>
            <li>
              <span>生日</span><span>1234-12-12</span>
              <span>添加时间</span><span>1234-12-12 12:12</span>
            </li>
            <li>
              <span>消费总金额</span><span>￥1234</span>
              <span>消费次数</span><span>1232</span>
            </li>
            <li>
              <span>预约总数</span><span>234</span>
              <span>成长值</span><span>1232</span>
            </li>
            <li>
              <span>卡项总数</span><span>234</span>
              <span>次卡剩余</span><span>1232</span>
            </li>
            <li>
              <span>充值卡剩余</span><span>￥34</span>
              <span>折扣卡剩余次数</span><span>1232</span>
            </li>
          </ul>
        </div>
        <div class="col-sort">12312</div>
        <div>
          <el-switch
            name="item"
            active-color="#39aafb"
            inactive-color="#e1e1e1"
            active-value="1"
            inactive-value="0"
            @change="switchChange($event,item)"
          >
          </el-switch>
        </div>
        <div>
          <router-link tag="a" class="btns" to="/main/member/info/" target="_blank">详情</router-link>
          <a class="btns">编辑</a>
          <a class="btns">开单</a>
        </div>
      </li>
    </ul>
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
      list: ['1','2','3','4','5','6'],
      currentPage: 1,
    }
  },
  methods: {
    handleCurrentChange(val) { //分页
      console.log(`第 ${val} 条`);
      console.log(`currentPage： ${this.currentPage} `);
    },
    switchChange(val, id) { //val 开关对应值 0 1
      console.log(val, id)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/stylus/mixin'
.page
  background #fff
  .page-sub-title
    height 30px
    padding 10px 12px
    line-height 30px
  .ctrl-btn
    float right
    height 28px
    min-width 60px
    padding 0 10px
    margin-left 20px
    line-height 28px
    text-align center
    border-radius 3px
    font-weight normal
    border 1px solid #39aafb
    color #39aafb
    background #fff
    cursor pointer
    &:hover
      color #fff
      border-color $color-light
      background $color-light
  .search-area
    position relative
    float right
    width 215px
    padding-right 40px
    border 1px solid #e1e1e1
    border-radius 3px
    box-sizing border-box
    .search-input
      height 28px
      width 170px
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
    border 1px solid #e1e1e1
    .thead
      height 65px
      color #062b7b
      background #e7f5ff
      div
        height 65px
        line-height 65px
    .table-tr
      height 115px
      line-height 114px
      font-size 14px
      color #333
      background #fff
      div
        height 115px
    .table-tr + .table-tr
      border-top 1px solid #e1e1e1
    div
      float left
      width 20%
      display flex
      padding 0 6px
      justify-content center
      align-items center
      text-align center
      box-sizing border-box
      no-wrap()
    .col-sort
      width 18%
    .col-info
      position relative
      width 24%
      overflow visible
      .popover
        position absolute
        left 100%
        top 2px
        width 600px
        height 286px
        margin-left 10px
        border 1px solid #e1e1e1
        border-radius 3px
        background #fff
        overflow visibility
        transform translate(10px,0)
        opacity 0
        z-index -10
        transition all .5s .2s ease
        &:before
          content ''
          position absolute
          left -15px
          top 30px
          width 0
          height 0 
          border-top 12px solid transparent
          border-bottom 12px solid transparent 
          border-right 15px solid #e7f5ff
          z-index 10
        li
          height 40px
          line-height 40px
          border-bottom 1px solid #e1e1e1
          font-size 12px
          span
            float left
            margin-left -1px
            border-left 1px solid #e1e1e1
          span:nth-child(1)
            width 120px
            background #e7f5ff
          span:nth-child(2)
            width 180px
          span:nth-child(3)
            width 120px
            background #e7f5ff
          span:nth-child(4)
            width 180px
      &:hover
        .popover
          z-index 10
          opacity 1
          transform translate(0,0)
    .table-tr:nth-last-child(-n+2):not(:nth-child(-n + 3))
      .popover
        top -180px
        &:before
          top 180px
    div + div
      margin-left -1px
      border-left 1px solid #e1e1e1
    .sort-btn
      display inline-block
      width 22px
      height 16px
      vertical-align middle
      cursor pointer
      background url('~@/assets/image/icon-sort.png') center no-repeat
      background-size 23px
    .btns
      display inline-block
      padding 0 15px
      color #39aafb
      cursor pointer
    .user-info
      width 200px
      height 75px
      li
        position relative
        float left
        width 85px
        height 75px
        text-align center
        .name
          padding-top 10px
          line-height 30px
        .telphone
          line-height 30px
        .avatar
          display inline-block
          width 60px
          height 60px
          border 1px solid #eee
          border-radius 50%
        .mb-typs
          position absolute
          left 12px
          bottom 0px
          width 65px
          height 22px
          line-height 22px
          font-size 12px
          color #fff
          background #39aafb
          border-radius 12px
  .pagination
    padding 20px 10px
    text-align right
    background #fff
</style>
