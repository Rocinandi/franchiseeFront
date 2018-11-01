<template>
    <div class="page">
       <div class="emp-cont">
            <div class="emp-t clearfix">
               <p class='cont-titles'><i></i><span>牌品认证</span></p>
            </div>
       </div>    
        <ul class="add-store">
            <li class="brnad-title"><p>主体信息</p></li>
            <li>
                <span class="add-left">主体类型：</span>
                <div class="add-right checkAllow">
                        <el-radio-group v-model="radio2" @change="changType">
                        <el-radio :label="1">个人</el-radio>
                        <el-radio :label="2">公司</el-radio>
                        <el-radio :label="3">公益组织</el-radio>
                    </el-radio-group>
                </div>
            </li>
            <li>
                <span class="add-left"><i>*</i>组织名称：</span>
                <div class="add-right">
                    <input type="text" class="inputBox">
                </div>
            </li>
            <li>
                <span class="add-left"><i>*</i>负责人：</span>
                <div class="add-right">
                    <input type="text" class="inputBox">
                </div>
            </li>
            <li>
                <span class="add-left"><i>*</i>负责人身份证：</span>
                <div class="add-right">
                    <div class="upload">
                        <p>+</p>
                        <span>上传正面</span>
                    </div>
                    <div class="add-e clearfix">
                        <span>示例：</span>
                        <p class="e-img"></p>
                    </div>
                </div>
            </li>
             <li>
                <span class="add-left"><i>*</i>负责人身份证：</span>
                <div class="add-right">
                    <div class="upload">
                        <p>+</p>
                        <span>上传反面</span>
                    </div>
                    <div class="add-e clearfix">
                        <span>示例：</span>
                        <p class="e-img"></p>
                    </div>
                </div>
            </li>
             <li>
                <span class="add-left"><i>*</i>组织证件：</span>
                <div class="add-right">
                    <div class="upload">
                        <p>+</p>
                        <span>上传图片</span>
                    </div>
                    <div class="add-e clearfix">
                        <span>示例：</span>
                        <p class="e-img"></p>
                    </div>
                </div>
            </li>
            <li class="brnad-title"><p>门店信息：</p></li>
            <li>
                <span class="add-left">门店位置：</span>
                <div class="add-right">
                   <div class="addcasader">
                        <el-cascader
                        :options="options2"
                        @active-item-change="handleItemChange"
                        :props="props"
                        placeholder="请选择所在地区"
                        ></el-cascader>
                   </div>
                    <input type="text" class="inputBox" placeholder="请输入详细地址">
                    <div class="addMap">
                        我是地图
                    </div>
                </div>
            </li>
            <li>
                <span class="add-left"><i>*</i>门店门头照片：</span>
                <div class="add-right">
                    <div class="upload">
                        <p>+</p>
                        <span>上传图片</span>
                    </div>
                    <div class="add-e clearfix">
                        <span>示例：</span>
                        <p class="e-img"></p>
                    </div>
                </div>
            </li>
             <li>
                <span class="add-left"><i>*</i>门店内景照片：</span>
                <div class="add-right">
                    <div class="upload">
                        <p>+</p>
                        <span>上传图片</span>
                    </div>
                    <div class="add-e clearfix">
                        <span>示例：</span>
                        <p class="e-img"></p>
                    </div>
                </div>
            </li>
             <li>
                <span class="add-left"><i>*</i>收银台照片：</span>
                <div class="add-right">
                    <div class="upload">
                        <p>+</p>
                        <span>上传图片</span>
                    </div>
                    <div class="add-e clearfix">
                        <span>示例：</span>
                        <p class="e-img"></p>
                    </div>
                </div>
            </li>
            <li class="saveMes" @click="saveAddMes()"><p>提交认证</p></li>
        </ul>
    </div>
</template>

<script>
const cityOptions = ['周一', '周二','周三','周四','周五','周六','周日']

export default {
    data() {
        return {
            radio2: 3,
            checkedlist: true,
            checkTimeIsShow: false,
            checkedWeeks: ['周一', '周二','周三','周四','周五','周六','周日'],
            weeks : cityOptions,
            startTime: '',
            endTime: '',
            props: {
            value: 'label',
            children: 'cities'
            }
        }
    },
    mounted() {
      changType()
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
    //   保存信息
      saveAddMes() {
          console.log(1)
      },
      changType(val) {
        if(val == "1"){
            this.goBrandApprove() 
        }else if(val == "2"){
            this.goBrandCompany() 
        }
      },
      goBrandCompany() {
          this.$router.push({
              path: "/main/setting/brandCompany"
          })
      },
      goBrandApprove() {
          this.$router.push({
              path: "/main/setting/brandApprove"
          })
      }
     }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/mixin';

.el-cascader{
  width 185px
}
.page{
   min-height calc(100vh - 150px)
   background-color #fff
   .clearfix:after {
    content:""; 
    display: block; 
    clear:both; 
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
  } 
   .add-store{
        padding-top 20px
        width 100%
        text-align center
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
              width 185px
              height 30px
              line-height 30px
              border 1px solid #eeeeee
              background-color #f8f8f8
              font-size $small-font
              padding-left 5px
              box-sizing border-box
            }
            .addcasader{
               margin-bottom 20px
            }
            .checkbox{
                cursor pointer
            }
            .add-right{
              float left
              width 390px
              display inline-block
              text-align left
              margin-left 10px
              .add-e{
                  display inline-block
                  margin-left 65px
                  span{
                    float left
                  }
                  .e-img{
                    float left
                    display inline-block
                    width 80px
                    height 65px
                    background url("~@/assets/image/e-img.jpg") center no-repeat
                    background-size 100%
                 }
              }
              .addMap{
                width 380px
                height 255px
                margin-top 20px
                text-align center
                border 1px solid #eeeeee
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
            }
            .checkAllow{
              height 30px
              line-height 30px
              .noBrand{
               color #ff0000
               display inline-block
               width 50px
               text-align center
               margin-right 50px
             }
             .branded{
               display inline-block
               width  85px
               height 40px
               line-height 40px
               background-color #29aaff
               color #ffffff
               text-align center
               border-radius 8px
               cursor pointerpointer
             }
            }
            .dropDown:after {
                content:""; 
                display: block; 
                clear:both; 
            }
            .upload{
              display inline-block
              width 80px
              height 80px
              text-align center
              background-color #e1e1e1
              color #ffffff
              cursor pointer
              relative()
              p{
                font-size 40px
              }
              span{
                font-size $normal-font
              }
            }
        }
    }
    .saveMes{
        color #ffffff
        text-align center
        margin: 0 auto
        padding 20px 0
        p{ 
            display inline-block
            border-radius 8px
            padding 0 20px
            height 45px
            margin: 0 auto;
            line-height 45px
            text-align center
            cursor pointer
            background-color #39aafb
            font-size 16px
        }
    }
}

</style>