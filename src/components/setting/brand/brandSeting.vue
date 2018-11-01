<template>
    <div class="page">
        <div class="emp-cont">
            <div class="emp-t clearfix">
               <p class='cont-titles'><i></i><span>牌品设置</span></p>
            </div>
       </div>   
        <ul class="add-store">
            <li>
                <span class="add-left"><i>*</i>品牌名称：</span>
                <div class="add-right">
                    <input type="text" class="inputBox">
                </div>
            </li>
            <li>
                <span class="add-left">品牌logo：</span>
                <div class="add-right">
                    <div class="upload">
                        <p>+</p>
                        <span>上传图片</span>
                    </div>
                </div>
            </li>
            <li>
                <span class="add-left"><i>*</i>主营类别：</span>
                <div class="add-right">
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </li>
            <li>
                <span class="add-left">官网地址：</span>
                <div class="add-right">
                    <input class="inputBox" type="tel">
                </div>
            </li>
            <li>
                <span class="add-left">客服电话：</span>
                <div class="add-right">
                    <input class="inputBox" type="tel">
                </div>
            </li> 
            <li>
                <span class="add-left"><i>*</i>联系人姓名：</span>
                <div class="add-right">
                    <input type="text" class="inputBox">
                </div>
            </li>
            <li>
                <span class="add-left"><i>*</i>联系人电话：</span>
                <div class="add-right">
                    <input type="text" class="inputBox">
                </div>
            </li>
            <li>
                <span class="add-left"><i>*</i>会员跨店消费：</span>
                <div class="add-right checkAllow">
                    <el-radio v-model="radio" label="1">允许</el-radio>
                    <el-radio v-model="radio" label="2">不允许</el-radio>
                </div>
            </li>
            <li>
                <span class="add-left">客服电话：</span>
                <div class="add-right checkAllow">
                    <span class="noBrand">未认证</span>
                    <span class="branded" @click="goApprove()">去认证</span>
                </div>
            </li> 
            <li class="saveMes" @click="saveAddMes()"><p>保存</p></li>
        </ul>
    </div>
</template>

<script>
const cityOptions = ['周一', '周二','周三','周四','周五','周六','周日']

export default {
    data() {
        return {
            checkedlist: true,
            checkTimeIsShow: false,
            checkedWeeks: ['周一', '周二','周三','周四','周五','周六','周日'],
            weeks : cityOptions,
            startTime: '',
            endTime: '',
            props: {
            value: 'label',
            children: 'cities',
            radio: '1'
            }
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
        // 地区联动
        handleItemChange(val) {
        console.log('active item:', val);
        setTimeout(_ => {
          if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
            this.options2[0].cities = [{
              label: '南京'
            }];
          } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
            this.options2[1].cities = [{
              label: '杭州'
            }];
          }
        }, 300);
      },
    //   保存信息
      saveAddMes() {
          console.log(1)
      },
     goApprove() {
         this.$router.push({
             path: "/main/setting/brandApprove"
      })
     }
     }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/mixin';

.el-select{
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
        padding-top 50px
        width 100%
        text-align center
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
              .switch-btn {
                  position: relative; 
                  display: block; 
                  vertical-align: top; 
                  width: 70px; 
                  height: 35px; 
                  border-radius: 18px; 
                  cursor: pointer;
                }
            .checked-switch {
                position: absolute;
                top: 0; 
                left: 0; 
                opacity: 0;}
            .text-switch {
                background-color: #e9e9e9;
                border: 1px solid #e9e9e9; 
                border-radius: inherit; 
                color: #999999; 
                display: block; 
                font-size: $small-font; 
                height: inherit; 
                position: relative; 
                text-transform: uppercase;
                }
            .text-switch:before, .text-switch:after {
                position: absolute; 
                top: 50%; 
                margin-top: -.5em; 
                line-height: 1; 
                -webkit-transition: inherit; 
                -moz-transition: inherit; 
                -o-transition: inherit; 
                transition: inherit;
                }
            .text-switch:before {
                content: attr(data-no); 
                right: 11px;
                }
            .text-switch:after {
                content: attr(data-yes); 
                left: 11px; 
                color: #FFFFFF; 
                opacity: 0;
                }
            .checked-switch:checked ~ .text-switch {
                background-color: #39aafb; 
                border: 1px solid #39aafb;
                }
            .checked-switch:checked ~ .text-switch:before {
                opacity: 0;
                }
            .checked-switch:checked ~ .text-switch:after {
                opacity: 1;
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
              height  30px
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
               cursor pointer
             }
            }
            .dropDown:after {
                content:""; 
                display: block; 
                clear:both; 
            }
            .upload{
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
        margin: 50px auto
        padding-bottom 35px
        p{
            border-radius 8px
            width  85px
            height 40px
            margin: 50px auto 70px;
            line-height 40px
            text-align center
            cursor pointer
            background-color #39aafb
            font-size 16px
        }
    }
}
</style>