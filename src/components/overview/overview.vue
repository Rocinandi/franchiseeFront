<template>
  <div class="page"> 
    <!-- 统计区域 -->
    <div class="overview">
      <div class="block-item">
        <div class="datas">
          <span class="data-icon icons-porder"></span>
          <p>今日订单总数</p>
          <p>200</p>
        </div>
      </div>
      <div class="block-item">
        <div class="datas">
          <span class="data-icon icons-sales"></span>
          <p>今日订单总数</p>
          <p>200</p>
        </div>
      </div>
      <div class="block-item">
        <div class="datas">
          <span class="data-icon icons-rsales"></span>
          <p>昨日销售总额</p>
          <p>200</p>
        </div>
      </div>
      <div class="block-item">
        <div class="datas">
          <span class="data-icon icons-7sales"></span>
          <p>近7天销售总额</p>
          <p>200</p>
        </div>
      </div>
    </div>
    <!-- 数据预览 -->
    <div class="preview-area">
      <!-- 预约 -->
      <div class="reserve">
        <div class="page-sub-title">
          <span>预约总览</span>
          <span class="link-btn"><i class="icon-right"></i></span>
        </div>
        <div class="data-content">
          <div class="data-item">
            <p><strong style="color:#00d8f1">100</strong></p>
            <p>今日完成</p>
          </div>
          <div class="data-item">
            <p><strong style="color:#ff4d64">100</strong></p>
            <p>昨日预约</p>
          </div>
          <div class="data-item">
            <p><strong style="color:#00a7fc">100</strong></p>
            <p>本月完成</p>
          </div>
          <div class="data-item">
            <p><strong style="color:#a97cfa">100</strong></p>
            <p>总计完成</p>
          </div>
        </div>
      </div>
      <!-- 会员 -->
      <div class="member">
        <div class="page-sub-title">
          <span>会员总览</span>
          <span class="link-btn"><i class="icon-right"></i></span>
        </div>
        <div class="data-content">
          <div class="data-item">
            <p><strong style="color:#00d8f1">100</strong></p>
            <p>今日预约</p>
          </div>
          <div class="data-item">
            <p><strong style="color:#ff4d64">100</strong></p>
            <p>昨日预约</p>
          </div>
          <div class="data-item">
            <p><strong style="color:#00a7fc">100</strong></p>
            <p>本月完成</p>
          </div>
          <div class="data-item">
            <p><strong style="color:#a97cfa">100</strong></p>
            <p>总计完成</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 快速入口 -->
    <div class="entrance">
      <div class="page-sub-title">
        <span>快捷入口</span>
      </div>
      <div class="content">
        <div class="items">
          <div class="icons">
            <span class="icon-kuaisukaidan"></span>
          </div>
          <p>快速开单</p>
        </div>
        <div class="items">
          <div class="icons">
            <span class="icon-yuyue"></span>
          </div>
          <p>新增预约</p>
        </div>
        <div class="items">
          <div class="icons">
            <span class="icon-xinzenghuiyuan"></span>
          </div>
          <p>新增会员</p>
        </div>
        <div class="items">
          <div class="icons">
            <span class="icon-qianke"></span>
          </div>
          <p>新增潜客</p>
        </div>
      </div>
    </div>
    <!-- 今日预约 -->
    <div class="all-reserve">
      <div class="page-sub-title">
        <span>今日预约</span>
        <span class="num">未到店13/已开单44</span>
        <span class="link-btn"><i class="icon-right"></i></span>
      </div>
      <ul class="member-list">
        <li class="member-item vip">
          <div class="times">10:10</div>
          <div class="members">
            <img src="https://static.idengyun.com/staticWebRoot/static/images/user.png" alt="" class="avatar">
            <span class="mb-typs">会员</span>
          </div>
          <div class="users">
            <p class="name">预约人姓名</p>
            <p class="tel">13800138000</p>
          </div>
          <div class="service-type">项目名称</div>
          <div class="technician">技师姓名<span class="ser-typs">（待服务）</span></div>
        </li>
        <li class="member-item non">
          <div class="times">10:10</div>
          <div class="members">
            <img src="https://static.idengyun.com/staticWebRoot/static/images/user.png" alt="" class="avatar">
            <span class="mb-typs">会员</span>
          </div>
          <div class="users">
            <p class="name">预约人姓名</p>
            <p class="tel">13800138000</p>
          </div>
          <div class="service-type">项目名称</div>
          <div class="technician">技师姓名<span class="ser-typs">（待服务）</span></div>
        </li>
        <li class="member-item non">
          <div class="times">10:10</div>
          <div class="members">
            <img src="https://static.idengyun.com/staticWebRoot/static/images/user.png" alt="" class="avatar">
            <span class="mb-typs">会员</span>
          </div>
          <div class="users">
            <p class="name">预约人姓名</p>
            <p class="tel">13800138000</p>
          </div>
          <div class="service-type">项目名称</div>
          <div class="technician">技师姓名<span class="ser-typs">（待服务）</span></div>
        </li>
      </ul>
    </div>
    <!-- 消息 -->
    <div class="news">
      <div class="page-sub-title">
        <span>消息管理</span>
      </div>
      <ul class="news-list">
        <li class="news-item">
          <p class="news-title">
            <span class="post-title">系统功能升级，我可只告诉了你哦！</span>
            <span class="post-time">2017-12-26 21:10:30</span>
          </p>
          <p class="news-desc">
            <span class="post-desc">本次我们升级了问卷调查功能，新增短信群发功能</span>
            <span class="link-more">查看详情<i class="icon-right"></i></span>
          </p>
        </li>
        <li class="no-more"><span class="text">我是有底线的</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>
<style lang="stylus" scoped>
@import "~@/assets/stylus/mixin"
.page
  background #f6f6f6
  overflow hidden
  .page-sub-title
    height 40px
    line-height 40px
  .overview
    height 150px
    .block-item
      float left
      width calc(25% - 23px)
      height 130px
      margin-right 30px
      border-radius 6px
      background #abc
      .datas
        position relative
        padding 48px 0 0 24px
        font-size 14px
        color #fff
        .data-icon
          position absolute
          left 24px
          top 48px
          width 35px
          height 35px
          background-size 35px
          background-position center
          background-repeat no-repeat
        .icons-porder
          background-image url('~@/assets/image/icon-porder.png')
        .icons-sales
          background-image url('~@/assets/image/icon-sales.png')
        .icons-7sales
          background-image url('~@/assets/image/icon-7sales.png')
        .icons-rsales
          background-image url('~@/assets/image/icon-rsales.png')
        p
          padding-left 44px
          margin-top -1px
          height 14px
        p + p
          margin-top 5px
    .block-item:nth-child(1)
      background url('~@/assets/image/bg-overflow01.png') left top no-repeat
      background-size 100% 100% 
    .block-item:nth-child(2)
      background url('~@/assets/image/bg-overflow02.png') left top no-repeat
      background-size 100% 100% 
    .block-item:nth-child(3)
      background url('~@/assets/image/bg-overflow03.png') left top no-repeat
      background-size 100% 100% 
    .block-item:nth-child(4)
      margin-right 0
      background url('~@/assets/image/bg-overflow04.png') left top no-repeat
      background-size 100% 100%
  .preview-area
    float left
    height 400px
    width calc(50% - 15px)
    margin-right 30px
    margin-bottom 20px
    overflow hidden
    .reserve
      margin-bottom 20px
      box-shadow 1px 1px 10px 0px #f2f4f6
      background #fff
    .member
      box-shadow 1px 1px 10px 0px #f2f4f6
      background #fff
    .data-content
      padding 0 20px
      height 150px
      overflow hidden
      .data-item
        float left
        width 25% 
        padding-top 40px
        text-align center
        p
          line-height 24px
          font-size $normal-font
          strong
            font-size $large-font
  .entrance
    float left
    width calc(50% - 15px)
    height 400px
    margin-bottom 20px
    background #fff
    .content
      position relative
      width calc(100% - 110px)
      height 360px
      margin 0 auto
      &:before
        content ''
        position absolute
        left 9%
        top 50%
        width 82%
        height 1px
        background #f4f4f4
      &:after
        content ''
        position absolute
        top 9%
        left 50%
        height 82%
        width 1px
        background #f4f4f4
      .items
        float left
        width 50%
        height 140px
        padding-top 40px
        text-align center
        cursor pointer
        .icons
          display inline-block
          width 90px
          height 90px
          line-height 90px
          border-radius 50%
          font-size 40px
          color #c8c8c8
          box-shadow 0 0 0 7px #fafafa
          background #f3f3f3
        p
          margin-top 12px
          font-size $normal-font
          color $color-text
        &:hover
          .icons
            color #008df9
          p
            color #008df9
  .all-reserve
    float left
    width calc(50% - 15px)
    margin-right 30px
    background #fff
    .page-sub-title
      .num
        float right
        margin-right 40px
        font-weight normal
        color #666
    .member-list
      height 480px
      overflow auto
      .member-item
        height 70px
        line-height 70px
        text-align center
        font-size $normal-font
        border-bottom 1px solid #eaeaea
        overflow hidden
        .times
          float left
          width 12%
          color #666
        .members
          float left
          position relative
          width 14%
          .avatar
            width 50px
            height 50px
            border-radius 50%
            vertical-align middle
          .mb-typs
            position absolute
            left 50%
            bottom 8px
            width 34px
            height 16px
            margin-left -17px
            line-height 16px
            font-size $small-font
            color #fff
            border-radius 10px
            background #ededed
            z-index 1
        .users
          float left
          width 24%
          padding-top 16px
          color #666
          .name 
            margin-bottom 8px
            line-height 16px
          .tel
            line-height 16px
        .service-type
          float left
          width 24%
          height 70px
          no-wrap()
        .technician
          float left
          width 25%
      .vip
        .mb-typs
          background #39aafb !important
        .ser-typs
          color #2bd2de
      .non
        .mb-typs
          background #ffd156 !important
        .ser-typs
          color #ffd156
  .news
    float left
    width calc(50% - 15px)
    background #fff
    .news-list
      height 480px
      overflow auto
      .news-item
        height 80px
        font-size $normal-font
        cursor pointer
        border-bottom 1px solid #eaeaea
        overflow hidden
        .news-title
          height 50px
          line-height 50px
          color #333
          .post-title
            float left
            width 60%
            height 50px
            padding-left 12px
            no-wrap()
          .post-time
            float right
            width 32%
            height 50px
            padding-right 12px
            line-height 50px
            text-align right
            no-wrap()
        .news-desc
          font-size $small-font
          color #999
          .post-desc
            float left
            width 60%
            height 30px
            padding-left 12px
            no-wrap()
          .link-more
            float right
            margin-right 12px
            .icon-right
              padding-left 6px
    .no-more
      position relative
      line-height 60px
      text-align center
      font-size $small-font
      .text
        display inline-block
        position relative
        width 200px
        color #999
        background #fff
        z-index 1
      &:after
        content ''
        position absolute
        left 5%
        bottom 50%
        width 90%
        height 1px
        background #ccc
</style>
