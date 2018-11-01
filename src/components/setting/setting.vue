<template>
  <div class="page">
    <div class="page-h">
      <p class='page-title'><i></i><span>重要设置</span></p>
      <ul class="clearfix">
        <li @click="goStore()"><i class="icon-mendianguanli"></i><span>门店设置</span></li>
        <li @click="goEmployee()"><i class="icon-yuangongshezhi"></i><span>员工设置</span></li>
        <li @click="goAppointment()"><i class="icon-yuyueshezhi"></i><span>预约设置</span></li>
      </ul>
    </div> 
    <div class="page-b">
      <p class='page-title'><span><i></i></span><span>辅助设置</span></p>
      <ul class="clearfix">
        <li @click="goBrand()"><i class="icon-pinpai"></i><span>品牌设置</span></li>
        <li @click="goVip()"><i class="icon-huiyuan1"></i><span>会员设置</span></li>
        <li @click="goPushMoney()"><i class="icon-tichengguize"></i><span>提成设置</span></li>
        <li @click="goDiscount()"><i class="icon-zhekou2"></i><span>折扣设置</span></li>
        <li @click="goPower()"><i class="icon-feature"></i><span>权限设置</span></li>
      </ul>
    </div> 
    <!-- 弹窗 -->
    <div class="setprop" v-show="propVisible">
        <div class="prop">
           <div class="setImg" v-show="firstVisible"></div>
           <div class="setImg1" v-show="!firstVisible"></div>
           <div :class="firstVisible?'propText':'propText1'">
             <p v-show="firstVisible">首先您需要完成以上三项重要设置</p>
             <p v-show="!firstVisible">当您设置完重要设置后已经可以正常使用本系统，如想探索更多功能请完成以上几项辅助设置！</p>
             <p class="propClick">
               <el-checkbox v-model="checked">不再提示</el-checkbox>
               <span class="clickSkip" @click="skipStep()" v-show="firstVisible">跳过</span>
               <span class="clickSkip" @click="skipStep()" v-show="!firstVisible">完成</span>
               <span class="clickNext" @click="goNextStep()" v-show="firstVisible">下一步</span>
             </p>
           </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.propIsshow()
  },
  data() {
    return {
      propVisible: true,
      firstVisible: true,
      checked: true
    }
  },
  methods: {
    skipStep() {
      this.propVisible = false;
      if(this.checked == true){
        this.saveObjArr("ishide", true)
      }else{
        this.saveObjArr("ishide", false)
      }
    },
    goNextStep() {
      this.firstVisible = false;
    },
    saveObjArr(name, data){  //localStorage 存改
      localStorage.setItem(name, JSON.stringify(data))
    },
    getObjArr(name) {  //localStorage 获取数组对象的方法
      return JSON.parse(window.localStorage.getItem(name));
    },
    delObjArr(name) {  //localStorage 删除
      localStorage.removeItem(name)
    },
   propIsshow() {
    var ishow = this.getObjArr("ishide");
      if(ishow == null || ishow == false){
        this.propVisible = true
      }else{
        this.propVisible = false
      }
   },
   goStore() {
      this.$router.push({
        path:"/main/setting/storeSet"
      })
   },
   goEmployee() {
      this.$router.push({
        path:"/main/setting/empManage"
      })
   },
   goAppointment() {
      this.$router.push({
        path:"/main/setting/orderSetings"
      })
   },
  goBrand() {
      this.$router.push({
        path:"/main/setting/brandSeting"
      })
   },
  goVip() {
      this.$router.push({
        path:"/main/setting/rankSeting"
      })
   },
  goPushMoney() {
      this.$router.push({
        path:"/main/setting/commServe"
      })
   },
  goDiscount() {
      this.$router.push({
        path:"/main/setting/discountSet"
      })
   },
  goPower() {
      this.$router.push({
        path:"/main/setting/permissionSeting"
      })
   },
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/stylus/mixin';

.page{
  min-height calc(100vh - 150px)
  .clearfix:after {
    content:""; 
    display: block; 
    clear:both; 
  }
  .page-title{
    height 40px
    line-height 40px
    display flex
    flex-direction row
    align-content center
    font-size $normal-font
    border-bottom 1px solid #e5e5e5
    color $color-text
    i{
      display inline-block
      height 20px
      width 2px
      background-color #0e77e3
      margin 10px 10px 0 0
    }
  }
  .page-h{
      height auto
      padding-bottom 40px
      background-color #fff
      ul{
        margin 40px 0
        padding  0 40px
        li{
          float left
          width 140px
          height 175px
          cursor pointer
          margin-bottom 30px
          i{
            display inline-block
            width 110px
            height 110px
            line-height 110px
            font-size 40px
            text-align center
            color #fff
            border 15px solid #d7e3fd
            -webkit-border-radius 50%
            -moz-border-radius 50%
            border-radius 50%
            font-size 54px
          }
          span{
            display block
            width 100%
            font-size $normal-font
            text-align  center
            margin-top 15px
          }
        }
        li:hover{
          span{
           color $color-light
          }
        }
        li + li{
          margin-left 75px
        }
        li:first-child{
          i{
            background-color #aac5ff
          }
        }
         li:nth-child(2){
          i{
            background-color #a4d0ff
            border 15px solid #e3f0ff
          }
        }
        li:nth-child(3){
          i{
            background-color #71cef2
            border 15px solid #cce9f4
          }
        }
      }
  }
  .page-b{
      margin-top 20px
      height auto
      padding-bottom 40px
      background-color #fff
      ul{
        margin 40px 0
        padding  0 40px
        li{
          float left
          width 140px
          height 175px
          cursor pointer
          margin-bottom 30px
          i{
            display inline-block
            width 110px
            height 110px
            line-height 110px
            font-size 40px
            text-align center
            color #fff
            border 15px solid #d7e3fd
            -webkit-border-radius 50%
            -moz-border-radius 50%
            border-radius 50%
            font-size 54px
          }
          span{
            display block
            width 100%
            font-size $normal-font
            text-align  center
            margin-top 15px
          }
        }
        li + li{
          margin-right 75px
        }
        li:hover{
          span{
           color $color-light
          }
        }
        li:first-child{
          margin-right 75px
          i{
            background-color #7ac1fc
            border 15px solid #d7e3fd
          }
        }
         li:nth-child(2){
          i{
            background-color #bebdf8
            border 15px solid #d7e3fd
          }
        }
        li:nth-child(3){
          i{
            background-color #91b2f9
            border 15px solid #e5edff
          }
        }
        li:nth-child(4){
          i{
            background-color #ca9aff
            border 15px solid #e5edff
          }
        }
        li:nth-child(5){ 
          margin 0
          i{
            background-color #f49eca
            border 15px solid #e1cdf9
          }
        }
      }
  }
  .setprop{
    fixed()
    width 100%
    height 100%
    top 0
    left 0
    background-color rgba(0,0,0,.8)
    z-index 10
    .prop{
      .setImg{
      absolute()
      width 786px
      height 207px
      background: url('~@/assets/image/setingpop1.png') center no-repeat 
      background-size 100%
      top 150px
      left 220px
      }
      .setImg1{
       absolute()
       width 1008px
       height 349px
       background: url('~@/assets/image/setingpop2.png') center no-repeat 
       background-size 100%
       top 515px
       left 225px
      }
    }
    .propText{
      color #fff
      text-align center
      absolute()
      top 370px
      left 850px
      .propClick{
        margin-top 10px
        .el-checkbox{
          color #fff
        }
        .el-checkbox__input.is-checked+.el-checkbox__label{
          color #fff
        }
        .clickSkip{
          display inline-block
          width 66px
          height 28px
          line-height 28px
          text-align center
          border 1px solid #ffffff
          margin 0 5px
          border-radius(14px)
          cursor pointer
        }
       .clickNext{
         cursor pointer
         display inline-block
         width 66px
         height 28px
         line-height 28px
         text-align center
         color #1890ff
         border 1px solid #1890ff
         border-radius(14px)
        }
      }
    }
    .propText1{
      color #fff
      text-align center
      absolute()
      top 880px
      left 570px
      .propClick{
        margin-top 10px
        .el-checkbox{
          color #fff
        }
        .el-checkbox__input.is-checked+.el-checkbox__label{
          color #fff
        }
        .clickSkip{
          display inline-block
          width 66px
          height 28px
          line-height 28px
          text-align center
          border 1px solid #ffffff
          margin 0 5px
          border-radius(14px)
          cursor pointer
        }
       .clickNext{
         cursor pointer
         display inline-block
         width 66px
         height 28px
         line-height 28px
         text-align center
         color #1890ff
         border 1px solid #1890ff
         border-radius(14px)
        }
      }
    }
  }
}
</style>