<template>
    <div class="page">
        <ul class="page-title">
            <li  class="active">服务提成</li>
            <li>卡项提成</li>
            <li>产品提成</li>
            <li>门店总提成</li>
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
        <!--  -->
        <div class="emp-cont">
            <div class="emp-t clearfix">
               <p class='cont-titles'>
                   <i></i><span>提成规则设置</span>    
               </p>
            </div>
             <div class="dialog-tab">
            <ul class="clearfix">
                <li class="h-name">服务分类</li>
                <li class="h-type">提成类型</li>
                <li class="h-way">提成方式</li>
                <li class="h-vip"><span class="h-text">会员点客提成点</span></li>
                <li class="h-novip"><span class="h-text">会员非点客提成点</span></li>
                <li class="h-idle"><span class="h-text">散客点客提成点</span></li>
                <li class="h-idles"><span class="h-text">散客非点客提成点</span></li>
            </ul>
            <ul class="dialog-bottom clearfix">
                <li class="h-name">分类1</li>
                <li class="h-type">
                   <p><span>劳动提成</span><span class="h-select">
                       <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                        </el-select></span>
                   </p>
                   <p><span>销售提成</span><span class="h-select">
                       <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                        </el-select></span></p>
                </li>
                <li class="h-way">
                    <p><span><input type="text" class="h-input"> %</span><span><input type="text" class="h-input"> %</span></p>
                    <p><span><input type="text" class="h-input"> %</span></p>
                </li>
                <li class="h-vip">
                    <p><span><input type="text" class="h-input"> %</span><span><input type="text" class="h-input"> %</span></p>
                    <p><span><input type="text" class="h-input"> %</span></p>
                </li>
            </ul>
        </div>
         <div class="h-warm">
               注：设置成功后，员工进行销售时，将默认享有相应提成。
        </div>
        <div class="saveMes">   
            <p>
                提交
            </p>    
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
            radio: 1,
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
    .dialog-tab{
     width 100%
     ul{
        width 100%
        li{
            height 50px
            line-height 50px
            float left
            width 12%
            text-align center
            border-right 1px solid #eeeeee
            border 1px solid #eeeeee
            box-sizing border-box
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
        .h-input{
            height 34px
            line-height 34px
            min-width 80px
            max-width 120px
            border 1px solid #eeeeee
            margin 8px 20px
            box-sizing border-box
            padding-left 10px
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
             .h-select{
                 padding 0 10px
                 box-sizing border-box
             }
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
  }
  .h-warm{
   color #ffd200
   padding 15px 20px
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
}
</style>