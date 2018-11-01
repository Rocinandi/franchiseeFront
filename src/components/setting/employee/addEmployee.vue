<template>
    <div>
        <div class="page">
            <ul class="page-title">
                <li class="active" @click="goAddEmployee()">基本信息</li>
                <li @click="goContactService()">关联服务</li>
                <li @click="goArrSettings()">排班设置</li>
                <li @click="goPushMoney()">提成设置</li>
            </ul>
            <div class="emp-cont">
                <div class="emp-t clearfix">
                  <p class='cont-titles'><i></i><span>门店信息</span></p>
                </div>
                <ul class="add-cont">
                    <li class="clearfix">
                        <span class=""><i>*</i>所属门店：</span>
                        <div class="add-right">
                           <div class="checkstroe"  @click="checkstroeFun()">{{stroe}}</div>
                        </div>
                    </li>
                    <li class="clearfix">
                        <span><i>*</i>岗位：</span>
                        <div class="add-right">
                        <el-select class="selects" v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        </div>
                    </li>
                    <li class="clearfix">
                        <span>所属门店：</span>
                        <div class="add-right">
                            <el-radio v-model="allow" label="1">允许</el-radio>
                            <el-radio v-model="allow" label="2">不允许</el-radio>
                        </div>
                    </li>
                    
                </ul>
            </div>
            <div class="emp-cont">
                <div class="emp-t clearfix">
                  <p class='cont-titles'><i></i><span>人员信息</span></p>
                </div>
                <ul class="add-cont">
                    <li class="clearfix">
                        <span class=""><i>*</i>系统账号:</span>
                        <div class="add-right">
                           <input type="text" placeholder="hdsui">
                        </div>
                    </li>
                    <li class="clearfix">
                        <span><i>*</i>姓名:</span>
                        <div class="add-right">
                             <input type="text" placeholder="请输入姓名">
                        </div>
                    </li>
                    <li class="clearfix">
                        <span><i>*</i>联系电话:</span>
                        <div class="add-right">
                             <input type="text" placeholder="请输入手机号">
                        </div>
                    </li>
                    <li class="clearfix">
                        <span><i>*</i>登录密码:</span>
                        <div class="add-right">
                             <input type="text" placeholder="请输入6-18位字母+数字密码">
                        </div>
                    </li>
                    <li class="clearfix">
                        <span><i>*</i>备注:</span>
                        <div class="add-right">
                            <textarea name="" id="" cols="30" rows="10" placeholder="请输入备注"></textarea>
                        </div>
                    </li>
                    
                </ul>
              
            </div>
            <div class="nextStep" @click="goNextStep()">
                <p>下一步</p>
            </div>
            <!-- 弹窗 -->
            <el-dialog
            title="选择门店"
            :visible.sync="dialogVisible"
            width="30%">
            <ul class="choseShop">
               <el-radio-group v-model="radio" @change="checkStroeOver">
               <li><el-radio :label="1">总店</el-radio></li>
               <li><el-radio :label="2">门店1</el-radio></li>
               <li><el-radio :label="3">门店2</el-radio></li>
               <li><el-radio :label="4">门店3</el-radio></li>
               <li><el-radio :label="5">门店4</el-radio></li>
               <li><el-radio :label="6">门店5</el-radio></li>
                </el-radio-group>
            </ul>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            radio: '1',
            allow: '1',
            dialogVisible: false,
            stroe: '请选择',
            options: [{
            value: '选项1',
            label: '超级管理员'
            }, {
            value: '选项2',
            label: '财务'
            }],
            value: ""
        }
    },
    methods: {
        checkstroeFun() {
           this.dialogVisible = true
        },
        //  接收改变的值
        checkStroeOver(val) {
            console.log(val)
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
        },
        goNextStep() {
            this.$router.push({
                path: '/main/setting/contactService'
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
    }
    .add-cont{
        width 400px
        background-color #ffffff
        margin 0 auto 
        padding 30px 0
        li{
            margin-top 20px
            color $color-text
            span{
                float left
                display inline-block
                width 80px
                height 30px
                line-height 25px
                text-align right
                i{
                    display inline-block
                    margin-right 2px
                    font-style normal
                    color red
                }
            }
            .add-right{
                float left
                display inline-block
                width 300px
                margin-left 10px
                input{
                    width 100%
                    height 30px
                    line-height 30px
                    box-sizing border-box
                    border 1px solid #eeeeee
                    border-radius 2px
                    color #999
                    padding-left 12px
                    font-size $small-font
                }
                textarea{
                    width 100%
                    height 110px
                    box-sizing border-box
                    border 1px solid #eeeeee
                    color #999
                    padding-left 12px
                    padding-top 10px
                    font-size $small-font
                    border-radius 2px
                }                
                select{
                    width 300px
                    border 1px solid #eeeeee
                    color #999
                    height 30px
                    line-height 30px
                    padding-left 12px
                    font-size $small-font
                    border-radius 2px
                }
                .checkstroe{
                    width 100%
                    height 30px
                    line-height 30px
                    box-sizing border-box
                    border 1px solid #eeeeee
                    padding-left 12px
                    color #999999
                    cursor pointer
                    font-size $small-font
                    border-radius 2px
                }
                >>>.el-select{
                   width 300px
                   height 30px
                   line-height 30px
                   .el-input{
                    height 30px
                    line-height 30px
                    .el-input__inner{
                    height 30px
                    line-height 30px
                    }
                    .el-input__icon{
                    height 30px
                    line-height 30px
                    }
                  }
                }
            }
        }
    }
    .nextStep{
        color #ffffff
        width 160px
        height 50px
        margin: 100px auto 180px
        line-height 50px
        background-color $color-light
        text-align center
        border-radius 5px
        cursor pointer
        font-size 18px
    }
    .choseShop{
        width 100%
        padding 0 20px
        box-sizing border-box
        li{
            display inline-block
            width 20%
            line-height 40px
            margin 10px 0 0 15px
            cursor pointer
        }
        li:first-child{
            padding-left 15px
            padding-bottom 10px
            width 100%
            border none
            margin  0
            border-bottom 1px dashed #e1e1e1
        }
    }
}
</style>

