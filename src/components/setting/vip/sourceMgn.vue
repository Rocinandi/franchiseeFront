<template>
    <div class="page">
        <ul class="page-title">
            <li @click="goVipClass()">等级设置</li>
            <li @click="goGrowSeting()">成长值设置</li>
            <li @click="goRecordSeting()">档案设置</li>
            <li @click="goSuccessCode()">安全码</li>
            <li @click="goLabelSeting()">标签设置</li>
            <li class="active"  @click="goSourceMgn()">来源管理</li>
        </ul>
        <div class="emp-cont">
            <div class="emp-t clearfix">
               <p class='cont-titles'><i></i><span>来源管理</span></p>
                <div class="emp-from">
                    <p class="addNews" @click="addlabel()">新增来源</p>
                </div>
            </div>
            <div class="cont-tab">
                <ul class="clearfix">
                    <li class="h-name">来源名称</li>
                    <li class="h-num">会员数</li>
                    <li class="h-shop">备注</li>
                    <li class="h-pos">添加时间</li>
                    <li class="h-opera">操作</li>
                </ul>
                <ul class="tableCon clearfix">
                    <li class="h-name">线上顾客</li>
                    <li class="h-num">1223</li>
                    <li class="h-shop">累计消费超过5000元累计消费超过5000元累计消费超过5000元累计消费超过5000元累计消费超过5000元累计消费超过5000元+累计充值超过1000元+参加活动数超过</li>
                    <li class="h-pos">2018-10-10 10:10:10</li>
                    <li class="h-opera">
                        <span>编辑</span>
                        <span>删除</span>
                    </li>
                </ul>
                <ul class="tableCon clearfix">
                    <li class="h-name">线下预约</li>
                    <li class="h-num">1223</li>
                    <li class="h-shop">累计消费超过5000元累计消费超过5000元累计消费超过5000元累计消费超过5000元累计消费超过5000元累计消费超过5000元+累计充值超过1000元+参加活动数超过</li>
                    <li class="h-pos">2018-10-10 10:10:10</li>
                    <li class="h-opera">
                        <span>编辑</span>
                        <span>删除</span>
                    </li>
                </ul>
                 <ul class="tableCon clearfix">
                    <li class="h-name">手工录入</li>
                    <li class="h-num">1223</li>
                    <li class="h-shop">累计消费超过5000元累计消费超过5000元累计消费超过5000元累计消费超过5000元累计消费超过5000元累计消费超过5000元+累计充值超过1000元+参加活动数超过</li>
                    <li class="h-pos">2018-10-10 10:10:10</li>
                    <li class="h-opera">
                        <span>编辑</span>
                        <span>删除</span>
                    </li>
                </ul>
                <ul class="tableCon clearfix">
                    <li class="h-name">外部导入</li>
                    <li class="h-num">1223</li>
                    <li class="h-shop">累计消费超过5000元累计消费超过5000元累计消费超过5000元累计消费超过5000元累计消费超过5000元累计消费超过5000元+累计充值超过1000元+参加活动数超过</li>
                    <li class="h-pos">2018-10-10 10:10:10</li>
                    <li class="h-opera">
                        <span>编辑</span>
                        <span>删除</span>
                    </li>
                </ul>
                <ul class="tableCon clearfix">
                    <li class="h-name">主动进店</li>
                    <li class="h-num">1223</li>
                    <li class="h-shop">累计消费超过5000元累计消费超过5000元累计消费超过5000元累计消费超过5000元累计消费超过5000元累计消费超过5000元+累计充值超过1000元+参加活动数超过</li>
                    <li class="h-pos">2018-10-10 10:10:10</li>
                    <li class="h-opera">
                        <span>编辑</span>
                        <span>删除</span>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 弹窗 -->
        <el-dialog
            title="新增来源"
            :visible.sync="dialogVisible"
            width="30%">
             <ul class="add-store">
                <li>
                    <span class="add-left"><i>*</i>新增来源：</span>
                    <div class="add-right">
                        <input type="text" class="inputBox" placeholder="请输入8个字以内的来源名称">
                    </div>
                </li>
                <li>
                    <span class="add-left">备注：</span>
                    <div class="add-right">
                       <textarea name="" id="" cols="30" rows="10" placeholder="请输入200字以内备注"></textarea>
                    </div>
                </li>
            </ul>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false,
        }
    },
    methods: {
       addlabel() {
           this.dialogVisible = true
       },
          // 路径跳转
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
      .addNews{
        display inline-block
        padding  0 20px
        height 30px
        line-height 30px
        text-align center
        background-color $color-light
        color #ffffff
        margin-right 5px
        margin-top 10px
        cursor pointer
        border-radius 2px
      }
    }
    .cont-tab{
        width 100%
        ul{
            width 100%
            height 50px
            line-height 50px
            background-color #fff
            box-sizing border-box
            li{ 
                height 100%
                float left
                display inline-block
                font-size $normal-font
                box-sizing border-box
                text-align center
                border-right 1px solid #e1e1e1
                border-bottom 1px solid #e1e1e1
                text-align: center;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
            }
            li:first-child{
               border-left 1px solid #e1e1e1 
            }
            li:last-child{
               border-right 1px solid #e1e1e1 
            }
            .h-name{
               width 17%
            }
            .h-num{
               width 14%
            }
            .h-shop{
               width 36%
            }
            .h-pos{
              width 15%
            }
            .h-opera{
               width 18%
               span:last-child{
                   display inline-block
                   margin-left 15px
               }
            }
        }
        ul:first-child{
            background-color #e7f5ff
            li{
                color #062b7b
            }
        }
        .tableCon{
            .h-allow{
                color #ff0000
            }
            .h-noallow{
                color #ff0018
            }
            .h-opera{
              color $color-light
              cursor pointer
            }
            .h-comment{
              color #999999
              text-align center
            }
            .h-text{
               width 100%
               text-align center
               display: -webkit-box;
               -webkit-box-orient: vertical;
               -webkit-line-clamp: 1;
               overflow: hidden;
            }
            .el-switch{
              width 40px
            }
            .el-switch__core{
              height 24px
            }
        }
    }
  }
   .add-store{
        width 100%
        text-align center
        li:after {
            content:""; 
            display: block; 
            clear:both; 
        }
        li{
            width 360px
            margin 10px auto 0
            font-size $normal-font
            .add-left{
                float left
                display  inline-block
                height 30px
                line-height 30px
                display inline-block
                width 100px
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
              width 250px
              height 30px
              line-height 30px
              border 1px solid #eeeeee
              font-size $small-font
              padding-left 5px
              box-sizing border-box
              border-radius 2px
            }
            .addcasader{
               margin-bottom 20px
            }
            .checkbox{
                cursor pointer
            }
            .add-right{
              float left
              width 250px
              display inline-block
              text-align left
              margin-left 5px
              p{
                  height 30px
                  line-height 30px
                  margin-bottom 10px
                  input{
                      width 90px
                      padding-left 5px
                      bpx-sizing border-box
                      height 30px
                      border 1px solid #eeeeee
                      margin 0 5px
                  }
              }
              textarea{
                 width 250px
                 height 100px
                 border 1px solid #eeeeee
                 box-sizing border-box
                 padding 7px
              }
            }
        }
   }
}
</style>