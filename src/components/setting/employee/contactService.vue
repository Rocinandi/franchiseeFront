<template>
   <div class="page">
            <ul class="page-title">
                <li @click="goAddEmployee()">基本信息</li>
                <li class="active"  @click="goContactService()">关联服务</li>
                <li @click="goArrSettings()">排班设置</li>
                <li @click="goPushMoney()">提成设置</li>
            </ul>
            <div class="emp-cont">
                <div class="emp-t clearfix">
                  <p class='cont-titles'><i></i><span>关联服务</span></p>
                </div>
                <div class="page-cont">
                    <div class="check-server">
                         <div>
                            <span class="check-text">选择服务：</span>
                            <el-radio-group v-model="radio3" @change="getCheckBoxIndex">
                                <el-radio label="1">所有服务</el-radio><el-radio label="2">自定义服务</el-radio><el-radio label="3" >不关联服务</el-radio>
                            </el-radio-group>
                         </div>
                         <div class="clearfix checkServer" v-show="serverIsShow">
                             <span><i>*</i>服务项目：</span>
                               <el-checkbox-group class="serverGroup" v-model="checkList">
                                    <el-checkbox label="1" ></el-checkbox>
                                    <el-checkbox label="2"></el-checkbox>
                                    <el-checkbox label="3"></el-checkbox>
                               </el-checkbox-group>
                         </div>
                    </div>
                    <div class="page-button">
                        <p class="backStep" @click="goAddEmployee()">上一步</p>
                        <p class="nextStep" @click="goArrSettings()">下一步</p>
                    </div>
                </div>
         </div>    
   </div>
</template>

<script>
export default {
    data() {
        return {
            radio3: ' ',
            value:' ',
            checkList: ['1'],
            serverIsShow: false
        }
    },
    methods: {
        getCheckBoxIndex(value) {
            if(value=="2"){
                this.serverIsShow = true
            }else{
                this.serverIsShow = false
            }
        },
        goAddEmployee() {
            this.$router.push({
                path: '/main/setting/addEmployee'
            })
        },
        goArrSettings() {
            this.$router.push({
                path: '/main/setting/arrSettings'
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
      .active{
        color $color-light
        border-bottom 2px solid $color-light
     }
    }
    .emp-cont{
        width 100%
        background-color #ffffff
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
      .page-cont{
          width 100%
          padding 50px 0 30px
          text-align center
          .check-server{
            margin 0 auto 60px
            .check-text{
              display inline-block
              margin-right 5px
            }
            .checkServer{
                margin-top 30px
                span{
                  i{
                   font-style normal
                   color red
                  }
                }
            }
            .serverGroup{
              display inline-block
            }
        }
        .page-button{
          margin 0 auto
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
          .nextStep{
            background-color $color-light
            margin-left 25px
         }
        }
      }
    }
}

</style>
