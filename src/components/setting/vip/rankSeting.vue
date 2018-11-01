<template>
    <div class="page">
        <ul class="page-title">
            <li class="active" @click="goVipClass()">等级设置</li>
            <li @click="goGrowSeting()">成长值设置</li>
            <li @click="goRecordSeting()">档案设置</li>
            <li @click="goSuccessCode()">安全码</li>
            <li @click="goLabelSeting()">标签设置</li>
            <li @click="goSourceMgn()">来源管理</li>
        </ul>
        <div class="emp-cont">
            <div class="emp-t clearfix">
               <p class='cont-titles'><i></i><span>会员等级列表</span></p>
                <div class="emp-from">
                    <p class="addNews" @click="goVipAddClass()">新增等级</p>
                </div>
            </div>
            <div class="cont-tab">
                <ul class="clearfix">
                    <li class="h-name">等级名称</li>
                    <li class="h-num">会员数</li>
                    <li class="h-shop">所需成长值</li>
                    <li class="h-pos">服务折扣</li>
                    <li class="h-sys">商品折扣</li>
                    <li class="h-comment">备注</li>
                    <li class="h-opera">操作</li>
                </ul>
                <ul class="tableCon clearfix">
                    <li class="h-name">普通会员</li>
                    <li class="h-num">1000</li>
                    <li class="h-shop">1000</li>
                    <li class="h-pos h-allow">10折</li>
                    <li class="h-sys h-allow">10折</li>
                    <li class="h-comment">备注内容</li>
                    <li class="h-opera">
                        <span>编辑</span>
                        <span>删除</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value2: true
        }
    },
    methods: {
        goVipAddClass() {
           this.$router.push({
               path: "/main/setting/vipAddClass"
           })
        },
        goVipClass() {
             this.$router.push({
             path: "/main/setting/vipAddClass"
           })
        },
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
      .addNews{
        display inline-block
        padding  0 20px
        height 30px
        line-height 30px
        text-align center
        background-color $color-light
        color #ffffff
        margin-right 5px
        margin-top 10px
        cursor pointer
        border-radius 2px
      }
    }
    .cont-tab{
        width 100%
        // border 1px solid #e1e1e1
        // border-top none
        // border-bottom none
        // box-sizing border-box
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
            .h-name{
               width 15%
            }
            .h-num{
               width 10%
            }
            .h-shop{
               width 10%
            }
            .h-pos{
              width 10%
            }
            .h-sys{
              width 10%
            }
            .h-comment{
                width 30%
            }
            .h-opera{
               width 15%
               span:last-child{
                   display inline-block
                   margin-left 15px
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
                color #ff0000
            }
            .h-noallow{
                color #ff0018
            }
            .h-opera{
              color $color-light
              cursor pointer
            }
            .h-comment{
              color #999999
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
}
</style>