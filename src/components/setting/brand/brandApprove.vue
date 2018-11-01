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
                <span class="add-left"><i>*</i>姓名：</span>
                <div class="add-right">
                    <input type="text" class="inputBox">
                </div>
            </li>
            <li>
                <span class="add-left"><i>*</i>身份证号：</span>
                <div class="add-right">
                    <input type="text" class="inputBox">
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
            radio2: 1,
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
        judgeType()
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
      saveAddMes() {
          console.log(1)
      },
      changType(val) {
           if(val == "2"){
             this.goBrandCompany() 
           }else if(val == "3"){
             this.goBrandOrganiza()
           }
      },
      goBrandCompany() {
          this.$router.push({
              path: "/main/setting/brandCompany"
          })
      },
      goBrandOrganiza() {
          this.$router.push({
              path: "/main/setting/brandOrganiza"
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
            .toggle-btn {
                background: linear-gradient(#eee, #fafafa); 
                border-radius: 100%; 
                height: 34px; 
                left: 1px; 
                position: absolute; 
                top: 1px; 
                width: 34px;
                }
            .checked-switch:checked ~ .toggle-btn {
                left: 37px;
                }
            .text-switch, .toggle-btn {
                transition: All 0.3s ease; 
                -webkit-transition: All 0.3s ease; 
                -moz-transition: All 0.3s ease; 
                -o-transition: All 0.3s ease;
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
                .startTimes{
                 float left
                 width 114px
                 height 30px
                 line-height 30px
                 box-sizing border-box
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
              .dropDown{
               width 280px
               border 1px solid #eee
               border-top none
               .sure{
                width 280px
                margin-top 10px
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
              .el-cascader__label{
               color #999
              }
            }
            .checkAllow{
              heigh 30px
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
            border-radius 8px
            width 85px
            height 40px
            margin: 0 auto;
            line-height 40px
            text-align center
            cursor pointer
            background-color #39aafb
            font-size 16px
        }
    }
}

</style>