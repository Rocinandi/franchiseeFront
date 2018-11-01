<template>
      <div class="page">
            <ul class="page-title">
                <li @click="goAddEmployee()">基本信息</li>
                <li @click="goContactService()">关联服务</li>
                <li @click="goArrSettings()">排班设置</li>
                <li class="active" @click="goPushMoney()">提成设置</li>
            </ul>
            <div class="page-con">
                <div class="emp-t">
                  <p class='cont-titles'><i></i><span>提成设置</span></p>
                </div>
                <ul class="push-cont">
                    <li>
                        <span>服务提成：</span>
                         <el-select v-model="serverValue" placeholder="请选择">
                            <el-option
                            v-for="item in serverList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </li>
                    <li><span>卡项提成：</span>
                        <el-select v-model="cardValue" placeholder="请选择">
                                <el-option
                                v-for="item in cardList"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                        </el-select>
                    </li>
                    <li><span>产品提成：</span>
                        <el-select v-model="proValue" placeholder="请选择">
                                <el-option
                                v-for="item in proList"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                        </el-select>
                    </li>
                    <li><span>门店总提成：</span>
                    <el-select v-model="shopValue" placeholder="请选择">
                            <el-option
                            v-for="item in shopList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </li>
                </ul>
                <div class="saveNew">
                    <p>保存</p>
                </div>
            </div>
            <p class="pushText">说明：如果选择技师则显示关联服务及排班设置，其他岗位不显示。</p>
      </div>    
</template>

<script>
export default {
  data() {
     return {
       radio: "1",
       serverValue: '',
       cardValue: '',
       proValue: '',
       shopValue: '',
       serverList: [{
          value: '选项1',
          label: '方案1'
        }, {
          value: '选项2',
          label: '方案2'
        }],
        cardList: [{
          value: '选项1',
          label: '方案1'
        }, {
          value: '选项2',
          label: '方案2'
        }],
        proList: [{
          value: '选项1',
          label: '方案1'
        }, {
          value: '选项2',
          label: '方案2'
        }],
        shopList: [{
          value: '选项1',
          label: '方案1'
        }, {
          value: '选项2',
          label: '方案2'
        }],
     }
  },
  methods: {
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
      text-align center
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
    }
    .push-cont{
        padding 40px 0 20px
        margin-bottom 40px
       li{
           margin-top 20px
        }
       span{
           display inline-block
           width 100px
           height 30px
           line-height 30px
           text-align right
           margin-right 5px
       }
       select{
           width 240px
           height 30px
           line-height 30px
           border 1px solid #eeeeee
           padding-left 5px
       }
        >>>.el-input__icon{
             height 30px
             line-height 30px
        }
    }
    .saveNew{
       padding-bottom 20px
       p{
        width 110px
        height 45px
        line-height 45px
        color #ffffff
        background-color $color-light
        text-align center
        font-size 18px
        border-radius 5px
        margin 0 auto 
        cursor pointer
       }
    }
    .pushText{
      color #ffd200
      font-size 14px
      padding 20px 0 0 25px
    }
} 

</style>

