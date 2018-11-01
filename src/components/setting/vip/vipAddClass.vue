<template>
    <div class="page">
        <ul class="page-title">
            <li class="active" @click="goVipClass()">等级设置</li>
            <li @click="goGrowSeting()">成长值设置</li>
            <li @click="goRecordSeting()">档案设置</li>
            <li @click="goSuccessCode()">安全码</li>
            <li @click="goLabelSeting()">标签设置</li>
            <li @click="goSourceMgn()">来源管理</li>
        </ul>
        <div class="emp-cont">
            <div class="emp-t clearfix">
               <p class='cont-titles'><i></i><span>会员等级列表</span></p>
            </div>
            <ul class="add-store">
                <li>
                    <span class="add-left"><i>*</i>等级名称：</span>
                    <div class="add-right">
                        <input type="text" class="inputBox" placeholder="请输入8个字以内等级名称">
                    </div>
                </li>
                 <li>
                    <span class="add-left"><i>*</i>所需成长值：</span>
                    <div class="add-right">
                        <input type="text" class="inputBox" placeholder="请仅可输入数字">
                    </div>
                </li>
                <li>
                    <span class="add-left"><i>*</i>通用权益：</span>
                    <div class="add-right checkAllow">
                        <el-checkbox v-model="birRadio">生日短信祝福</el-checkbox>
                    </div>
                </li>
                <li>
                    <span class="add-left">折扣权益：</span>
                    <div class="add-right">
                       <div class="dis-count checkAllow">
                          <el-checkbox v-model="serverRadio">所有服务享</el-checkbox>
                          <el-input-number v-model="serverNum" controls-position="right"  :min="1" :max="10"></el-input-number><span class="count-text">折</span>
                       </div>
                       <div class="dis-count checkAllow">
                          <el-checkbox v-model="proRadio">所有商品享</el-checkbox>
                          <el-input-number v-model="proNum" controls-position="right"  :min="1" :max="10"></el-input-number><span class="count-text">折</span>
                       </div>
                    </div>
                </li>
                <li>
                    <span class="add-left">备注：</span>
                    <div class="add-right">
                        <textarea class="comment-text" name="" id="" cols="30" rows="10" placeholder="请输入200字以内备注"></textarea>
                    </div>
                </li>
                <div class="submit">
                    <p>提交</p>
                </div>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            birRadio: true, 
            serverRadio: true,
            serverNum:  " ",
            proRadio: true ,
            proNum: " "
        }
    },
    methods: {
        goVipClass() {
             this.$router.push({
             path: "/main/setting/vipAddClass"
           })
        },
        goGrowSeting() {
          this.$router.push({
             path: "/main/setting/growSeting"
          })
        }, 
       goRecordSeting() {
          this.$router.push({
             path: "/main/setting/recordSeting"
          })
        }, 
        goSuccessCode() {
          this.$router.push({
             path: "/main/setting/successCode"
          })
        },
        goLabelSeting() {
          this.$router.push({
             path: "/main/setting/labelSeting"
          })
        },  
        goSourceMgn() {
          this.$router.push({
             path: "/main/setting/sourceMgn"
          })
        }
    }
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
       border-bottom 1px solid #e5e5e5
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
      .addNews{
        width 90px
        height 30px
        line-height 30px
        text-align center
        background-color $color-light
        color #ffffff
        margin-right 5px
        margin-top 10px
        cursor pointer
      }
    }
  }
   .add-store{
        padding-top 20px
        width 100%
        text-align center
        .checkAllow{
            width 290px
            height 30px
            line-height 30px
            .check-text{
             display inline-block
             padding 0  5px 0 10px 
            }
        }
        .brnad-title{
         font-size $large-font
         text-align left 
         margin-top 40px
        }
        li:after {
            content:""; 
            display: block; 
            clear:both; 
        }
        li{
            width 520px
            margin 20px auto 0
            font-size $normal-font
            .add-left{
                float left
                display  inline-block
                height 30px
                line-height 30px
                display inline-block
                width 120px
                text-align right
                font-size $normal-font
                color $color-text
                i{
                    color red
                    margin-right 5px
                    font-style normal
                }
            }
            .inputBox{
              width 290px
              height 30px
              line-height 30px
              border 1px solid #eeeeee
              font-size $small-font
              padding-left 15px
              box-sizing border-box
              border-radius 2px
            }
            .add-right{
              float left
              width 390px
              display inline-block
              text-align left
              margin-left 10px
            >>>.el-input-number{
              width 160px
              margin 0 4px
            }
            >>>.el-input{
              height 30px
              line-height 30px
            }  
            >>>.el-input-number.is-controls-right .el-input-number__increase,
            >>>.el-input-number.is-controls-right .el-input-number__decrease{
               line-height 15px
            }
            .timeCheck{
                margin-top 20px
                p{  
                    float left
                    display inline-block
                    font-size 14px
                    height 30px
                    line-height 30px
                    margin: 0 10px
                }
                .el-date-editor.el-input{
                    width 114px
                    height 30px
                }
                .el-icon-time{
                    display none
                }
                .el-icon-time:before{
                   content: " "
                   display none
                }
                .el-input__icon{
                    display none
                }
              }
              .dis-count{
               margin-top 10px
              }
              .count-text{
               display inline-block
               margin-left 3px
              }
            }
            .comment-text{
              padding 7px 5px
              width 290px
              height 140px
              box-sizing border-box
              border 1px solid #eeeeee
            }
        }
        li:last-child{
          margin-top 30px
        }
    }
    .submit{
       padding 100px 0 50px
       p{
         display inline-block
         padding 0 35px
         height 45px
         line-height 45px
         border-radius 8px
         color #ffffff
         margin 0 auto
         background-color #39aafb
         font-size 16px
         cursor pointer
       }
    }
}
</style>