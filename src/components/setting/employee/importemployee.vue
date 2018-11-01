<template>
       <div class="page">
          <div class="emp-cont">
              <div class="emp-t clearfix">
                <p class='cont-titles'><i></i><span> 导入员工</span></p>
              </div>
              <div class="imp-cont">
                <div class="cont-t clearfix">
                  <div>模板下载</div>
                  <div>文件上传</div>
                </div>
                <div class="cont-b clearfix">
                  <div class="cont-down">
                       <p class="down-btn">下载导入模板</p>
                       <p>支持xlsx、csv文件格式   每次最多导入1万条记录</p>
                  </div>
                  <div class="cont-up">
                       <div class="up-xlsx">
                           <i class="icon-tubiao-"></i>
                           <span class="up-text">点击或拖动文件上传</span>
                           <span class="up-warn">仅支持单个文件上传。严禁上传包含色情、暴力、反动等相关违法信息的文件</span>
                       </div>
                  </div>
                </div>
                <div class="submit">
                  <p>提交</p>
                </div>
              </div>
          </div>
       </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/mixin';

.page{
    min-height calc(100vh - 150px)
    font-size $normal-font
    color $color-text
    background-color #fff
    .clearfix:after {
    content:""; 
    display: block; 
    clear:both; 
    }
    .page-title{
      height 46px
      background-color #ffffff
      padding 0 15px
      li{
        float left
        height 46px
        line-height 46px
        text-align center
        margin-right 20px
        font-size $normal-font
        cursor pointer
      }
      .active{
        color $color-light
        border-bottom 2px solid $color-light
     }
    }
  .emp-cont{
    width 100%
    background-color #ffffff
    border-top 20px solid #f6f6f6
    .emp-t{
       box-sizing  border-box
       border 1px solid #e5e5e5
    }
    .cont-titles{
    float left
    height 50px
    line-height 50px
    display flex
    flex-direction row
    align-content center
    font-size $normal-font
    color $color-text
    i{
      display inline-block
      height 20px
      width 2px
      background-color #0e77e3
      margin 15px 10px 0 0
    }
    }
    .emp-from{
      height 50px
      float right
      .search{
        display inline-block
        relative()
        width 215px
        height 30px
        margin-top 10px
        margin-right 50px
        .searchInput{
          width 215px
          height 30px
          border 1px solid #eeeeee
          box-sizing border-box
          padding-left 12px
          background-color #f8f8f8
       }
      .icon-fangdajing{
        color $color-light
        font-size 20px
        absolute()
        right 12px
        top 5px
        cursor pointer
        }
      }
      p{
        display inline-block
      }
      .selects{
         min-width 115px
         height 30px
         line-height 30px
         background-color #f8f8f8
         border 1px solid #eeeeee
         box-sizing border-box 
         margin-right 20px
         cursor pointer
         .el-input__inner{
           height 30px
          line-height 30px
        }
      }
      p{
         width 115px
         text-align center
         height 30px
         line-height 30px
         background-color #f8f8f8
         border 1px solid #eeeeee
         box-sizing border-box 
         color $color-text
         margin-right 20px
         cursor pointer
      }
      .addNews{
        background-color $color-light
        color #ffffff
        margin-right 5px
      }
    }
    .imp-cont{
      width 100%
      background-color #ffffff
      .cont-t{
         width 100%
         height 60px
         line-height 60px
         background-color #e7f5ff
        div{
        border 1px solid #eeeeee
        border-top none
        display inline-block
        width 50%
        box-sizing border-box
        float left
        padding-left 20px
        color #062b7b
        font-size $normal-font
       }
       div:first-child{
         border-right none
       }
      }
      .cont-b{
         width 100%
         background-color #ffffff
         .cont-down{
          text-align center
          width 50%
          height 420px
          display inline-block
          border 1px solid #eeeeee
          float left
          border-right none
          box-sizing border-box
          .down-btn{
          width 160px
          margin 150px auto 0
          height 38px
          line-height 38px
          text-align center
          background-color $color-light
          color #ffffff
          border-radius 8px
          cursor pointer
          }
          p{
            margin-top 20px
          }
        }
        .cont-up{
          width 50%
          height 420px
          display inline-block
          border 1px solid #eeeeee
          float left
          box-sizing border-box
          .up-xlsx{
             width 300px
             height 180px
             border 1px dashed $color-light
             margin  100px  auto  0 
             text-align center
             cursor pointer
             .icon-tubiao-{
               font-size 60px
               color #8bcfff
               margin 20px auto 0
               display block
             }
             .up-text{
                 display block
                 color #333333 
                 margin 10px 0 5px
               }
               .up-warn{
                width 230px
                margin 0 auto
                display block
                color #999999
                font-size $small-font
              }
          }
        }
     }
    }
  }
  .submit{
     width 160px
     height 50px
     color #ffffff
     background-color $color-light
     border-radius 8px
     line-height 50px
     text-align center
     font-size 18px
     margin 30px auto 100px
     cursor pointer
  }
}  

</style>
