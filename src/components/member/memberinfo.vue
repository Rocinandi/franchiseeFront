<template>
  <div class="page">
    <div class="info-block">
      <div class="page-sub-title">
        <span>会员详情</span>
        <span class="ctrl-btn" @click="memberCornDialog = true">添加成长值</span>
        <span class="ctrl-btn">预约</span>
        <span class="ctrl-btn">开单</span>
        <router-link class="ctrl-btn" tag="a" to="/main/member/editmember/123" target="_blank">编辑</router-link>
      </div>
      <div class="user-info">
        <div class="base-info">
          <div class="edit-avatar">
            <label for="upload-avatar" class="text"><span class="icon-edit"></span>编辑</label>
            <input type="file" id="upload-avatar">
          </div>
          <img src="" alt="" class="avatar">
          <p>12312312321</p>
          <p><span class="member">黄金会员</span></p>
        </div>
        <div class="desc-info">
          <li><span>会员编号</span><span>8447466</span></li>
          <li><span>字段名称</span><span>字段字段</span></li>
          <li><span>字段名称</span><span>字段字段</span></li>
          <li><span>字段名称</span><span>字段字段</span></li>
          <li><span>字段名称</span><span>字段字段</span></li>
        </div>
      </div>
    </div>
    <!-- 统计信息 -->
    <div class="info-block">
      <div class="page-sub-title"><span>统计信息</span></div>
      <ul class="data-table">
        <li class="thead">
          <div>消费总金额</div>
          <div>消费总次数</div>
          <div>预约总数</div>
          <div>成长值</div>
        </li>
        <li class="table-tr">
          <div>31231313122</div>
          <div>15134443234</div>
          <div>15134443234</div>
          <div>现金</div>
        </li>
      </ul>
    </div>
    <!-- 卡项信息 -->
    <div class="info-block">
      <div class="page-sub-title"><span>统计信息</span></div>
      <ul class="data-table">
        <li class="thead">
          <div>卡项名称</div>
          <div>耗卡金额/次数</div>
          <div>剩余金额/次数</div>
          <div>到期日期</div>
        </li>
        <li class="table-tr">
          <div>31231313122</div>
          <div>15134443234</div>
          <div>15134443234</div>
          <div>现金</div>
        </li>
        <li class="table-tr">
          <div>31231313122</div>
          <div>15134443234</div>
          <div>15134443234</div>
          <div>现金</div>
        </li>
      </ul>
    </div>
    <!-- 预约记录 消费记录  -->
    <div class="info-block">
      <el-tabs v-model="tabActiveName" type="card">
        <el-tab-pane label="预约记录" name="first">
          <div class="reservation">
            <ul class="data-table">
              <li class="thead">
                <div>订单编号</div>
                <div>提交时间</div>
                <div>服务名称</div>
                <div>技师</div>
                <div>支付金额</div>
                <div>订单来源</div>
                <div>订单状态</div>
                <div>操作</div>
              </li>
              <li class="table-tr">
                <div>201707196398345</div>
                <div>2018-11-11 11:11</div>
                <div>服务名称</div>
                <div>技师</div>
                <div>支付金额</div>
                <div>订单来源</div>
                <div>订单状态</div>
                <div><router-link tag="a" class="btn" to="/main/order/detail/12322" target="_blank">查看订单</router-link></div>
              </li>
            </ul>
            <!-- 分页 -->
            <div class="pagination">
              <el-pagination
                @current-change="reservationPageChange"
                :current-page.sync="reservationPage"
                :page-size="30"
                layout="total, prev, pager, next"
                :total="1000">
              </el-pagination>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="卡项消费记录" name="second">
          <div class="consume">
            <ul class="data-table">
              <li class="thead">
                <div>订单编号</div>
                <div>提交时间</div>
                <div>卡项名称</div>
                <div>技师</div>
                <div>支付金额</div>
                <div>剩余金额/次</div>
                <div>订单来源</div>
                <div>订单状态</div>
                <div>操作</div>
              </li>
              <li class="table-tr">
                <div>201707196398345</div>
                <div>2018-11-11 11:11</div>
                <div>卡项名称</div>
                <div>技师</div>
                <div>支付金额</div>
                <div>剩余金额/次</div>
                <div>订单来源</div>
                <div>订单状态</div>
                <div><router-link tag="a" class="btn" to="/main/order/detail/12322" target="_blank">查看订单</router-link></div>
              </li>
            </ul>
            <!-- 分页 -->
            <div class="pagination">
              <el-pagination
                @current-change="cardPageChange"
                :current-page.sync="cardPage"
                :page-size="30"
                layout="total, prev, pager, next"
                :total="1000">
              </el-pagination>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="产品消费记录" name="third">
          <div class="consume">
            <ul class="data-table">
              <li class="thead">
                <div>订单编号</div>
                <div>提交时间</div>
                <div>卡项名称</div>
                <div>数量</div>
                <div>营销顾问</div>
                <div>支付金额</div>
                <div>订单来源</div>
                <div>订单状态</div>
                <div>操作</div>
              </li>
              <li class="table-tr">
                <div>201707196398345</div>
                <div>2018-11-11 11:11</div>
                <div>卡项名称</div>
                <div>数量</div>
                <div>营销顾问</div>
                <div>支付金额</div>
                <div>订单来源</div>
                <div>订单状态</div>
                <div><router-link tag="a" class="btn" to="/main/order/detail/12322" target="_blank">查看订单</router-link></div>
              </li>
            </ul>
            <!-- 分页 -->
            <div class="pagination">
              <el-pagination
                @current-change="goodsPageChange"
                :current-page.sync="goodsPage"
                :page-size="30"
                layout="total, prev, pager, next, jumper"
                :total="1000">
              </el-pagination>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 私密信息 Private -->
    <div class="info-block">
      <div class="page-sub-title"><span>私密信息</span></div>
      <div class="private">
        <ul class="desc-info" v-if="privateDate == true">
          <li>
            <span>信息字段</span><span>信息字段</span>
          </li>
          <li>
            <span>信息字段</span><span>信息字段</span>
          </li>
          <li>
            <span>信息字段</span><span>信息字段</span>
          </li>
        </ul>
        <!-- 输入密码 -->
        <div class="private-cover" v-if="privateDate == false">
          <div>
            <input type="password" class="private-pwd" max="6" placeholder="请输入6位安全码"><span class="submit-btn" @click="privateDate = true">确定</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 会员标签 -->
    <div class="info-block">
      <div class="page-sub-title"><span>会员标签</span><span class="ctrl-btn" @click="editLabelDialog = true">添加标签</span></div>
      <div class="label-data">
        <div class="system">
          <div class="title">系统标签</div>
          <div class="label-area">
            <span class="label">富婆</span>
            <span class="label">富婆1</span>
          </div>
        </div>
        <div class="customize">
          <div class="title">人工标签</div>
          <div class="label-area">
            <span class="label" @click="deleteLabel()">富婆<i class="del-btn">x</i></span>
            <span class="label" @click="deleteLabel()">富婆1<i class="del-btn">x</i></span>
          </div>
        </div>
      </div>
    </div>
    <!-- 添加成长值弹窗 -->
    <el-dialog
      title="添加成长值"
      :visible.sync="memberCornDialog"
      width="600px"
    >
      <div class="member-corn">
        <div class="ctrl-label">
          <el-radio v-model="memberCornRadio" label="0">增加</el-radio>
          <el-radio v-model="memberCornRadio" label="1">减少</el-radio>
        </div>
        <input type="text" 
          onkeyup="this.value=this.value.replace(/\D/g,'')"
          maxlength="4"
          v-model="memberCornVal"
        >
      </div> 
      <span slot="footer" class="dialog-footer">
        <el-button @click="memberCornDialog = false">取 消</el-button>
        <el-button type="primary" @click="memberCornDialog = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 添加标签弹窗 -->
    <el-dialog
      title="添加标签"
      :visible.sync="editLabelDialog"
      width="500px"
    >
      <div class="edit-label-block">
        <div class="add-label-form">
          <input type="text" class="form-input"><div class="add-btn">添加</div>
        </div>
        <div class="title">选择已有人工标签</div>
        <div class="label-list">
          
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editLabelDialog = false">取 消</el-button>
        <el-button type="primary" @click="editLabelDialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      privateDate: false, //是否展示私密信息
      tabActiveName: 'first',
      reservationPage: 1, //预约分页
      cardPage: 1, //卡项分页
      goodsPage: 1, //产品分页
      memberCornVal: 1, //成长值输入框
      memberCornDialog: false, // 成长值弹框
      memberCornRadio: '0', // 0减少 1 增加
      editLabelDialog: false, //添加标签
    }
  },
  methods: {
    reservationPageChange(val) { //预约分页
      console.log(`第 ${val} 条`);
      console.log(`当前分页： ${this.reservationPage} `);
    },
    cardPageChange(val) { //预约分页
      console.log(`第 ${val} 条`);
      console.log(`当前分页： ${this.cardPage} `);
    },
    goodsPageChange(val) { //预约分页
      console.log(`第 ${val} 条`);
      console.log(`当前分页： ${this.goodsPage} `);
    },
    // 删除标签
    deleteLabel() {
      console.log('删除！！')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/stylus/mixin'
>>> .el-tabs__item
      min-width 125px
      text-align center
.info-block
  font-size 14px
  margin-bottom 20px
  border 1px solid #e1e1e1
  border-top 0
  background #fff
  .page-sub-title
    .ctrl-btn
      float right
      height 30px
      padding 0 20px
      margin 10px 10px 0 0
      line-height 30px
      color $color-light
      font-weight normal
      border 1px solid $color-light
      border-radius 3px
      cursor pointer
      &:hover
        color #fff
        background $color-light
  .user-info
    height 240px
    .base-info
      float left
      position relative
      width 264px
      height 240px
      padding-top 60px
      text-align center
      box-sizing border-box
      border-right 1px solid #e1e1e1
      .edit-avatar
        position absolute
        top 10px
        right 10px
        width 70px
        height 22px
        line-height 22px
        color $color-light
        text-align center
        border 1px solid $color-light
        border-radius 22px
        overflow hidden
        .icon-edit
          padding-right 4px
        .icon-edit:before
          content "\e60a"
        .text
          cursor pointer
        input
          left 0
          top 0
          width 0
          position absolute
          opacity 0
          font-size 0
      .avatar
        display inline-block
        width 80px
        height 80px
        border-radius 50%
        border 1px solid #eee
      p
        line-height 32px
        color #333
      .member
        display inline-block
        padding 0 14px
        line-height 26px
        border-radius 14px
        color #fff
        background #f4cf5e
  .desc-info
    height 240px
    overflow auto
    li
      float left
      width 50%
      height 50px
      box-sizing border-box
      border-bottom 1px solid #e1e1e1
      span
        float left
        height 49px
        line-height 49px
        padding 0 10px
        color #666
        box-sizing border-box
        no-wrap()
      span:nth-child(1)
        width 125px
        text-align right
        background #e7f5ff
      span:nth-child(2)
        width calc(100% - 125px)
        border-left 1px solid #e1e1e1
    li:nth-child(odd)
      border-right 1px solid #e1e1e1
  .data-table
    box-sizing border-box
    width 100%
    font-size 14px
    .thead
      height 50px
      color #062b7b
      background #e7f5ff
    .table-tr
      height 50px
      line-height 50px
      color #333
      background #fff
    .table-tr + .table-tr
      border-top 1px solid #e1e1e1
    div
      float left
      height 50px
      width 25%
      padding 0 6px
      box-sizing border-box
      line-height 50px
      text-align center
      no-wrap()
    div + div
      margin-left -1px
      border-left 1px solid #e1e1e1
    .btn
      color $color-light
  .reservation
    .data-table
      div
        width 12.4%
      div:nth-child(-n + 3)
        width 13.3%
      div:last-child
        width 11%
  .consume
    .data-table
      div
        width 10.8%
      div:nth-child(-n + 2)
        width 13%
      div:last-child
        width 9.5%
  .pagination
    padding 20px 10px
    text-align right
    border-top 1px solid #e1e1e1
    background #fff
  .private
    .desc-info
      height auto
    .private-cover
      display flex
      min-height 200px
      align-items center
      justify-content center
      .private-pwd
        width 160px
        height 42px
        margin-right 20px
        text-align center
        color #333
        border 1px solid #e1e1e1
      .submit-btn
        display inline-block
        height 44px
        width 88px
        text-align center
        line-height 44px
        color #fff
        cursor pointer
        border-radius 3px
        background $color-light
  .label-data
    overflow hidden
    .title
      height 40px
      line-height 40px
      text-align center
      color #333
      background #f0f4f8
      border-bottom 1px solid #e1e1e1
    .system
      float left
      width 50%
    .customize
      float left
      width 50%
      margin-left -1px
      border-left 1px solid #e1e1e1
    .label-area
      min-height 100px
      box-sizing border-box
      padding 10px 20px
    .label
      display inline-block
      min-width 80px
      padding 0 12px
      margin-right 10px
      margin-bottom 10px
      line-height 28px
      color $color-light
      box-sizing border-box
      text-align center
      border-radius 28px
      border 1px solid $color-light
    .customize
      .label
        position relative
        border-color #ffb606
        color #ffb606
        cursor pointer
      .del-btn
        position absolute
        right 14px
        top -2px
        font-size 12px
        padding-left 4px
        margin-right -4px
.member-corn
  width 240px
  height 60px
  line-height 60px
  margin 0 auto
  padding 40px 0
  .ctrl-label
    display inline-block
    width 90px
    vertical-align middle
    text-align right
    line-height 30px
  input
    display inline-block
    width 100px
    height 35px
    padding 0 12px
    margin-left 12px
    text-align center
    vertical-align middle
    border 1px solid #e1e1e1
    border-radius 3px
.edit-label-block
  font-size 14px
  .add-label-form
    padding 35px 20px
  .form-input
    width 200px
    height 40px
    padding 0 12px
    margin-right 10px
    border 1px solid #e1e1e1
    border-radius 3px
  .add-btn
    display inline-block
    min-width 60px
    line-height 40px
    padding 0 15px
    text-align center
    color #ffffff
    background $color-light
    border-radius 3px
  .title
    line-height 40px
    padding 0 20px
    margin 0 -20px
    background #f0f4f8
    color #333333
    border-bottom 1px solid #e1e1e1
  .label-list
    height 150px
    overflow auto
    
</style>
