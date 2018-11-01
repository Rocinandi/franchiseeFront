<template>
    <div class="page">
        <ul class="page-title">
            <li>服务提成</li>
            <li>卡项提成</li>
            <li>产品提成</li>
            <li>门店总提成</li>
            <li class="active">全局设置</li>
        </ul>
        <div class="emp-cont">
            <div class="emp-t clearfix">
               <p class='cont-titles'>
                   <i></i><span>基础信息设置</span>
               </p>
            </div>
            <ul class="add-store">
                <li>
                    <span class="add-left">提成计算：</span>
                    <div class="add-right radioCheck">
                          <p class="lineradio" placement="left-start">
                              <el-radio v-model="radio" label="1">按商品售价</el-radio>
                              <el-tooltip class="item" effect="dark" >
                                <div slot="content">
                                    <p class="cont-slot-title">按商品售价</p>
                                    <p class="cont-slot-p">商品销售时，员工所获提成按商品</p>
                                    <p class="cont-slot-p">设置的售价计算：提成金额 =售价</p>
                                    <p class="cont-slot-p"> * 数量 * 业绩占比 * 提成比例；</p>
                                </div>
                                <span class="order-help">
                                    <i class="icon-help"></i>
                                    <span>帮助</span>
                                </span>
                            </el-tooltip>    
                          </p>
                          <p class="lineradio">
                              <el-radio v-model="radio" label="2">按收款金额</el-radio>
                              <el-tooltip class="item" effect="dark">
                                <div slot="content" placement="top-start">
                                    <p class="cont-slot-title">按收款金额</p>
                                    <p class="cont-slot-p">商品销售时，员工所获提成按实际</p>
                                    <p class="cont-slot-p">开单的收款金额计算：提成金额 =</p>
                                    <p class="cont-slot-p">收款金额* 数量 * 业绩占比 * 提成</p>
                                    <p class="cont-slot-p">比例；</p>
                                </div>
                                <span class="order-help">
                                    <i class="icon-help"></i>
                                    <span>帮助</span>
                                </span>
                            </el-tooltip>    
                          </p>
                    </div>
                </li>
                <li>
                    <span class="add-left">选多技师/销售时业绩占比：</span>
                    <div class="add-right radioCheck">
                          <p class="lineradio">
                              <el-radio v-model="radio1" label="1">自动评分</el-radio>
                              <el-tooltip class="item" effect="dark">
                                <div slot="content" placement="top-start">
                                    <p class="cont-slot-title">自动评分</p>
                                    <p class="cont-slot-p">设置成功后，开单时添加技师/销售，将</p>
                                    <p class="cont-slot-p">自动平分(1人100%，2人50%，3人</p>
                                    <p class="cont-slot-p">33.33%，4个人25%)</p>                                    
                                </div>
                                <span class="order-help">
                                    <i class="icon-help"></i>
                                    <span>帮助</span>
                                </span>
                            </el-tooltip>    
                          </p>
                          <p class="lineradio">
                              <el-radio v-model="radio1" label="2">手动设置（最多支持选5位技师或销售）</el-radio>
                              <el-tooltip class="item" effect="dark">
                                <div slot="content" placement="top-start">
                                    <p class="cont-slot-title">手动设置</p>
                                    <p class="cont-slot-p">设置成功后，开单多选技师/销售时将按</p>
                                    <p class="cont-slot-p">所选顺序对应的业绩占比计算业绩，。只</p>
                                    <p class="cont-slot-p">选1名员工或所选员工数超过设置数的</p> 
                                    <p class="cont-slot-p">，将默认按100%计算。</p>   
                                </div>
                                <span class="order-help">
                                    <i class="icon-help"></i>
                                    <span>帮助</span>
                                </span>
                            </el-tooltip>    
                          </p>
                          <div class="con-tab">
                              <ul class="clearfix">
                                  <li>
                                      服务人员
                                  </li>
                                  <li>
                                      业绩占比
                                  </li>
                                  <li>
                                      操作
                                  </li>
                              </ul>
                              <ul>
                                  <li>
                                      第1位
                                  </li>
                                  <li>
                                      <input type="text">
                                      <span>%</span>
                                  </li>
                                  <li>
                                      <span>新增服务人员</span>
                                  </li>
                              </ul>
                              <ul>
                                  <li>
                                      第1位
                                  </li>
                                  <li>
                                      <input type="text">
                                      <span>%</span>
                                  </li>
                                  <li>
                                    <span>删除</span>
                                  </li>
                              </ul>
                          </div>
                    </div>
                </li>
                 <li>
                    <span class="add-left">选多技师/销售时固定提成：</span>
                    <div class="add-right radioCheck">
                          <p class="lineradio">
                              <el-radio v-model="radio2" label="1">自动评分</el-radio>
                              <el-tooltip class="item" effect="dark">
                                <div slot="content" placement="top-start">
                                    <p class="cont-slot-title">自动评分</p>
                                    <p class="cont-slot-p">设置成功后，开单时添加技师/销售，将</p>
                                    <p class="cont-slot-p">自动平分(1人100%，2人50%，3人</p>
                                    <p class="cont-slot-p">33.33%，4个人25%)</p> 
                                </div>
                                <span class="order-help">
                                    <i class="icon-help"></i>
                                    <span>帮助</span>
                                </span>
                            </el-tooltip>    
                          </p>
                          <p class="lineradio">
                              <el-radio v-model="radio2" label="2">手动设置（最多支持选5位技师或销售）</el-radio>
                              <el-tooltip class="item" effect="dark">
                                <div slot="content" placement="top-start">
                                    <p class="cont-slot-title">手动设置</p>
                                    <p class="cont-slot-p">设置成功后，针对设了固定提成的商品，开</p>
                                    <p class="cont-slot-p">单选技师/销售时将按所选顺序对应的提成占</p>
                                    <p class="cont-slot-p">比*原有固定提成进行提成金额的计算。只选</p> 
                                    <p class="cont-slot-p">1名员工或所选员工数超过设置数的，将默认</p>
                                    <p class="cont-slot-p">按原有提成占比计算。</p>
                                </div>
                                <span class="order-help">
                                    <i class="icon-help"></i>
                                    <span>帮助</span>
                                </span>
                            </el-tooltip>    
                          </p>
                            <div class="con-tab">
                              <ul class="clearfix">
                                  <li>
                                      服务人员
                                  </li>
                                  <li>
                                      提成金额占比
                                  </li>
                                  <li>
                                      操作
                                  </li>
                              </ul>
                                <ul>
                                  <li>
                                      第1位
                                  </li>
                                  <li>
                                      <input type="text">
                                      <span>%</span>
                                  </li>
                                  <li>
                                      <span>新增服务人员</span>
                                  </li>
                              </ul>
                              <ul>
                                  <li>
                                      第1位
                                  </li>
                                  <li>
                                      <input type="text">
                                      <span>%</span>
                                  </li>
                                  <li>
                                    <span>删除</span>
                                  </li>
                              </ul>
                          </div>
                    </div>
                </li>
                 <li>
                    <span class="add-left">收款完成是否开启核算业绩：</span>
                    <div class="add-right radioCheck">
                          <p class="lineradio">
                              <el-radio v-model="radio3" label="1">自动评分</el-radio>
                              <el-tooltip class="item" effect="dark">
                                <div slot="content" placement="top-start">
                                    <p class="cont-slot-title">开启</p>
                                    <p class="cont-slot-p">开启后，可以在收款完成页面点</p>
                                    <p class="cont-slot-p">击“核算员工业绩”按钮，查看员工的</p>
                                    <p class="cont-slot-p">业绩和提成，可以根据需要进行手</p> 
                                    <p class="cont-slot-p">动调整。</p>
                                </div>
                                <span class="order-help">
                                    <i class="icon-help"></i>
                                    <span>帮助</span>
                                </span>
                            </el-tooltip>    
                          </p>
                          <p class="lineradio">
                              <el-radio v-model="radio3" label="2">关闭</el-radio>
                          </p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="saveMes">
            <p>
                保存
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value2: true,
            dialogVisible: false,
            radio: "1",
            radio1: "1",
            radio2: "1",
            radio3: "1"
        }
    }
}
</script>
<style>
    .cont-slot-title{
       height: 30px;
       line-height: 30px;
       font-weight: bold;
       font-size: 14px;
       border-bottom: 1px solid #ffffff;
       margin-bottom: 5px;
    }
    .cont-slot-p{
        line-height: 22px;
    }
</style>
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
    .con-tab{
       width 100%
       margin-bottom 20px
       ul{
          width 422px
          height 50px
          line-height 50px
          text-align center
          border 1px solid #eee
          border-bottom none
          border-top none
          box-sizing border-box
          border-right none
        li{
            width 140px
            box-sizing border-box
            display inline-block
            float left
            margin 0
            border-right 1px solid #eee
            border-bottom 1px solid #eee
            input{
               height 38px
               width 80px
               margin-top 5px
               border 1px solid #eee
               box-sizing border-box
               padding-left 5px
            }
        }
        li:last-child{
            span{
                color $color-light
                cursor pointer
            }
        }
       }
       ul:first-child{
           border-top none
           li{
               background-color #e7f5ff
           }
       }
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
    border-top 20px solid #f6f6f6
    .emp-t{
       box-sizing  border-box
       border 1px solid #e5e5e5
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
      p{
         display inline-block
         padding 0 20px
         text-align center
         height 30px
         line-height 30px
         background-color #f8f8f8
         border 1px solid #eeeeee
         box-sizing border-box 
         color $color-text
         margin-right 20px
         cursor pointer
      }
      .addNews{
        background-color $color-light
        color #ffffff
        margin-right 5px
        margin-top 10px
        border-radius 2px
      }
    }
  }
  .add-store{
        width 100%
        text-align center
        padding-top 40px
        li:after {
            content:""; 
            display: block; 
            clear:both; 
        }
        li{
            margin 5px 70px 0
            font-size $normal-font
            .add-left{
                float left
                display  inline-block
                height 30px
                line-height 30px
                display inline-block
                width 210px
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
              width 250px
              height 30px
              line-height 30px
              border 1px solid #eeeeee
              background-color #f8f8f8
              font-size $small-font
              padding-left 5px
              box-sizing border-box
              border-radius 2px
            }
            .inputBox1{
              width 180px
              height 30px
              line-height 30px
              border 1px solid #eeeeee
              background-color #f8f8f8
              font-size $small-font
              padding-left 5px
              box-sizing border-box
              margin-right 10px
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
              display inline-block
              text-align left
              margin-left 5px
              p{
                  height 30px
                  line-height 30px
                  margin-bottom 10px
                  input{
                      width 90px
                      padding-left 5px
                      bpx-sizing border-box
                      height 30px
                      border 1px solid #eeeeee
                      margin 0 5px
                  }
              }
              .lineradio{
                  display inline-block
                  .el-radio{
                    min-width 100px
                    text-align left 
                  }
              }
              .lineradio:first-child{
                  margin-right 20px
              }
              textarea{
                 width 250px
                 height 100px
                 border 1px solid #eeeeee
                 box-sizing border-box
                 padding 7px
              }
            }
            .radioCheck{
                min-height 30px
                line-height 30px
            }
            .radioInput{
                height 30px
                line-height 30px
            }
        }
   }
    .order-help{
    font-size 14px
    color #ffb400
    cursor pointer
    height 30px
    line-height 30px
    .icon-help{
        display inline-block
        font-size 18px
        background-color #ffffff
        margin 0 3px
     }
   }
   .saveMes{
        color #ffffff
        text-align center
        margin: 0 auto
        padding 150px 0 50px
        p{
            display inline-block
            border-radius 8px
            padding 0 50px
            height 50px
            margin: 0 auto;
            line-height 50px
            text-align center
            cursor pointer
            background-color #39aafb
            font-size 18px
        }
    }
}

</style>