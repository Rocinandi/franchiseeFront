<template>
    <div class="page">
        <ul class="page-title">
            <li>服务提成</li>
            <li>卡项提成</li>
            <li>产品提成</li>
            <li class="active">门店总提成</li>
            <li>全局设置</li>
        </ul>
        <!--方案名称设置 -->
        <div class="emp-cont">
            <div class="emp-t clearfix">
               <p class='cont-titles'>
                   <i></i><span>方案名称设置</span>
               </p>
            </div>
            <ul class="add-store">
                <li>
                    <span class="add-left"><i>*</i>提成方案名称：</span>
                    <div class="add-right">
                        <input type="text" class="inputBox" placeholder="请输入10个字以内的提成方案名称">
                    </div>
                </li>
                <li>
                    <span class="add-left">涉及员工：</span>
                    <div class="add-right">
                        <div class="add-list">
                            <p class="add-title">
                                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">店长</el-checkbox>
                            </p>
                            <el-checkbox-group v-model="checkboxGroup5" size="small">
                                <el-checkbox label="员工1" border></el-checkbox>
                                <el-checkbox label="员工2" border></el-checkbox>
                                <el-checkbox label="员工3" border></el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <div class="add-list">
                            <p class="add-title">
                                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">技师</el-checkbox>
                            </p>
                            <el-checkbox-group v-model="checkboxGroup5" size="small">
                                <el-checkbox label="员工1" border></el-checkbox>
                                <el-checkbox label="员工2" border></el-checkbox>
                                <el-checkbox label="员工3" border></el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <div class="add-list">
                            <p class="add-title">
                                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">销售顾问</el-checkbox>
                            </p>
                            <el-checkbox-group v-model="checkboxGroup5" size="small">
                                <el-checkbox label="员工1" border></el-checkbox>
                                <el-checkbox label="员工2" border></el-checkbox>
                                <el-checkbox label="员工3" border></el-checkbox>
                                <el-checkbox label="员工2" border></el-checkbox>
                                <el-checkbox label="员工2" border></el-checkbox>
                                <el-checkbox label="员工2" border></el-checkbox>
                                <el-checkbox label="员工2" border></el-checkbox>
                                <el-checkbox label="员工2" border></el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <!--提成规则设置-->
        <div class="emp-cont">
            <div class="emp-t clearfix">
               <p class='cont-titles'>
                   <i></i><span>提成规则设置</span>  
               </p>
            </div>
            <div class="cont-tab">
                <ul class="clearfix">
                    <li class="h-name">全店总营业收入</li>
                    <li class="h-num">提成方式</li>
                    <li class="h-shop">提成点</li>
                    <li class="h-opera">操作</li>
                </ul>
                <ul class="tableCon clearfix">
                    <li class="h-name">
                        <input  class="h-input1" type="text">至<input class="h-input1" type="text">
                    </li>
                    <li class="h-num">
                        <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                        </el-select>
                    </li>
                    <li class="h-shop">
                        <input class="h-input" type="text">%
                    </li>
                    <li class="h-opera"><span>删除</span><span>新增范围</span></li>
                </ul>
            </div>
            <ul class="count-type clearfix">
                 <li>
                    <span class="add-left">提成计算：</span>
                    <div class="add-right radioCheck">
                          <p class="lineradio" placement="left-start">
                              <el-radio v-model="radio" label="1">按商品售价</el-radio>
                              <el-tooltip class="item" effect="dark" >
                                <div slot="content">
                                    <p class="cont-slot-title">阶梯式计算</p>
                                    <p class="cont-slot-p">阶梯式计算：设置后呈阶梯式增</p>
                                    <p class="cont-slot-p">长，按总业绩计算提成</p>
                                    <p class="cont-slot-p">例：1-10000时6%，10000-15000</p>
                                    <p class="cont-slot-p">时10%，员工业绩13000，提成为：13000*10%</p>
                                </div>
                                <span class="order-help">
                                    <i class="icon-help"></i>
                                    <span>帮助</span>
                                </span>
                            </el-tooltip>    
                          </p>
                          <p class="lineradio">
                              <el-radio v-model="radio" label="2">阶段式计算</el-radio>
                              <el-tooltip class="item" effect="dark">
                                <div slot="content" placement="top-start">
                                    <p class="cont-slot-title">阶段式计算</p>
                                    <p class="cont-slot-p">阶段式计算：设置后分阶段式计</p>
                                    <p class="cont-slot-p">算，根据区间计算提成</p>
                                    <p class="cont-slot-p">例：1-10000时6%，10000-15000时10%，</p>
                                    <p class="cont-slot-p">员工业绩13000，提成为：10000*6%+3000*10%</p>
                                </div>
                                <span class="order-help">
                                    <i class="icon-help"></i>
                                    <span>帮助</span>
                                </span>
                            </el-tooltip>    
                          </p>
                    </div>
                </li>
            </ul>
            <div class="saveMes">
                <p>保存</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value2: true,
            dialogVisible: false,
            radio: '1',
            checkboxGroup5: [],
            options: [{
            value: '选项1',
            label: '黄金糕'
            },{
            value: '选项5',
            label: '北京烤鸭'
            }],
            value: ''
        }
    },
    methods: {
        addProject() {
            this.$router.push({
                path: '/main/setting/addServeProject'
            })
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
    .cont-tab{
        width 100%
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
                padding 0 5px
            }
            li:first-child{
               border-left 1px solid #e1e1e1 
            }
            li:last-child{
               border-right 1px solid #e1e1e1 
            }
            .h-name{
                width 25%
            }
            .h-num{
               width 25%
            }
            .h-shop{
               width 25%
            }
            .h-opera{
               width 25%
               span:last-child{
                   margin-left 10px
               }
            }
        }
        ul:first-child{
            background-color #e7f5ff
            li{
                color #062b7b
            }
        }
        .tableCon{
            .h-allow{
                color $color-light
                cursor pointer
            }
            .h-noallow{
                color #ff0018
            }
            .h-opera{
              color $color-light
              cursor pointer
            }
            .h-comment{
              text-align center
            }
            .h-text{
               width 100%
               text-align center
               display: -webkit-box;
               -webkit-box-orient: vertical;
               -webkit-line-clamp: 1;
               overflow: hidden;
            }
            .el-switch{
              width 40px
            }
            .el-switch__core{
              height 24px
            }
            .h-input{
            height: 34px;
            line-height: 34px;
            min-width: 80px;
            max-width: 120px;
            border: 1px solid #eee;
            margin: 8px 20px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            padding-left: 10px;
            }
            .h-input1{
            height: 34px;
            line-height: 34px;
            min-width: 30px;
            max-width: 100px;
            border: 1px solid #eee;
            margin: 8px 10px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            padding-left: 10px;
            }
        }
    }
    .add-store{
        padding 10px 0 30px
        width 100%
        text-align center
        li:after {
            content:""; 
            display: block; 
            clear:both; 
        }
        li{
            margin 20px 0 0 100px 
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
            .add-right{
              float left
              display inline-block
              text-align left
              margin-left 10px
            }
            .add-title{
               height 30px
               line-height 30px
            }
            .add-list{
               margin-bottom 10px
            }
            .inputBox{
              width 280px
              height 30px
              line-height 30px
              border 1px solid #eeeeee
              background-color #f8f8f8
              font-size $small-font
              padding-left 5px
              box-sizing border-box
            }
        }
    }
    .add-step{
        text-align center
        padding 70px 0  20px
        margin 0 auto
        p{  
            display inline-block
            font-size 16px
            color #ffffff
            padding 0 40px
            height 45px
            line-height 45px
            background-color $color-light
            border-radius 4px
            cursor pointer
        }
    }
  }
 .dialog-tab{
     width 100%
     height 350px
     min-height 160px
     max-height 500px
     overflow auto 
     ul{
        width 100%
        li{
            height 50px
            float left
            width 12%
            text-align center
            border-right 1px solid #eeeeee
            border 1px solid #eeeeee
            box-sizing border-box
        }
        .h-name{
            line-height 50px
        }
        .h-type{
            line-height 50px
        }
        .h-way{
           line-height 50px
        }
        .h-vip{
            width 16%
        }
         .h-novip{
            width 16%
        }
        .h-idle{
            width 16%
        }
        .h-idles{
            width 16%
        }
        .h-text{
           display inline-block
           width 65%
           text-align center
           margin-top 5px
        }
     }
     ul:first-child{
         background-color #e7f5ff
         li{
             border-bottom none 
         }
     }
     .dialog-bottom{
         height 100px
         li{ 
             border-bottom none
             border-right  none
             height 100px
             p{
                 box-sizing border-box
                 span{
                     display inline-block
                     width 50%
                     height 50px
                     line-height 50px
                     text-align center
                     box-sizing border-box
                     border-right 1px solid #eee
                 }
                 span:last-child{
                     border none 
                 }
            }
            p:first-child{
                 border-bottom 1px solid #eeeeee 
            }
         }
         .h-name{
             line-height 100px
         }
         .h-type{
             width 24%
         }
         .h-way{
             width 32%
         }
         .h-vip{
             width 32%
             border-right 1px solid #eeeeee 
         }
     }
     .dialog-bottom:last-child{
         border-bottom 1px solid #eeeeee
     }
 }
  .radioCheck{
    min-height 30px
    line-height 30px
 }
 .count-type{
    padding 15px 20px
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
   .add-left{
     float left
     height 30px
     line-height 30px
    }
    .add-right{
     float left
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
 }
 .saveMes{
        color #ffffff
        text-align center
        margin: 0 auto
        padding 30px 0 50px
        p{
            border-radius 4px
            display inline-block
            padding 0 40px
            height 45px
            margin: 0 auto;
            line-height 45px
            text-align center
            cursor pointer
            background-color #39aafb
            font-size 18px
        }
    }
}

</style>