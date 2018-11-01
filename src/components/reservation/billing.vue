<template>
  <div class="page">
    <div class="block">
      <div class="page-sub-title">
        <span>会员信息</span>
      </div>
      <div class="user-info">
        <img src="https://static.idengyun.com/staticWebRoot/static/images/user.png" alt="" class="avatar">
        <span class="user-name">康师傅</span>
        <span class="telphone">16201122345</span>
        <span class="member">普通会员</span>
      </div>
    </div>
    <!-- 消费信息 -->
    <div class="block">
      <div class="page-sub-title">
        <span>消费信息</span>
        <el-select v-model="spackage" class="spackage-select">
          <el-option
            v-for="item in spackageOptions"
            :key="item.label"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="data-desc">
        <ul class="server-lists">
          <li class="list-item">
            <span class="serve-name">服务项目：<span>项目名称项目名称11</span></span>
            <span class="serve-price">单价：<span>¥2500x1</span></span>
          </li>
          <li class="list-item">
            <span class="serve-name">服务项目：<span>项目名称2项目名称2</span></span>
            <span class="serve-price">单价：<span>¥2500x次</span></span>
          </li>
        </ul>
        <div class="total"><span>合计：¥250.00</span></div>
        <div class="server">
          <span class="label">技师：</span>
          <ul class="bc-name">
            <li>张三李（点客）</li>
            <li>张三</li>
            <li>张三李四</li>
          </ul>
          <span class="edit-btn" @click="beauticianDialog = true">修改</span>
        </div>
        <div class="server">
          <span class="label">营销顾问：</span>
          <ul class="bc-name">
            <li>张三李四</li>
            <li>张三李四</li>
            <li>张三李四</li>
          </ul>
          <span class="edit-btn">修改</span>
        </div>
      </div>
    </div>
    <!-- 新增的 -->
    <div class="block">
      <div class="page-sub-title">
        <span>消费信息</span>
        <!-- 删除按钮 -->
        <span class="del-server-btn">删除</span>
        <el-select v-model="spackage" class="spackage-select">
          <el-option
            v-for="item in spackageOptions"
            :key="item.label"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="data-desc">
        <ul class="server-lists">
          <li class="list-item">
            <span class="serve-name">服务项目：<span>项目名称项目名称11</span></span>
            <span class="serve-price">单价：<span>¥2500x1</span></span>
          </li>
          <li class="list-item">
            <span class="serve-name">服务项目：<span>项目名称2项目名称2</span></span>
            <span class="serve-price">单价：<span>¥2500x次</span></span>
          </li>
        </ul>
        <div class="total"><span>合计：¥250.00</span></div>
        <div class="server">
          <span class="label">技师：</span>
          <ul class="bc-name">
            <li>张三李（点客）</li>
            <li>张三</li>
            <li>张三李四</li>
          </ul>
          <span class="edit-btn">修改</span>
        </div>
        <div class="server">
          <span class="label">营销顾问：</span>
          <ul class="bc-name">
            <li>张三李四</li>
            <li>张三李四</li>
            <li>张三李四</li>
          </ul>
          <span class="edit-btn">修改</span>
        </div>
      </div>
    </div>

    <!-- 支付信息 -->
    <div class="block">
      <div class="page-sub-title">
        <span>消费信息</span>
      </div>
      <div class="data-desc">
        <div class="total"><span>应付金额：¥11111.00</span></div>
        <div class="total"><span>折扣优惠：-¥250.00</span></div>
        <div class="total"><span>优惠券：-¥250.00</span></div>
        <div class="total"><span>折扣卡：-¥250.00</span></div>
        <div class="total"><span>实付金额：¥250.00</span></div>
      </div>
    </div>

    <!-- 底部结算 -->
    <div class="footer">
      <span class="add-btn" @click="newServerDialog = true"><i class="icon-plus"></i>新增服务</span>
      <span class="add-btn"><i class="icon-plus"></i>新增卡项</span>
      <span class="add-btn" @click="newGoodDialog = true"><i class="icon-plus"></i>新增产品</span>
      <span class="add-btn"><i class="icon-plus"></i>新增赠送</span>
      <!-- 折扣 -->
      <el-select v-model="discount">
        <el-option
          v-for="item in discountOptions"
          :key="item.label"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <!-- 结算操作按钮 -->
      <div class="defray">
        <span class="payment">应付金额：<i>¥11111.00</i></span>
        <span class="save-btn">保存</span>
        <router-link tag="span" class="pay-btn" to="/main/payment/">收款</router-link>
      </div>
    </div>

    <!-- 新增服务弹框 -->
    <el-dialog
      title="新增服务"
      :visible.sync="newServerDialog"
      width="700px"
      @close="newServerDialog = false"
    >
      <div class="dialog-area">
        <ul class="tab-menu">
          <li class="current">分类1</li>
          <li class="">分类2</li>
        </ul>
        <div class="tab-contant">
          <div class="search-box">
            <input type="text" class="form-input">
            <i class="icon-search"></i>
          </div>
          <div class="item-list">
            <div class="items">
              <span class="label"><el-radio v-model="newServerRadio" label="1"></el-radio></span>
              <div class="goods">
                <img src="" alt="" class="pic">
                <p class="price">¥200.00</p>
                <p class="title" title="商品名的全名">商品名称商品名称商品名称商品名称</p>
              </div>
            </div>
            <div class="items">
              <span class="label"><el-radio v-model="newServerRadio" label="2"></el-radio></span>
              <div class="goods"></div>
            </div>
            <div class="items">
              <span class="label"><el-radio v-model="newServerRadio" label="3"></el-radio></span>
              <div class="goods"></div>
            </div>
            <div class="items">
              <span class="label"><el-radio v-model="newServerRadio" label="4"></el-radio></span>
              <div class="goods"></div>
            </div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="newServerDialog = false">取 消</el-button>
        <el-button type="primary" @click="newServerDialog = false">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 新增产品 -->
    <el-dialog
      title="新增产品"
      :visible.sync="newGoodDialog"
      width="700px"
      @close="newGoodDialog = false"
    >
      <div class="dialog-area add-goods">
        <ul class="tab-menu">
          <li class="current">分类1</li>
          <li class="">分类2</li>
        </ul>
        <div class="tab-contant">
          <div class="search-box">
            <input type="text" class="form-input">
            <i class="icon-search"></i>
          </div>
          <div class="item-list">
            <div class="items">
              <span class="label"><el-checkbox ></el-checkbox></span>
              <div class="goods">
                <img src="" alt="" class="pic">
                <div class="price">
                  <span>¥200.00</span>
                  <el-input-number v-model="num1" :min="1" :max="100" size="mini"></el-input-number>
                </div>
                <p class="title" title="商品名的全名">商品名称商品名称商品名称商品名称</p>
              </div>
            </div>
            <div class="items">
              <span class="label"><el-checkbox label="2"></el-checkbox></span>
              <div class="goods"></div>
            </div>
            <div class="items">
              <span class="label"><el-checkbox label="3"></el-checkbox></span>
              <div class="goods"></div>
            </div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="newGoodDialog = false">取 消</el-button>
        <el-button type="primary" @click="newGoodDialog = false">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 更改技师 营销顾问 -->
    <el-dialog
      title="选择技师"
      :visible.sync="beauticianDialog"
      width="500px"
      @close="beauticianDialog = false"
    >
      <div class="table-area">
        <table>
          <thead>
            <tr>
              <td>选择</td>
              <td>技师</td>
              <td>点客</td>
            </tr>
          </thead>
          <tr>
            <td><el-checkbox ></el-checkbox></td>
            <td>技师姓名</td>
            <td><el-checkbox ></el-checkbox></td>
          </tr>
        </table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="beauticianDialog = false">取 消</el-button>
        <el-button type="primary" @click="beauticianDialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spackage: '', // 套卡值
      spackageOptions: [{ // 套卡list
        value: '1',
        label: '卡项1'
      }, {
        value: '2',
        label: '卡项2'
      }, {
        value: '3',
        label: '卡项3'
      }],
      discount: '',// 折扣
      discountOptions: [{
        value: '1',
        label: '折扣1'
      }, {
        value: '2',
        label: '折扣2'
      }, {
        value: '3',
        label: '折扣3'
      }],
      newServerDialog: false,  // 新增服务
      newServerRadio: '', // 新增服务单选框
      newGoodDialog: false,  // 新增产品
      newGoodList: [], // 新增产品复选框
      num1: [], // 商品数量
      beauticianDialog: false, //更改技师 
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/stylus/mixin'
>>> .spackage-select
      .el-input__inner
        width 159px
        height 30px
        line-height 30px
        border-radius 0
        border 1px solid #e1e1e1        
>>> .footer
      .el-input__inner
        width 160px
        height 38px
        border-radius 0
  .block
    margin-bottom 20px
    font-size 14px
    color #333
    background #fff
    .page-sub-title
      padding-right 50px
    .user-info
      height 60px
      padding 35px 26px
      line-height 60px
      .avatar
        width 60px
        height 60px
        margin-right 12px
        border-radius 50%
        vertical-align middle
      .user-name
        padding-right 12px
        vertical-align middle
      .telphone
        padding-right 12px
        vertical-align middle
      .member
        display inline-block
        height 26px
        padding 0 12px
        line-height 26px
        color #fff
        background $color-light
        border-radius 16px
        vertical-align middle
  .spackage-select
    float right
    margin-right 14px
  .del-server-btn
    position absolute
    right 0
    top 0
    height 40px
    padding-right 14px
    line-height 40px
    color $color-light
    cursor pointer
  .data-desc
    position relative
    padding 30px
    background #fff
    overflow hidden
    .server-lists
      display inline-block
      width 42%
      text-align left
      vertical-align middle
    .list-item
      height 30px
      line-height 30px
      overflow hidden
      .serve-name
        display inline-block
        width 65%
        padding-right 12px
        box-sizing border-box
        vertical-align top
        no-wrap()
      .serve-price
        display inline-block
        width 30%
        vertical-align top
    .total
      display inline-block
      width 15%
      vertical-align middle
    .server
      display inline-block
      width 20%
      vertical-align middle
      .label
        display inline-block
        vertical-align middle
      .bc-name
        display inline-block
        width 100px
        line-height 24px
        vertical-align middle
      .edit-btn
        color $color-light
        cursor pointer
  .footer
    padding 20px 22px
    font-size 14px
    background #fff
    .icon-plus
      font-size 12px
      padding-right 2px
      &:before
        content:"\e60e"
    .add-btn
      display inline-block
      height 36px
      padding 0 18px 0 12px
      margin-right 20px
      line-height 36px
      color $color-light
      border-radius 2px
      border 1px dashed $color-light
      cursor pointer
    .defray
      float right
      .payment
        i
          font-style normal
          color #ff9c00
      .save-btn
        display inline-block
        height 36px
        padding 0 25px
        margin-left 8px
        line-height 36px
        border-radius 2px
        background #e1e1e1
        cursor pointer
      .pay-btn
        display inline-block
        height 36px
        padding 0 25px
        margin-left 15px
        line-height 36px
        border-radius 2px
        color #fff
        background #28a9ff
        cursor pointer
  .dialog-area
    height 465px
    margin -20px
    border-top 1px solid #e1e1e1
    font-size 14px
    overflow hidden   
    .tab-menu
      display inline-block
      width 110px
      height 465px
      padding-top 20px
      box-sizing border-box
      background rgba(244, 247, 250, 1)
      overflow auto
      li
        height 40px
        padding 0 20px
        margin-bottom 10px
        line-height 40px
        text-align left
        color #333
        cursor pointer
        no-wrap()
      .current
        color $color-light
        background #fff
    .tab-contant
      display inline-block
      width 580px
      vertical-align top
      border-radius 2px
      overflow auto
      .search-box
        position relative
        width 240px
        height 40px
        margin 10px auto
        border 1px solid #e1e1e1
        .form-input
          width 190px
          height 40px
          padding 0 40px 0 10px
        .icon-search
          position absolute
          top 0
          right 0
          width 40px
          height 40px
          color $color-light
          text-align center
          line-height 40px
          cursor pointer
          font-size 18px
          &:before
            content:"\e929"
    .item-list
      padding-top 20px
      .items
        display inline-block
        width 180px
        height 145px
        line-height 145px
        margin-left 5px
        margin-bottom 20px
        vertical-align top
        .label
          display inline-block
          width 25px
          margin-left 5px
          line-height 120px
          text-align center
          vertical-align top
          overflow hidden
        .goods
          position relative
          display inline-block
          width 135px
          height 142px
          border 1px solid #e1e1e1
          .pic
            display block
            width 132px
            height 115px
          .title
            position absolute
            top 83px
            left 0
            height 30px
            width 135px
            line-height 30px
            font-size 12px
            color #fff
            text-align center
            background rgba(0,0,0,.5)
            z-index 1
            no-wrap()
          .price
            height 26px
            line-height 26px
            background #fff
            color red
            padding 0 10px
  .add-goods
    .item-list
      .items
        height 174px
        .goods
          height 170px
        .el-input-number
          margin-left -7px
  .table-area
    height 260px
    overflow auto
    table
      width 100%
      line-height 45px
      tr
        border-bottom 1px solid #e1e1e1
        &:first-child
          background #e7f5ff
      td
        width 30%
        text-align center
      td + td 
        border-left 1px solid #e1e1e1
</style>
