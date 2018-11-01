<template>
    <div class="page">
        <ul class="page-title">
            <li @click="goVipClass()">等级设置</li>
            <li @click="goGrowSeting()">成长值设置</li>
            <li @click="goRecordSeting()">档案设置</li>
            <li class="active"  @click="goSuccessCode()">安全码</li>
            <li @click="goLabelSeting()">标签设置</li>
            <li @click="goSourceMgn()">来源管理</li>
        </ul>
        <div class="vip-state">
                <div class="vip-start clearfix">
                    <span class="state-text">安全码启动状态：</span>
                    <div>
                        <label class="switch-btn">
                            <input class="checked-switch" type="checkbox">
                            <span class="text-switch" data-yes="开启" data-no="关闭"></span> 
                            <span class="toggle-btn"></span> 
					    </label>
                    </div>
                </div>
        </div>
        <div class="emp-cont">
            <div class="emp-t clearfix">
               <p class='cont-titles'><i></i><span>安全码设置</span></p>
            </div>
            <ul class="add-store">
            <li>
                <span class="add-left"><i>*</i>安全码：</span>
                <div class="add-right">
                    <input type="text" class="inputBox" placeholder="请输入6为数字的安全码">
                    <p><el-checkbox v-model="secretNew">会员私密信息</el-checkbox></p>
                    <p><el-checkbox v-model="secretTel">会员联系电话</el-checkbox></p>
                    <p><el-checkbox v-model="secretWechat">会员微信号</el-checkbox></p>
                    <p class="warn">注：启用后，需要输入安全码后才能查看勾选的信息</p>
                </div>
            </li>
            <li class="save"><p>保存</p></li>
        </ul>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
           secretNew: true,
           secretTel: true,
           secretWechat: true
        }
    },
    methods: {
        // 路径跳转
       goGrowSeting() {
          this.$router.push({
             path: "/main/setting/growSeting"
          })
        }, 
       goRecordSeting() {
          this.$router.push({
             path: "/main/setting/recordSeting"
          })
        }, 
        goSuccessCode() {
          this.$router.push({
             path: "/main/setting/successCode"
          })
        },
        goLabelSeting() {
          this.$router.push({
             path: "/main/setting/labelSeting"
          })
        },  
        goSourceMgn() {
          this.$router.push({
             path: "/main/setting/sourceMgn"
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
     .add-store{
        padding-top 50px
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
              width 280px
              height 30px
              line-height 30px
              border 1px solid #eeeeee
              font-size $small-font
              padding-left 5px
              box-sizing border-box
              margin-bottom 16px
              border-radius 2px
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
              p{
                  line-height 24px
              }
              .warn{
                  font-size 12px
                  color #ffd200
                  margin-top 15px
              }
            }
        }
    }
  .vip-state{
    padding 15px 20px
    border-top 20px solid #f6f6f6
    .vip-start{
      margin-bottom 15px
      height 30px
      line-height 30px
      div{
       display inline-block
       float left
      }
    }
    .vip-start:last-child{
       margin-bottom 0
    }
    .state-text{
      display inline-block
      text-align right
      margin-right 7px
      float left    
    }
    .el-input__inner{
     width 160px
    }
  }
  .emp-cont{
    width 100%
    background-color #ffffff
    border-top 20px solid #f6f6f6
    .order-help{
    display inline-block
    height 50px
    line-height 50px
    font-size 14px
    color #999
    cursor pointer
    margin-left 5px
    .icon-help{
        display inline-block
        margin-top 5px
        font-size 20px
        color #ffb400
     }  
    }
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
    .count-text{
        display inline-block
        margin-left 7px
    }
    .count-up{
        display inline-block
        margin-left 20px
    }
  }
    .switch-btn {
                  position: relative; 
                  display: block; 
                  vertical-align: top; 
                  width: 60px; 
                  height: 27px; 
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
                height: 26px; 
                left: 1px; 
                position: absolute; 
                top: 1px; 
                width: 26px;
                }
            .checked-switch:checked ~ .toggle-btn {
                left: 32px;
                }
            .text-switch, .toggle-btn {
                transition: All 0.3s ease; 
                -webkit-transition: All 0.3s ease; 
                -moz-transition: All 0.3s ease; 
                -o-transition: All 0.3s ease;
            }
    .save{
       padding 100px 0 80px
       font-size 18px
       p{
        cursor pointer
        border-radius 8px
        display inline-block
        padding  0 30px
        height 45px
        line-height 45px
        text-align center
        color #ffffff
        background-color #39aafb
        margin 0 auto
       }
    }
}
</style>