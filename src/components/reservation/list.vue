<template>
  <div class="page"> 
    <div class="tab-bar">
      <ul class="page-title">
        <li @click="toCalendar()">预约大屏</li>
        <li class="active">预约列表</li>
      </ul>
    </div>
    <!-- 筛选 -->
    <div class="filter-area">
      <div class="filter-row">
        <span class="filter-item label">到店时间：</span>
        <span class="filter-item current">全部</span>
        <span class="filter-item">今天</span>
        <span class="filter-item">明天</span>
        <span class="filter-item">后天</span>
        <span class="filter-item">明天</span>
        <span class="filter-item">3天内</span>
        <span class="filter-item">7天内</span>
        <span class="filter-item">15天内</span>
      </div>
      <div class="filter-row">
        <span class="filter-item label">预约状态：</span>
        <span class="filter-item current">全部</span>
        <span class="filter-item">待服务</span>
        <span class="filter-item">已超时</span>
        <span class="filter-item">已取消</span>
        <span class="filter-item">待分配</span>
        <span class="filter-item">已完成</span>
      </div>
      <div class="filter-row">
        <span class="filter-item label">预约门店：</span>
        <span class="filter-item current">全部</span>
        <span class="filter-item">门店名称1</span>
        <span class="filter-item">北京分店门店2</span>
      </div>
    </div>
    <!--  -->
    <div class="data-area">
      <div class="page-sub-title">
        <span>预约总览</span>
        <span class="add-btn" @click="addRetain()">新增预约</span>
        <div class="search-area">
          <input type="text" class="search-input" placeholder="到店人姓名/手机/备注">
          <span class="icon-search"></span>
        </div>
      </div>
      <!-- 表格 -->
      <ul class="data-table">
        <li class="thead">
          <div>到店人</div>
          <div>预约门店</div>
          <div>到店时间</div>
          <div>服务项目</div>
          <div>服务技师</div>
          <div class="col-13">下单时间</div>
          <div class="col-14">备注</div>
          <div class="col-13">操作</div>
        </li>
        <li class="table-tr">
          <div>
            <p class="user">卷毛</p>
            <p class="uid">1300000000000</p>
          </div>
          <div>门店名称门店名称</div>
          <div>2018-08-08 09 21:15</div>
          <div>服务项目项目名称</div>
          <div>服务技师</div>
          <div class="col-13">2018-08-08 09 21:15</div>
          <div class="col-14" title="所有文字提示">备注备注备注备注备注备注备注备注备注备注备注备注注</div>
          <div class="col-13">
            -----
          </div>
        </li>
        <li class="table-tr">
          <div>
            <p class="user">卷毛</p>
            <p class="uid">1300000000000</p>
          </div>
          <div>门店名称门店名称</div>
          <div>2018-08-08 09 21:15</div>
          <div>服务项目项目名称</div>
          <div>服务技师</div>
          <div class="col-13">2018-08-08 09 21:15</div>
          <div class="col-14" title="所有文字提示">备注备注备注备注备注备注备注备注备注备注备注备注注</div>
          <div class="col-13">
            <span class="ctr-btn" @click="handleCancleDate()">取消预约</span>
            <span class="ctr-btn">修改</span>
            <router-link class="ctr-btn" tag="span" to="/main/billing">开单</router-link>
          </div>
        </li>
        <li class="table-tr">
          <div>
            <p class="user">卷毛</p>
            <p class="uid">1300000000000</p>
          </div>
          <div>门店名称门店名称</div>
          <div>
            <p class="ordertime">2018-08-08 09 21:15</p>
            <p class="overtime">已超时13分钟</p>
          </div>
          <div>服务项目项目名称</div>
          <div>服务技师</div>
          <div class="col-13">2018-08-08 09 21:15</div>
          <div class="col-14" title="所有文字提示">备注备注备注备注备注备注备注备注备注备注备注备注注</div>
          <div class="col-13">
            <span class="ctr-btn">取消预约</span>
            <span class="ctr-btn">修改</span>
            <span class="ctr-btn">开单</span>
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

    <!-- 新增预约 -->
    <el-dialog
      title="新增预约"
      :visible.sync="addDialog"
      width="700px"
      @close="clearData()"
    >
      <div class="dialog-area">
        <p class="form-ctrl">
          <span class="label">到店人手机号:</span>
          <input type="text" class="form-input" maxlength="11">
          <span class="addVip">加为会员</span>
        </p>
        <p class="form-ctrl">
          <span class="label">到店人姓名:</span>
          <input type="text" class="form-input">
        </p>
        <p class="form-ctrl">
          <span class="label"><span style="color:red">*</span>预约门店:</span>
          <el-select v-model="storeValue" placeholder="请选择">
            <el-option
              v-for="item in addOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </p>
        <p class="form-ctrl">
          <span class="label"><span style="color:red">*</span>到店时间:</span>
          <el-date-picker
            v-model="dateValue"
            type="date"
            @change="pickTime"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
            :picker-options="pickerOptions1"
          >
          </el-date-picker>
          <el-time-select
            v-model="timeValue"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30'
            }"
            placeholder="选择时间">
          </el-time-select>
        </p>
        <ul class="selectServer">
          <span @click="addList" class="add-list">新增</span>
          <li  
            v-for="(item,index) in list"
            :key="index+'server'"
          >
            <p class="form-ctrl">
              <span class="label"><span style="color:red">*</span>服务项目:</span>
              <el-select v-model="serves[index]" placeholder="请选择">
                <el-option
                  v-for="item in serverOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </p>
            <p class="form-ctrl">
              <span class="label"><span style="color:red">*</span>服务技师:</span>
              <el-select v-model="beautician[index]" placeholder="请选择">
                <el-option
                  v-for="item in beauticianOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </p>
          </li>
        </ul>
        
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog()">取 消</el-button>
        <el-button type="primary" @click="handleAddRetain()">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 取消预约弹框 -->
    <el-dialog
      title="取消预约"
      :visible.sync="cancelDateDialog"
      width="600px"
      @close="cancelDateDialog = false"
    >
      <div class="dialog-area" style="height: 300px">
        <p class="form-ctrl">
          <span class="label"><span style="color:red">*</span>取消原因:</span>
          <el-select v-model="cancelReason" placeholder="请选择">
            <el-option
              v-for="item in cancelOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </p>
        <p class="form-ctrl">
          <span class="label">备注:</span>
          <textarea class="form-textarea"></textarea>
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog()">取 消</el-button>
        <el-button type="primary" @click="handleAddRetain()">确 定</el-button>
      </span>
    </el-dialog>


  </div>
</template>

<script>
export default {
  data() {
    return {
      list: 1,
      addDialog: false, //新增弹框
      currentPage: 1,
      addOptions: [{ // 店铺列表
        value: '1',
        label: '店铺1'
      }, {
        value: '2',
        label: '店铺2'
      }, {
        value: '3',
        label: '店铺3'
      }],
      serverOptions: [{ //服务列表
        value: '1',
        label: '服务1'
      }, {
        value: '2',
        label: '服务12'
      }, {
        value: '3',
        label: '服务13'
      }],
      beauticianOptions: [{ //服务技师列表
        value: '1',
        label: '技师1'
      }, {
        value: '2',
        label: '技师12'
      }, {
        value: '3',
        label: '技师13'
      }],
      storeValue: '', //店铺信息
      dateValue: '', // 预约日期
      timeValue: '', //预约时间点
      serves: [], //服务数组
      beautician: [],
      pickerOptions1: { //日历选项
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        },
      },
      cancelDateDialog: false, //取消预约
      cancelReason: '',
      cancelOptions: [{
        value: '1',
        label: '用户未到店'
      }, {
        value: '2',
        label: '用户更改预约时间'
      }, {
        value: '3',
        label: '技师时间问题'
      },{
        value: '4',
        label: '其他'
      }]
    }
  },
  methods: {
    handleCancleDate() { // 取消预约弹框
      this.cancelDateDialog = true
    },
    clearData() { //关闭对话框 清除预约数组
      this.list = 1
      this.serves = []
      this.beautician = []
    },
    addList() { //新增一组预约
      this.list++
      console.log(this.list)
    },
    pickTime() { //日历选择时间
      console.log(this.dateValue)
    },
    addRetain() {
      // 展示 新增预约
      this.addDialog = true
    },
    handleAddRetain() {// 新增预约确定按钮
      console.log('新增预约确定事件！')
      console.log(this.serveValue)
      this.addDialog = false
      this.clearData() //最后提交操作结束 还是要清除临时数组数据
    },
    closeDialog() { // 新增预约对话框取消事件
      this.addDialog = false
      this.clearData()
    },
    handleCurrentChange(val) { //分页
      console.log(`第 ${val} 条`);
      console.log(`currentPage： ${this.currentPage} `);
    },
    toCalendar() { //跳转到预约日历
      this.$router.push({
        path: `/main/calendar`,
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/stylus/mixin'
.page
  >>> .dialog-area
        .el-select
        .el-date-table td.disabled div
          background-color #fff
        .el-input__icon
          line-height 34px
        .el-date-editor.el-input
          width 120px
          .el-input__inner
            width 115px
        .el-input__inner
          height 34px
          width 239px
          border-radius 0
  font-size 14px
  .filter-area
    padding 0 10px
    margin-top 20px
    border 1px solid #e1e1e1
    background #fff
    .filter-row
      line-height 60px
      padding 0 10px
      line-height 60px
      & + .filter-row
            border-top 1px solid #e1e1e1
      .filter-item
        display inline-block
        margin-right 40px
        color #666
        cursor pointer
      .label
        margin-right 0
      .current 
        color $color-light
  .data-area
    margin-top 20px
    background #fff
    .page-sub-title
      height 30px
      padding 10px 12px
      line-height 30px
    .add-btn
      float right
      height 30px
      min-width 60px
      padding 0 10px
      line-height 30px
      text-align center
      border-radius 3px
      color #fff
      background $color-light
    .search-area
      position relative
      float right
      width 260px
      padding-right 40px
      margin-right 10px
      border 1px solid #e1e1e1
      border-radius 3px
      box-sizing border-box
      .search-input
        height 28px
        width 210px
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
    .col-13
      width 13%
    .col-14
      width 14%
    .user
      height 20px
      line-height 30px
      color #39aafb
    .uid
      height 30px
      line-height 30px
      no-wrap()
    .ctr-btn
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
  .dialog-area
    height 460px
    padding-top 30px
    overflow auto
    .addVip
      display inline-block
      line-height 32px
      padding 0 10px
      margin-left 5px
      color #999
      border 1px solid #e1e1e1
      cursor pointer
    .form-ctrl
      height 34px
      line-height 34px
      margin-bottom 20px
      .label
        float left
        width 190px
        text-align right
        margin-right 10px
      .form-input
        height 34px
        width 240px
        padding 0 10px
        box-sizing border-box
        border 1px solid #e1e1e1
        background #fff
      .form-textarea
        width 240px
        height 170px
        border 1px solid #e1e1e1
        padding 10px
        line-height 1.5
        resize none
        outline none
        font-size 14px
        color #666
        box-sizing border-box
    .selectServer
      position relative
      .add-list
        position absolute
        left 450px
        top 8px
        color $color-light
</style>
