<template>
    <div class="page">
        <ul class="page-title">
            <li @click="goRderSetings()">预约模式</li>
            <li class="active">排班管理</li>
            <li @click="goclassesSetings()">班次管理</li>
        </ul>
        <div class="emp-cont">
            <div class="emp-t clearfix">
               <p class='cont-titles'><i></i><span>排班列表</span></p>
            </div>
            <div class="cont-tab">
                <ul class="clearfix">
                    <li class="h-name">姓名</li>
                    <li class="h-num">手机号</li>
                    <li class="h-week">周一</li>
                    <li class="h-week">周二</li>
                    <li class="h-week">周三</li>
                    <li class="h-week">周四</li>
                    <li class="h-week">周五</li>
                    <li class="h-week">周六</li>
                    <li class="h-week">周日</li>
                    <li class="h-opera">操作</li>
                </ul>
                <ul class="tableCon clearfix">
                    <li class="h-name">张三</li>
                    <li class="h-num">13800138000</li>
                    <li class="h-week">休息</li>
                    <li class="h-week">10：00-20:00</li>
                    <li class="h-week">10：00-20:00</li>
                    <li class="h-week">10：00-20:00</li>
                    <li class="h-week">10：00-20:00</li>
                    <li class="h-week">10：00-20:00</li>
                    <li class="h-week">10：00-20:00</li>
                    <li class="h-opera" @click="dialogVisible = true">设置排班</li>
                </ul>
            </div>
        </div>
        <!-- 编辑弹窗 -->
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%">
          <div class="arrseting">
                    <div class="arrseting-list">
                        <span class="text-list">技师：</span>
                        <div class="serverGroup">
                            <span>卷毛 13800138000</span>
                        </div>
                    </div>
                    <div class="arrseting-list">
                        <span class="text-list">排班方式：</span>
                        <div class="serverGroup">
                            <el-radio class="serverRadio" v-model="radio" label="1">默认排班</el-radio>
                            <el-radio class="serverRadio"  v-model="radio" label="2">自定义排班</el-radio>
                            <p class="goClasses">班次管理</p>
                        </div>
                    </div>
                    <div class="setCheck clearfix">
                    <span class="text-list"><i>*</i>时间范围：</span>
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
const cityOptions = ['周一', '周二','周三','周四','周五','周六','周日']

export default {
    data() {
        return {
            value2: true,
            dialogVisible: false,
            radio: "1",
            checkedlist: true,
            checkTimeIsShow: false,
            checkedWeeks: ['周一', '周二','周三','周四','周五','周六','周日'],
            weeks : cityOptions,
            startTime: '',
            endTime: '',
        }
    },
    methods:{
        goRderSetings() {
          this.$router.push({
              path: "/main/setting/orderSetings"
          })
        },
        goclassesSetings() {
          this.$router.push({
              path: "/main/setting/classesSetings"
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
               width 9%
            }
            .h-num{
               width 12%
            }
            .h-week{
               width 9%
            }
            .h-opera{
               width 16%
               cursor pointer
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
       width 80%
       margin 0 auto
       padding 30px 0
       >>>.el-input__prefix{
          .el-input__icon{
            height 30px
            line-height 30px
          }
       }
       .arrseting-list{
          .text-list{
           display inline-block
           width 100px
           text-align right  
          }
        }
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
    }
    .setCheck{
       margin 15px auto 0
       text-align center
       span{
        display inline-block
        float left
        text-align right 
        width 100px
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
         input{
            text-indent 15px
            width 280px
            height 30px
            line-height 30px
            border 1px solid #eeeeee
            box-sizing border-box
         }
        .dropDown{
          width 280px
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
        p{  
            display inline-block
            font-size 14px
            height 30px
            line-height 30px
            margin: 0 10px
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
        .startTimes:first-child{
          margin-left 100px 
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
}

</style>