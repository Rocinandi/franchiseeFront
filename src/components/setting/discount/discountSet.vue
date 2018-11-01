<template>
    <div class="page">
        <div class="emp-cont">
            <div class="emp-t clearfix">
               <p class='cont-titles'>
                   <i></i><span>折扣列表</span>
                    <el-tooltip class="item" effect="dark" content="设置成功并启用后可在开单时设置折扣" placement="top-start">
                        <span class="order-help">
                        <i class="icon-help"></i>
                        <span>帮助</span>
                        </span>
                    </el-tooltip>    
               </p>
                <div class="emp-from">
                    <p class="addNews" @click="dialogVisible = true">新增折扣</p>
                </div>
            </div>
            <div class="cont-tab">
                <ul class="clearfix">
                    <li class="h-name">折扣名称</li>
                    <li class="h-num">折扣类型</li>
                    <li class="h-shop">添加时间</li>
                    <li class="h-comment">备注</li>
                    <li class="h-state">启用状态</li>
                    <li class="h-opera">操作</li>
                </ul>
                <ul class="tableCon clearfix">
                    <li class="h-name"><div class="h-text">优惠30元</div></li>
                    <li class="h-num"><div class="h-text">按金额</div></li>
                    <li class="h-shop"><div class="h-text">2018-12-12 12：12：12</div></li>
                    <li class="h-comment"><div class="h-text" title="备注内容备注内容备注内容备注内容备注内容备注内容备注内容备注内容备注内容备注内容1111">备注内容备注内容备注内容备注内容备注内容备注内容备注内容备注内容备注内容备注内容</div></li>
                    <li class="h-state">
                        <el-switch
                        v-model="value2"
                        active-color="#39aafb"
                        inactive-color="#e1e1e1">
                        </el-switch>
                    </li>
                    <li class="h-opera">
                        <span>编辑</span>
                        <span>操作</span>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 弹窗 -->
        <el-dialog
        title="新增折扣方案"
        :visible.sync="dialogVisible"
        width="30%">
        <ul class="add-store">
            <li>
                <span class="add-left"><i>*</i>方案名称：</span>
                <div class="add-right">
                    <input type="text" class="inputBox" placeholder="请输入10个字以内的折扣名称">
                </div>
            </li>
            <li>
                <span class="add-left">折扣类型：</span>
                <div class="add-right radioInput">
                    <el-radio v-model="radio" label="1">按折扣</el-radio>
                    <el-radio v-model="radio" label="2">按金额</el-radio>
                </div>
            </li>
            <li>
                <span class="add-left"><i>*</i>优惠值：</span>
                <div class="add-right">
                    <input type="text" class=" inputBox1" placeholder="请输入金额">元
                </div>
            </li>
            <li>
                <span class="add-left">备注：</span>
                <div class="add-right">
                    <textarea name="" id="" cols="30" rows="10" placeholder="请输入200字以内备注"></textarea>
                </div>
            </li>
        </ul>
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
         text-align center
         height 30px
         line-height 30px
         padding 0 20px
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
                width 15%
            }
            .h-num{
               width 12%
            }
            .h-shop{
               width 20%
            }
            .h-comment{
                width 25%
            }
            .h-state{
               width 13%
            }
            .h-opera{
               width 15%
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
}

</style>