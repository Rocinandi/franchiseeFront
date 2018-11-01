<template>
    <div class="page">
        <ul>
            <li><el-checkbox v-model="checked">全选</el-checkbox></li>
        </ul>
        <ul class="clearfix">
            <li class="li-1"><el-checkbox v-model="checked">概览</el-checkbox></li>
            <li class="li-5"></li>
            <li class="li-4 li-border-none"><el-checkbox v-model="checked">快速开单</el-checkbox></li>
            <li class="li-4 li-border-none"><el-checkbox v-model="checked">新增预约</el-checkbox></li>
            <li class="li-4 li-border-none"><el-checkbox v-model="checked">新增会员</el-checkbox></li>
            <li class="li-4 li-border-none"><el-checkbox v-model="checked">新增潜客</el-checkbox></li>
        </ul>
        <ul class="clearfix">
            <li class="li-1"><el-checkbox v-model="checked">预约</el-checkbox></li>
            <li class="li-2"><el-checkbox v-model="checked">预约大屏</el-checkbox></li>
            <li class="li-2"><el-checkbox v-model="checked">预约列表</el-checkbox></li>
        </ul>
        <ul class="clearfix">
            <li class="li-1"><el-checkbox v-model="checked">商品</el-checkbox></li>
            <li class="li-3"><el-checkbox v-model="checked">服务</el-checkbox></li>
            <li class="li-4"><el-checkbox v-model="checked">管理服务分类</el-checkbox></li>
            <li class="li-4"><el-checkbox v-model="checked">管理服务标签</el-checkbox></li>
            <li class="li-4"><el-checkbox v-model="checked">新增服务</el-checkbox></li>
            <li class="li-4"></li>
            <li class="li-3"><el-checkbox v-model="checked">卡项</el-checkbox></li>
            <li class="li-4"><el-checkbox v-model="checked">新增卡项</el-checkbox></li>
            <li class="li-4"></li>
            <li class="li-4"></li>
            <li class="li-4"></li>
            <li class="li-3 li-border-none"><el-checkbox v-model="checked">产品</el-checkbox></li>
            <li class="li-4 li-border-none"><el-checkbox v-model="checked">管理产品分类</el-checkbox></li>
            <li class="li-4 li-border-none"><el-checkbox v-model="checked">管理产品标签</el-checkbox></li>
            <li class="li-4 li-border-none"><el-checkbox v-model="checked">新增产品</el-checkbox></li>
            <li class="li-4 li-border-none"></li>
        </ul>
        <ul>
            <li class="li-1"><el-checkbox v-model="checked">订单</el-checkbox></li>
        </ul>
        <ul class="clearfix">
            <li class="li-1"><el-checkbox v-model="checked">会员</el-checkbox></li>
            <li class="li-5 li-border-none"></li>
            <li class="li-4 li-border-none"><el-checkbox v-model="checked">启用禁用会员</el-checkbox></li>
            <li class="li-4 li-border-none"><el-checkbox v-model="checked">编辑</el-checkbox></li>
            <li class="li-4 li-border-none"><el-checkbox v-model="checked">增减成长值</el-checkbox></li>
            <li class="li-4 li-border-none"></li>
        </ul>
        <ul>
            <li class="li-1"><el-checkbox v-model="checked">潜客</el-checkbox></li>
        </ul>
        <ul>
            <li class="li-1"><el-checkbox v-model="checked">营销</el-checkbox></li>
        </ul>
        <ul class="clearfix">
            <li class="li-1"><el-checkbox v-model="checked">统计</el-checkbox></li>
            <li class="li-2"><el-checkbox v-model="checked">交易流水</el-checkbox></li>
            <li class="li-2"><el-checkbox v-model="checked">卡耗统计</el-checkbox></li>
            <li class="li-2"><el-checkbox v-model="checked">业绩提成</el-checkbox></li>
            <li class="li-2"><el-checkbox v-model="checked">冻结时间</el-checkbox></li>
        </ul>
        <ul class="clearfix">
            <li class="li-1"><el-checkbox v-model="checked">设置</el-checkbox></li>
            <li class="li-3"><el-checkbox v-model="checked">重要设置</el-checkbox></li>
            <li class="li-4"><el-checkbox v-model="checked">门店设置</el-checkbox></li>
            <li class="li-4"><el-checkbox v-model="checked">员工设置</el-checkbox></li>
            <li class="li-4"><el-checkbox v-model="checked">预约设置</el-checkbox></li>
            <li class="li-4"></li>
            <li class="li-3"><el-checkbox v-model="checked">辅助设置</el-checkbox></li>
            <li class="li-4"><el-checkbox v-model="checked">品牌设置</el-checkbox></li>
            <li class="li-4"><el-checkbox v-model="checked">会员设置</el-checkbox></li>
            <li class="li-4"><el-checkbox v-model="checked">提成设置</el-checkbox></li>
            <li class="li-4"><el-checkbox v-model="checked">折扣设置</el-checkbox></li>
            <li class="li-3 li-border-none"></li>
            <li class="li-4 li-border-none"><el-checkbox v-model="checked">权限设置</el-checkbox></li>
            <li class="li-4 li-border-none"></li>
            <li class="li-4 li-border-none"></li>
            <li class="li-4 li-border-none"></li>
        </ul>
        <div class="saveMes">
            <p>保存</p>
        </div>
    </div>
</template>

<script>
export default {
       data () {
        return {
            checked: false,
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
    padding 20px
    .clearfix:after {
    content:""; 
    display: block; 
    clear:both; 
    }
    ul{
        width 100%
        text-align left 
        margin-bottom 20px
        border 1px solid #eeeeee
        li{
            background-color #e7f5ff
            height 40px
            line-height 40px
            padding 0 20px
        }
        .li-1{
           width 100%
           text-align left 
           padding 0 20px
           box-sizing border-box
           border-bottom 1px solid #eeeeee
        }
        .li-2{
           width  20%
           display inline-block
           border-right 1px solid #eeeeee
           box-sizing border-box
           display block
           border-bottom 1px solid #eeeeee
        }
        .li-2:last-child{
           border-bottom none 
        }
       .li-3{
           width  20%
           display inline-block
           border-right 1px solid #eeeeee
           box-sizing border-box
           float left
           border-bottom 1px solid #eeeeee
        }
        .li-5{
           width  20%
           display inline-block
           float left
           border-right 1px solid #eeeeee
           box-sizing border-box
        }
        .li-5:last-child{
          border-right none 
        }
        .li-4{
           width  20%
           display inline-block
           float left
           box-sizing border-box
           border-right  1px solid #eeeeee
           border-bottom 1px solid #eeeeee
           background-color #ffffff
        }
        .li-border-none{
           border-bottom none 
        }
    }
    ul:first-child{
        text-align center
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
