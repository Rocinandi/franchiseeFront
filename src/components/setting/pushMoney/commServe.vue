<template>
    <div class="page">
        <ul class="page-title">
            <li  class="active">服务提成</li>
            <li>卡项提成</li>
            <li>产品提成</li>
            <li>门店总提成</li>
            <li>全局设置</li>
        </ul>
        <div class="emp-cont">
            <div class="emp-t clearfix">
               <p class='cont-titles'>
                   <i></i><span>服务提成方案列表</span>
                    <el-tooltip class="item" effect="dark" content="可针对不同级别或组别的员工设置不同的提成方案" placement="top-start">
                        <span class="order-help">
                            <i class="icon-help"></i>
                            <span>帮助</span>
                        </span>
                    </el-tooltip>    
               </p>
                <div class="emp-from">
                    <p class="addNews" @click="addProject()">新增方案</p>
                </div>
            </div>
            <div class="cont-tab">
                <ul class="clearfix">
                    <li class="h-name">方案名称</li>
                    <li class="h-num">服务分类</li>
                    <li class="h-shop">查看规则</li>
                    <li class="h-comment">涉及员工</li>
                    <li class="h-opera">操作</li>
                </ul>
                <ul class="tableCon clearfix">
                    <li class="h-name"><div class="h-text">方案名称</div></li>
                    <li class="h-num"><div class="h-text" title="1分类；2分类；3分类">1分类；2分类；3分类</div></li>
                    <li class="h-shop"><div class="h-text h-allow"  @click="dialogVisible = true">查看</div></li>
                    <li class="h-comment"><div class="h-text" title="姓名；姓名；姓名；姓名；姓名；姓名；姓名；姓名；">姓名；姓名；姓名；姓名；姓名；姓名；姓名；姓名；</div></li>
                    <li class="h-opera">
                        <span>编辑</span>
                        <span>删除</span>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 弹窗 -->
        <el-dialog
        title="提成规则"
        :visible.sync="dialogVisible"
        width="780px">
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
                   <p><span>劳动提成</span><span>比例提成</span></p>
                   <p><span>销售提成</span><span>比例提成</span></p>
                </li>
                <li class="h-way">
                    <p><span>20%</span><span>20%</span></p>
                    <p><span>20%</span></p>
                </li>
                <li class="h-vip">
                    <p><span>20%</span><span>20%</span></p>
                    <p><span>20%</span></p>
                </li>
            </ul>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value2: true,
            dialogVisible: false,
            radio: 1
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
    .order-help{
    font-size 14px
    color #ffb400
    cursor pointer
    height 50px
    line-height 50px
    span{
       margin-left 10px
       float left
    }
    .icon-help{
        display inline-block
        font-size 18px
        background-color #ffffff
        margin 15px 10px
        float left
     }
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
                width 17%
            }
            .h-num{
               width 18%
            }
            .h-shop{
               width 12%
            }
            .h-comment{
                width 36%
            }
            .h-opera{
               width 17%
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
}

</style>