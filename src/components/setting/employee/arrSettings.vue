<template>
      <div class="page">
            <ul class="page-title">
                <li @click="goAddEmployee()">基本信息</li>
                <li @click="goContactService()">关联服务</li>
                <li  class="active" @click="goArrSettings()">排班设置</li>
                <li @click="goPushMoney()">提成设置</li>
            </ul>
            <div class="page-con">
                <div class="emp-t">
                  <p class='cont-titles'><i></i><span>排班设置</span></p>
                </div>
                <div class="arrseting">
                     <div>
                       <span>排班方式：</span>
                       <div class="serverGroup">
                           <el-radio class="serverRadio" v-model="radio" label="1">默认排班</el-radio>
                           <el-radio class="serverRadio"  v-model="radio" label="2">自定义排班</el-radio>
                           <p class="goClasses" @click="goClasses()">班次管理</p>
                       </div>
                     </div>
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
                   <div class="page-button">
                        <p class="backStep" @click="goContactService()">上一步</p>
                        <p class="nextStep" @click="goPushMoney()">下一步</p>
                    </div>
                </div>
            </div>
      </div>    
</template>

<script>
const cityOptions = ['周一', '周二','周三','周四','周五','周六','周日']

export default {
  data() {
     return {
       radio: "1",
       checkedlist: true,
       checkTimeIsShow: false,
       checkedWeeks: ['周一', '周二','周三','周四','周五','周六','周日'],
       weeks : cityOptions,
       startTime: '',
       endTime: '',
     }
  },
  methods: {
        checkTime() {
           this.checkTimeIsShow = true
        },
        checkTimeHide() {
            this.checkTimeIsShow = false
        },
        checkBusSure() {
            this.checkTimeIsShow = false
            console.log(this.checkedWeeks);
        },
        goClasses() {
            this.$router.push({
               path: "/main/setting/classesSetings"
            })
        },
        // 路径跳转
        goAddEmployee () {
          this.$router.push({
              path: "/main/setting/addEmployee"
          })
        },
        goContactService () {
          this.$router.push({
              path: "/main/setting/contactService"
          })
        },
        goArrSettings () {
          this.$router.push({
              path: "/main/setting/arrSettings"
          })
        },
        goPushMoney () {
          this.$router.push({
              path: "/main/setting/pushMoney"
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
    .page-con{
      background-color #fff
      width 100%
      margin-top 20px
      .emp-t{
        box-sizing  border-box
        border-bottom 1px solid #e5e5e5
        .cont-titles{
            height 50px
            line-height 50px
            display flex
            flex-direction row
            align-content center
            font-size $normal-font
            color $color-text
        }
      i{
            display inline-block
            height 20px
            width 2px
            background-color #0e77e3
            margin 15px 10px 0 0
        }
      }
    .arrseting{
       text-align center
       padding 30px 0
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
       width 440px
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
         input{
            text-indent 15px
            width 300px
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
          >>>.el-input__icon{
            height 30px
            line-height 30px
          }
        }
        .el-scrollbar__view{
          width 114px
        }
        .startTimes:first-child{
          margin-left 120px 
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
      .page-button{
          margin 40px auto 0
          text-align center
          p{
              display inline-block
              width 100px
              height 40px
              line-height 40px
              text-align center
              color #ffffff
              background-color #e1e1e1
              border-radius 8px
              font-size 18px
              cursor pointer
          }
          .backStep{
              margin-left 75px
          }
          .nextStep{
            background-color $color-light
            margin-left 25px
         }
        }
    } 
} 

</style>

