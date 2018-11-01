<template>
       <div class="page">
            <ul class="page-title">
                <li class="active">预约模式</li>
                <li @click="goworkSetings()">排班管理</li>
                <li @click="goclassesSetings()">班次管理</li>
            </ul>
            <div class="page-con">
                <div class="emp-t">
                  <p class='cont-titles'><i></i><span>模式设置</span></p>
                </div>
                <div class="order-seting">
                    <ul>
                      <li>
                        <span class="time-scope">时间范围：</span>
                          <el-tooltip class="item" effect="dark" content="顾客可预约的时间范围" placement="top-start">
                           <span class="order-help">
                            <i class="icon-help"></i>
                            <span>帮助</span>
                          </span>
                          </el-tooltip>
                        <p class="time-b">
                           <span class="time-text">规则：</span>
                          顾客按照准确排班时间预约技师。
                          <span class="goClass" @click="goclassesSetings()">排班管理</span>
                        </p>
                      </li>
                       <li>
                        <span class="time-scope">占用时长：</span>
                        <el-tooltip class="item" effect="dark" content="顾客预约到某个时间点后，将占用的时间长度" placement="top-start">
                          <span class="order-help">
                            <i class="icon-help"></i>
                            <span>帮助</span>
                          </span>
                        </el-tooltip>
                        <p class="time-b">
                           <span class="time-text">规则：</span>
                          顾客预约服务时将占用固定时长。
                            <el-select v-model="value" placeholder="60分钟">
                            <el-option
                              v-for="item in options"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </p>
                      </li>
                      <li>
                        <span class="time-scope">限制人数：</span>
                        <el-tooltip class="item" effect="dark" content="每个时段间隔可预约的限制数量" placement="top-start">
                          <span class="order-help">
                            <i class="icon-help"></i>
                            <span>帮助</span>
                          </span>
                        </el-tooltip>
                        <div class="time-b clearfix">
                           <span class="time-texts"></span>
                           <div class="time-r">
                             <p><el-radio v-model="radio" label="1">每段时间段可预约 <input type="text" placeholder="10">  人，推荐客流均匀的门店使用</el-radio></p>
                             <p><el-radio v-model="radio" label="2">每位技师在每段时间最多可预约 <input type="text" placeholder="10">人，推荐客流不均匀的门店使用</el-radio></p>
                           </div>
                           <p class="warm-text">例如：上午客人较少，有 2 位技师上班，同一时间可预约 2 位顾客，下午客人较多，有 4 位技师上班，同一时间可预约 4 位顾客.</p>
                        </div>
                      </li>
                    </ul>
                    <div class="save">
                       <p>保存</p>
                    </div>
                </div>
            </div>    
       </div>
</template>

<script>
export default {
  data() {
        return {
        options: [{
          value: '选项1',
          label: '15分钟'
        }, {
          value: '选项2',
          label: '30分钟'
        }, {
          value: '选项3',
          label: '60分钟'
        }, {
          value: '选项4',
          label: '90分钟'
        }, {
          value: '选项5',
          label: '120分钟'
        },{
          value: '选项6',
          label: '150分钟'
        },{
          value: '选项7',
          label: '180分钟'
        }
        ],
        value: '',
        radio: '1'
      }
    },
    methods:{
        goworkSetings() {
          this.$router.push({
              path: "/main/setting/workSetings"
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

.el-select{
  width 110px
  >>>.el-input__icon{
    height 30px
    line-height 30px
  }
}
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
      .order-seting{
        padding-top 40px
        padding-left 100px
        li{
          margin-bottom: 20px;
          .time-scope{
            display inline-block
            width 70px
            text-align right
            font-size: 14px;
            font-weight bold
          }
          .time-b{
           margin-top: 10px;
           .goClass{
            display inline-block
            width 110px
            height 30px
            line-height 30px
            text-align center
            border 1px solid #eeeeee
            background-color #f8f8f8
            color #999999
            cursor pointer
           }
           .time-r{
              margin-left 75px
              p{
                margin-bottom 10px
                input{
                  width 70px
                  height 30px
                  line-height 30px
                  background-color #f8f8f8
                  border 1px solid #eeeeee
                  text-align center
                }
              }
            }
          }
          .time-text{
            display inline-block
            width 70px
            text-align right
          }
          .time-texts{
            display inline-block
            width 70px
            text-align right
            float left
          }
          .order-help{
            font-size 14px
            color #ffb400
            cursor pointer
            .icon-help{
              font-size 18px
            }
          }
        }
        .warm-text{
         color #999999
         margin-left 80px
        }
      }
    }
    .save{
       padding 150px 0 110px
       font-size 18px
       p{
        cursor pointer
        border-radius 8px
        width 160px
        height 50px
        line-height 50px
        text-align center
        color #ffffff
        background-color #39aafb
        margin 0 auto
       }
    }
}  

</style>
