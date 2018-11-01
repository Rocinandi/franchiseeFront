<template>
    <div class="page">
        <ul class="page-title">
            <li @click="goVipClass()">等级设置</li>
            <li class="active"  @click="goGrowSeting()">成长值设置</li>
            <li @click="goRecordSeting()">档案设置</li>
            <li @click="goSuccessCode()">安全码</li>
            <li @click="goLabelSeting()">标签设置</li>
            <li @click="goSourceMgn()">来源管理</li>
        </ul>
        <div class="vip-state">
                <div class="vip-start clearfix">
                    <span class="state-text">会员成长值启动状态：</span>
                    <div>
                        <label class="switch-btn">
                            <input class="checked-switch" type="checkbox">
                            <span class="text-switch" data-yes="开启" data-no="关闭"></span> 
                            <span class="toggle-btn"></span> 
					    </label>
                    </div>
                </div>
                <div class="vip-start">
                    <span class="state-text">会员积分有效期：</span>
                    <el-date-picker
                    v-model="timeValue"
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
                    <el-tooltip class="item" effect="dark" content="从获得开始到所设置的日期结" placement="top-start">
                           <span class="order-help">
                            <i class="icon-help"></i><span>帮助</span>
                           </span>
                    </el-tooltip>
                </div>
        </div>
        <div class="emp-cont">
            <div class="emp-t clearfix">
               <p class='cont-titles'><i></i><span>成长值规则</span></p>
            </div>
             <div class="cont-tab">
                <ul class="clearfix">
                    <li class="h-num">成长任务</li>
                    <li class="h-num">获得成长值</li>
                    <li class="h-num">日上限</li>
                </ul>
                <ul class="tableCon clearfix">
                    <li class="h-num">购充值卡</li>
                    <li class="h-num">
                        <el-input-number v-model="refillGrowNum" controls-position="right"  :step="10"  :min="1"></el-input-number>
                        <span class="count-text">点/元</span>
                    </li>
                    <li class="h-num">
                        <el-radio :label="1" v-model="refillRadio">无上限</el-radio>
                        <p class="count-up">
                            <el-radio :label="2" v-model="refillRadio"></el-radio>
                            <el-input-number v-model="refillRadioNum" controls-position="right" :min="1" ></el-input-number>
                            <span class="count-text">点/元</span>
                        </p>
                    </li>
                </ul>
                 <ul class="tableCon clearfix">
                    <li class="h-num">购买次卡</li>
                    <li class="h-num">
                        <el-input-number v-model="timeGrowNum" controls-position="right"  :min="1"></el-input-number>
                        <span class="count-text">点/元</span>
                    </li>
                    <li class="h-num">
                        <el-radio  :label="1" v-model="timeRadio">无上限</el-radio>
                        <p class="count-up">
                            <el-radio  :label="2" v-model="timeRadio"></el-radio>
                            <el-input-number v-model="timeRadioNum" controls-position="right"  :min="1"></el-input-number>
                            <span class="count-text">点/元</span>
                        </p>
                    </li>
                </ul>
                 <ul class="tableCon clearfix">
                    <li class="h-num">购买折扣卡</li>
                    <li class="h-num">
                        <el-input-number v-model="disGrowNum" controls-position="right"  :min="1" ></el-input-number>
                        <span class="count-text">点/元</span>
                    </li>
                    <li class="h-num">
                        <el-radio :label="1" v-model="disRadio">无上限</el-radio>
                        <p class="count-up">
                            <el-radio  :label="2" v-model="disRadio"></el-radio>
                            <el-input-number v-model="disRadioNum" controls-position="right"  :min="1"></el-input-number>
                            <span class="count-text">点/元</span>
                        </p>
                    </li>
                </ul>
                 <ul class="tableCon clearfix">
                    <li class="h-num">
                        <span>购买产品</span>
                        <el-tooltip class="item" effect="dark" content="支付完成后会员获得成长值" placement="top-start">
                           <span class="order-help">
                            <i class="icon-help"></i>
                            <span>帮助</span>
                          </span>
                        </el-tooltip>
                    </li>
                    <li class="h-num">
                        <el-input-number v-model="proGrowNum" controls-position="right" :min="1"></el-input-number>
                        <span class="count-text">点/元</span>
                    </li>
                    <li class="h-num">
                        <el-radio :label="1" v-model="proRadio">无上限</el-radio>
                        <p class="count-up">
                            <el-radio  :label="2" v-model="proRadio"></el-radio>
                            <el-input-number v-model="proRadioNum" controls-position="right"  :min="1"></el-input-number>
                            <span class="count-text">点/元</span>
                        </p>
                    </li>
                </ul>
                 <ul class="tableCon clearfix">
                    <li class="h-num">
                        <span>购买服务</span>
                        <el-tooltip class="item" effect="dark" content="支付完成后会员获得成长值" placement="top-start">
                           <span class="order-help">
                            <i class="icon-help"></i>
                            <span>帮助</span>
                          </span>
                        </el-tooltip>
                    </li>
                    <li class="h-num">
                        <el-input-number v-model="serverGrowNum" controls-position="right"  :min="1"></el-input-number>
                        <span class="count-text">点/元</span>
                    </li>
                    <li class="h-num">
                        <el-radio  :label="1" v-model="serverRadio">无上限</el-radio>
                        <p class="count-up">
                            <el-radio :label="2"  v-model="serverRadio"></el-radio>
                            <el-input-number v-model="serverRadioNum" controls-position="right"  :min="1"></el-input-number>
                            <span class="count-text">点/元</span>
                        </p>
                    </li>
                </ul>
                <ul class="tableCon clearfix">
                    <li class="h-num">                   
                        <span>完成预约</span>
                        <el-tooltip class="item" effect="dark" content="支付完成后会员获得成长值" placement="top-start">
                           <span class="order-help">
                            <i class="icon-help"></i>
                            <span>帮助</span>
                          </span>
                        </el-tooltip>
                    </li>
                    <li class="h-num">
                        <el-input-number v-model="ordeGrowNum" controls-position="right"  :min="1" ></el-input-number>
                        <span class="count-text">点/元</span>
                    </li>   
                    <li class="h-num">
                        <el-radio label="1"  v-model="ordeRadio">无上限</el-radio>
                        <p class="count-up">
                            <el-radio label="2"  v-model="ordeRadio"></el-radio>
                            <el-input-number v-model="ordeRadioNum" controls-position="right" :min="1"></el-input-number>
                            <span class="count-text">点/元</span>
                        </p>
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
            timeValue: " ",  // 时间选择
            refillGrowNum : 1,  //充值卡成长值
            timeGrowNum : 1,  //次卡成长值
            disGrowNum : 1,  //折扣卡成长值
            proGrowNum : 1,  //产品成长值
            serverGrowNum : 1,  //服务成长值
            ordeGrowNum : 1,  //预约成长值
            refillRadio : 1,   // 默认选择
            timeRadio : 1,  
            disRadio : 1, 
            proRadio : 1,
            serverRadio : 1, 
            ordeRadio : "1",  
            refillRadioNum : 1,   // 日上线默认值
            timeRadioNum : 1,  
            disRadioNum : 1, 
            proRadioNum : 1,
            serverRadioNum : 1, 
            ordeRadioNum : 1,  
        }
    },
    methods :{
        getInput(val) {
            alert(val);
        },
        //跳转的链接 
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
  .vip-state{
    padding 15px 20px
    border-top 20px solid #f6f6f6
    >>>.vip-start{
      margin-bottom 15px
      height 30px
      line-height 30px
    .el-date-editor{
         width 170px
        .el-input__inner{
          width 160px
        }
      .el-input__prefix{
        line-height 30px
       .el-input__icon{
         line-height 30px
        }
      }
      .el-input__suffix{
        .el-icon-circle-close{
        line-height 30px
        }
     }
    }
      div{
       display inline-block
       float left
      }
    }
    .order-help{
        display inline-block
        height 30px
        line-height 30px
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
    .vip-start:last-child{
       margin-bottom 0
    }
    .state-text{
      display inline-block
      min-width 130px
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
    .emp-from{
      height 50px
      float right
      .addNews{
        width 90px
        height 30px
        line-height 30px
        text-align center
        background-color $color-light
        color #ffffff
        margin-right 5px
        margin-top 10px
        cursor pointer
      }
    }
    >>>.cont-tab{
        width 100%
        .el-input{
          height 30px
          line-height 30px
        }
        .el-input-number.is-controls-right .el-input-number__increase,
        .el-input-number.is-controls-right .el-input-number__decrease{
         line-height 15px
        }
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
            .h-num{
               width 33.3%
               line-height 50px
            }
        }
        ul:first-child{
            background-color #e7f5ff
            li{
                color #062b7b
            }
        }
        .tableCon{
            li{
                padding 0 5px
            }
            .h-text{
               width 100%
               text-align center
               display: -webkit-box;
               -webkit-box-orient: vertical;
               -webkit-line-clamp: 1;
               overflow: hidden;
            }
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
                    font-size 16px
                    color #ffb400
                }  
            }
        }
    }
    .count-text{
        display inline-block
        margin-left 7px
    }
    .count-up{
        display inline-block
        margin-left 20px
        >>>.el-radio__label{
          display none
        }
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