<template>
    <div class="page">
        <p class='page-title'><i></i><span>门店列表</span></p>
        <div class="page-lists clearfix">
            <div class="page-list">
                 <div class="list-h">
                     <img src="http://img17.3lian.com/d/file/201702/20/9f6f4686d0ccf754600b83377359234e.jpg" alt="">
                     <span class="list-state">营业中</span>
                     <p class="storeEdit">
                         <span>编辑</span><span @click="changeManager()">任命店长</span>
                     </p>
                     <ul :class="dialogVisible? 'list-news':'new-show'">
                         <li>客服电话：010-888888</li>
                         <li>
                             <p>营业起止时间：</p>
                             <p>周一至周五 10:00 - 20：00</p>
                         </li>
                        <li>
                             <p>预约起止时间：</p>
                             <p>周一至周五 10:00 - 20：00</p>
                         </li>
                         <li>
                             <p>门店位置：</p>
                             <p>北京东城天安门1号楼</p>
                         </li>
                         <li>店长：张三</li>
                     </ul>
                 </div>
                 <div class="list-b">
                     <span class="list-name">克丽缇娜北京广安门</span>
                     <i class="icon-help" @mouseleave="moveNews()"></i>
                 </div>
            </div>
             <div class="page-list">
                 <div class="list-h">
                     <img src="http://img17.3lian.com/d/file/201702/20/9f6f4686d0ccf754600b83377359234e.jpg" alt="">
                     <span class="list-state">营业中</span>
                     <p class="storeEdit">
                         <span>编辑</span><span>任命店长</span>
                     </p>
                     <ul :class="dialogVisible? 'list-news':'new-show'">
                         <li>客服电话：010-888888</li>
                         <li>
                             <p>营业起止时间：</p>
                             <p>周一至周五 10:00 - 20：00</p>
                         </li>
                        <li>
                             <p>预约起止时间：</p>
                             <p>周一至周五 10:00 - 20：00</p>
                         </li>
                         <li>
                             <p>门店位置：</p>
                             <p>北京东城天安门1号楼</p>
                         </li>
                         <li>店长：张三</li>
                     </ul>
                 </div>
                 <div class="list-b">
                     <span class="list-name">克丽缇娜北京广安门</span>
                     <i class="icon-help" @mouseleave="moveNews()"></i>
                 </div>
            </div>
             <div class="page-list">
                 <div class="list-h">
                     <img src="http://img17.3lian.com/d/file/201702/20/9f6f4686d0ccf754600b83377359234e.jpg" alt="">
                     <span class="list-state">营业中</span>
                     <p class="storeEdit">
                         <span>编辑</span><span>任命店长</span>
                     </p>
                     <ul :class="dialogVisible? 'list-news':'new-show'">
                         <li>客服电话：010-888888</li>
                         <li>
                             <p>营业起止时间：</p>
                             <p>周一至周五 10:00 - 20：00</p>
                         </li>
                        <li>
                             <p>预约起止时间：</p>
                             <p>周一至周五 10:00 - 20：00</p>
                         </li>
                         <li>
                             <p>门店位置：</p>
                             <p>北京东城天安门1号楼</p>
                         </li>
                         <li>店长：张三</li>
                     </ul>
                 </div>
                 <div class="list-b">
                     <span class="list-name">克丽缇娜北京广安门</span>
                     <i class="icon-help" @mouseleave="moveNews()"></i>
                 </div>
            </div>
             <div class="page-list">
                 <div class="list-h">
                     <img src="http://img17.3lian.com/d/file/201702/20/9f6f4686d0ccf754600b83377359234e.jpg" alt="">
                     <span class="list-state">营业中</span>
                     <p class="storeEdit">
                         <span>编辑</span><span>任命店长</span>
                     </p>
                     <ul :class="dialogVisible? 'list-news':'new-show'">
                         <li>客服电话：010-888888</li>
                         <li>
                             <p>营业起止时间：</p>
                             <p>周一至周五 10:00 - 20：00</p>
                         </li>
                        <li>
                             <p>预约起止时间：</p>
                             <p>周一至周五 10:00 - 20：00</p>
                         </li>
                         <li>
                             <p>门店位置：</p>
                             <p>北京东城天安门1号楼</p>
                         </li>
                         <li>店长：张三</li>
                     </ul>
                 </div>
                 <div class="list-b">
                     <span class="list-name">克丽缇娜北京广安门</span>
                     <i class="icon-help" @mouseleave="moveNews()"></i>
                 </div>
            </div>
            <div class="page-list" @click="goAddStore()">
                <p>
                    <span class="addStore"></span>
                    <span>新增门店</span>
                </p>
            </div>
        </div>
        <!-- 任命店长弹窗 -->
        <div class="props">
            <div class="prop">
                <div class="props-title">
                    任命店长
                    <span class=close></span>
                </div>
                <div class="props-con">
                  <ul class="clearfix">
                    <li>选择</li>
                    <li>姓名</li>
                    <li>登录账号</li>
                    <li>岗位</li>
                  </ul>
                  <ul class="clearfix">
                    <li><el-checkbox v-model="checked"></el-checkbox></li>
                    <li>张三</li>
                    <li>13000000000</li>
                    <li>营销顾问</li>
                  </ul>
                  <ul class="clearfix">
                    <li><el-checkbox v-model="checked"></el-checkbox></li>
                    <li>张三</li>
                    <li>13000000000</li>
                    <li>营销顾问</li>
                  </ul>
                  <ul class="clearfix">
                    <li><el-checkbox v-model="checked"></el-checkbox></li>
                    <li>张三</li>
                    <li>13000000000</li>
                    <li>营销顾问</li>
                  </ul>
                  <ul class="clearfix">
                    <li><el-checkbox v-model="checked"></el-checkbox></li>
                    <li>张三</li>
                    <li>13000000000</li>
                    <li>营销顾问</li>
                  </ul>
                  <ul class="clearfix">
                    <li><el-checkbox v-model="checked"></el-checkbox></li>
                    <li>张三</li>
                    <li>13000000000</li>
                    <li>营销顾问</li>
                  </ul>
                </div>
                <div class="props-bot">
                    <span class="cancel">取消</span>
                    <span class="sure">确认</span>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    data() {
        return {
            checked: true,
            dialogVisible : true,
            dialogFormVisible : false 
        }
    },
    methods:{
      moveNews() {
        //   this.dialogVisible = false
      },
      goAddStore() {
          this.$router.push({
              path: "/main/setting/addStore"
          })
      },
      changeManager() {
          this.dialogFormVisible = true
      }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/mixin';
  .page{
  min-height calc(100vh - 150px)
  background-color #fff
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
  .page-lists{
      padding 20px 45px 20px 65px
      .page-list{
        float left
        overflow hidden
        width 234px
        height 265px
        border 1px solid #e1e1e1
        margin-right 19px
        margin-bottom 20px
        relative()
        .list-h{
        z-index: 3;
         width 100%
         height 215px
         cursor pointer
         .list-state{
            absolute()
            top 5px
            right 5px
            width 65px
            height 30px
            line-height 30px
            background-color #f2faff
            color $color-light
            text-align center
            border-radius(15px)
            font-size $normal-font
         }
         .storeEdit{
            width 230px
            height 50px
            line-height 50px
            color #ffffff
            absolute()
            bottom 0px
            background-color rgba(0,0,0,.5)
            span{
             display inline-block
             width 115px
             text-align center
             cursor pointer
             font-size $normal-font
           }
           span:nth-child(2){
               width 115px
               box-sizing border-box
               border-left 1px solid #fff
           }
         }
         .list-news{
            width 230px
            height 215px
            padding 10px
            font-size $normal-font
            box-sizing border-box
            color #ffffff
            absolute()
            top 215px
            z-index -1
            left 0
            background-color rgba(0,0,0,.5)
            li{
                margin-top 17px
                font-size $small-font
            }
            li:first-child{
                 margin-top 0
            }
         }
         .new-show{
            width 230px
            height 215px
            padding 10px
            font-size $normal-font
            box-sizing border-box
            color #ffffff
            absolute()
            top 0
            left 0
            z-index 2
            background-color rgba(0,0,0,.5)
            animation: moveNews 1s;
            -moz-animation: moveNews 1s;	/* Firefox */
            -webkit-animation: moveNews 1s;	/* Safari 和 Chrome */
            -o-animation: moveNews 1s;	/* Opera */
            animation-fill-mode: forwards;
            li{
                margin-top 17px
                font-size $small-font
            }
            li:first-child{
                 margin-top 0
            }
            }
         img{
             width auto
             max-width 100%
             margin 0 auto
             height 215px
         }
        }
        .list-h:hover{
           .storeEdit{
            animation: mymove 1s;
            -moz-animation: mymove 1s;	/* Firefox */
            -webkit-animation: mymove 1s;	/* Safari 和 Chrome */
            -o-animation: mymove 1s;	/* Opera */
            animation-fill-mode: forwards;
            }
        }
        .list-b{
         width 230px
         padding 0 10px
         box-sizing border-box
         height 50px
         line-height 50px
         background-color #f2faff
         text-align center
         border-top 1px solid #ebebeb
         relative()
         .list-name{
             display inline-block
             width 180px
             display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
         }
         .icon-help{ 
             absolute()
             top 15px
             right 10px
             font-size 20px
             color $color-light
             cursor pointer
         }
        }
        }
        .page-list:last-child{
         width 236px
         height 265px
         border 1px solid #e1e1e1
         cursor pointer
         background-color #fff
         p{
            height 265px
            text-align center
            .addStore{
             width 95px
             height 100px
             margin 60px auto 20px
             background: url('~@/assets/image/add.png') center no-repeat
             background-size 100%
             color #f0f0f0
             display inline-block
            }
            span:last-child{
              display inline-block
              width 100%
              font-size $normal-font
            }
          }
         }
    
    }
    .props{
    width 100%
    height 100%
    position fixed 
    top 0
    left 0
    background rgba(0,0,0,.5)
    .prop{
      width 600px
      background #fff
      border-radius 2px
      border-radius 5px
      absolute()
      top 50%
      left 50%
      transform: translate(-50%, -50%);
      .props-title{
          width 600px
          height 45px
          line-height 45px
          background-color #f5f5f5
          padding 0 15px
          box-sizing border-box
          border-radius 5px 5px 0 0
          .close{
              absolute()
              top 19px
              right 20px
              width 12px
              height 12px
              cursor pointer
              background: url('~@/assets/image/close.png') center no-repeat
              background-size 100%
          }
      }
        .props-con{
           width  100%
           max-height 280px
           border 1px solid #e5e5e5;
           border-bottom  none
           box-sizing border-box
           ul{
               width 100%
               box-sizing border-box
               li{
                height 50px
                line-height  50px
                float left
                text-align center
                border-left 1px solid #e5e5e5;
                border-bottom 1px solid #e5e5e5;
                box-sizing border-box
                font-size $normal-font
                color $color-text
               }
               li:first-child{
                width 95px
               }
               li:nth-child(2){
                width 120px
               }
               li:nth-child(3){
                width 175px
               }
               li:nth-child(4){
                width 208px
             }
           }
          ul:first-child{
            background-color #e7f5ff
            li{
                font-weight bold
            }
           }
        }
     }
     .props-bot{
         text-align right 
         span{
             margin 20px 0 40px
             text-align center
             display inline-block
             width 80px
             height 34px
             line-height 34px
             border 1px solid #e5e5e5
             font-size $normal-font
             border-radius 3px
             cursor pointer
         }
         .sure{
             background #45abf8
             color #fff
             margin-right 20px
         }
     }
    }
    @keyframes mymove
    {
    from {bottom:0px;}
    to {bottom:50px;}
    }

    @-webkit-keyframes mymove 
    {
    from {bottom:0px;}
    to {bottom:50px;}
    }
    @keyframes moveNews
    {
    from {top:215px;}
    to {top:0px;}
    }

    @-webkit-keyframes moveNews
    {
    from {top:215px;}
    to {top:0px;}
    }
}

</style>

