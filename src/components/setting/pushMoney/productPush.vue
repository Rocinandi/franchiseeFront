<template>
    <div class="page">
        <ul class="page-title">
            <li>服务提成</li>
            <li>卡项提成</li>
            <li class="active">产品提成</li>
            <li>门店总提成</li>
            <li>全局设置</li>
        </ul>
        <div class="emp-cont">
            <div class="emp-t clearfix">
               <p class='cont-titles'>
                   <i></i><span>卡项提成方案列表</span>
                    <el-tooltip class="item" effect="dark" content="可针对不同级别或组别的员工设置不同的提成方案" placement="top-start">
                        <span class="order-help">
                            <i class="icon-help"></i>
                            <span>帮助</span>
                        </span>
                    </el-tooltip>    
               </p>
                <div class="emp-from">
                    <p class="addNews">新增方案</p>
                </div>
            </div>
            <div class="cont-tab">
                <ul class="clearfix">
                    <li class="h-name">方案名称</li>
                    <li class="h-num">商品分类分类</li>
                    <li class="h-shop">查看规则</li>
                    <li class="h-comment">涉及员工</li>
                    <li class="h-opera">操作</li>
                </ul>
                <ul class="tableCon clearfix">
                    <li class="h-name"><div class="h-text">方案名称</div></li>
                    <li class="h-num"><div class="h-text" title="1分类；2分类；3分类">1分类；2分类；3分类</div></li>
                    <li class="h-shop"><div class="h-text h-allow" @click="dialogVisible = true">查看</div></li>
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
        width="30%">
        <div class="dialog-tab">
            <ul class="clearfix">
                <li class="h-name">卡项分类</li>
                <li class="h-type">提成类型</li>
                <li class="h-way">提成方式</li>
                <li class="h-vip"><span class="h-text">售卡提成点</span></li>
            </ul>
            <ul class="clearfix">
                <li class="h-name">次卡</li>
                <li class="h-type">销售提成</li>
                <li class="h-way">比例提成</li>
                <li class="h-vip">20%</li>
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
  .add-store{
        width 100%
        text-align center
        li:after {
            content:""; 
            display: block; 
            clear:both; 
        }
        li{
            width 360px
            margin 20px auto 0
            font-size $normal-font
            .add-left{
                float left
                display  inline-block
                height 30px
                line-height 30px
                display inline-block
                width 100px
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
              width 250px
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
              textarea{
                 width 250px
                 height 100px
                 border 1px solid #eeeeee
                 box-sizing border-box
                 padding 7px
              }
            }
            .radioInput{
                height 30px
                line-height 30px
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
        border 1px solid #eee
        border-right none
        box-sizing border-box
        border-bottom none 
        li{
            height 50px
            line-height 50px
            float left
            width 25%
            text-align center
            border-right 1px solid #eeeeee
            box-sizing border-box
        }
     }
     ul:first-child{
         background-color #e7f5ff
         border-bottom none
     }
     ul:last-child{
         border-bottom 1px solid #eeeeee
     }
  }
}

</style>