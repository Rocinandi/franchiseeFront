<template>
    <div class="page">
        <ul class="page-title">
            <li @click="goRderSetings()">预约模式</li>
            <li @click="goworkSetings()">排班管理</li>
            <li class="active">班次管理</li>
        </ul>
        <div class="emp-cont">
            <div class="emp-t clearfix">
               <p class='cont-titles'><i></i><span>班次管理</span></p>
                <div class="emp-from">
                    <p class="addNews" @click="dialogVisible = true">新增班次</p>
                </div>
            </div>
            <div class="cont-tab">
                <ul class="clearfix">
                    <li class="h-name">班次名称</li>
                    <li class="h-num">班次时间</li>
                    <li class="h-shop">使用人数</li>
                    <li class="h-opera">操作</li>
                </ul>
                <ul class="tableCon clearfix">
                    <li class="h-name">早班</li>
                    <li class="h-num">10:00 - 12:00</li>
                    <li class="h-shop">12</li>
                    <li class="h-opera" @click="dialogVisible = true">编辑</li>
                </ul>
                <ul class="tableCon clearfix">
                    <li class="h-name">中班</li>
                    <li class="h-num">10:00 - 12:00</li>
                    <li class="h-shop">12</li>
                    <li class="h-opera">编辑</li>
                </ul>
                <ul class="tableCon clearfix">
                    <li class="h-name">晚班</li>
                    <li class="h-num">10:00 - 12:00</li>
                    <li class="h-shop">12</li>
                    <li class="h-opera">编辑</li>
                </ul>
            </div>
        </div>
        <!-- 编辑弹窗 -->
        <el-dialog
        title="新增班次"
        :visible.sync="dialogVisible"
        width="30%">
        <div class="arrseting">
            <div class="setCheck clearfix">
                <span><i>*</i>时间范围：</span>
                <div class="setCheckInput clearfix" @mouseleave="checkTimeHide()" @click="checkTime()">
                    <input type="text" readonly class="el-dropdown-link" placeholder="周一至周日">
                    <transition name="el-fade-in-linear">
                        <ul class="dropDown clearfix" v-show="checkTimeIsShow">
                            <el-checkbox-group v-model="checkedWeeks">
                                <li v-for="week in weeks" :key="week">
                                    <el-checkbox :label="week">{{week}}</el-checkbox>
                                </li>
                                <li class="sure" @click="checkBusSure()"><p>确认</p></li>
                            </el-checkbox-group>
                        </ul>
                    </transition>
                </div>
            </div>
            <div class="setCheck">
                 <span>班次时间：</span>
                <div class="timeCheck clearfix">
                    <div class="startTimes">
                        <el-time-select
                            placeholder="8:30"
                            v-model="startTime"
                            :picker-options="{
                            start: '8:30',
                            step: '00:30',
                            end: '24:00'
                            }">
                        </el-time-select>
                    </div>
                    <p>
                        至
                    </p>
                    <div class="startTimes">
                            <el-time-select
                            placeholder="24:00"
                            v-model="endTime"
                            :picker-options="{
                            start: '08:30',
                            step: '00:30',
                            end: '24:00',
                            minTime: startTime
                            }">
                          </el-time-select>
                    </div>
                    <p class="addList">
                         添加休息时间
                    </p>
            </div>
        </div>
        </div>
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
            value2: true,
            dialogVisible: false
        }
    },
    methods:{
        goRderSetings() {
          this.$router.push({
              path: "/main/setting/orderSetings"
          })
        },
        goworkSetings() {
          this.$router.push({
              path: "/main/setting/workSetings"
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
        margin-top 10px
        border-radius 5px
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
               width 25%
            }
            .h-num{
               width 35%
            }
            .h-shop{
               width 25%
            }
            .h-opera{
               width 15%
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
                color $color-light
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
  .arrseting{
       text-align center
       padding 10px 0 20px
       .serverGroup{
        display inline-block  
        .serverRadio{
          margin-left 0
          margin-right 10px
        }
        .serverRadio:first-child{
           margin-right 30px
        }
        p{
          display inline-block 
          width 95px
          height 30px
          line-height 30px
          text-align center
          border 1px solid #eeeeee
          background-color #f8f8f8
          cursor pointer
        }
    }
    .setCheck{
       margin 15px auto 0
       text-align center
       span{
        display inline-block
        float left
        text-align right 
        width 140px
        height 30px
        line-height 30px
        i{
          font-style normal
          color red
          margin-right 3px
        }
       }
       .setCheckInput{
         float left
         box-sizing border-box
         text-align left
         color #999999
         border-radius 2px
         input{
            text-indent 15px
            width 255px
            height 30px
            line-height 30px
            border 1px solid #eeeeee
            box-sizing border-box
         }
        .dropDown{
          width 300px
          border 1px solid #eee
          border-top none
          background-color #ffffff
          box-sizing border-box
          z-index 2
          .sure{
          width 280px
          margin-top 10px
          color #ffffff
          p{
            width 80px
            height 30px
            line-height 30px
            border-radius 3px
            margin 0 auto
            background-color $color-light
            color #fff
           }
          }
          li{
              width 140px
              float left
              display inline-block
              box-sizing border-box
              text-align center
              cursor pointer
              margin-top 0
              height 45px
              line-height 45px
              span{
                  display inline-block
                  margin-left 5px
              }
          }
          li:hover{
              background-color #f8f8f8
          }
          }
       }
     }
    .timeCheck{
        margin-top 20px
        text-align left 
        p{  
            display inline-block
            font-size 14px
            height 30px
            line-height 30px
            margin: 0 3px
        }
        .startTimes{
          display inline-block
          width 114px
          box-sizing border-box
        }
        .el-date-editor.el-input{
          width 114px
        }
        .el-scrollbar__view{
          width 114px
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
        .addList{
          display inline-block
          font-size 12px
          padding 0 10px
          height 30px
          text-align center
          line-height 30px
          cursor pointer
          border 1px solid #eeeeee
          border-radius 4px
        }
    }
  }
}

</style>