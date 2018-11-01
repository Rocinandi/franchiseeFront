<template>
    <div class="page">
        <ul class="page-title">
            <li class="active">员工管理</li>
            <li @click="goPeraRecord()">操作记录</li>
        </ul>
        <div class="emp-cont">
            <div class="emp-t clearfix">
               <p class='cont-titles'><i></i><span>员工列表</span></p>
                <div class="emp-from">
                    <div class="search">
                        <input class="searchInput" type="text" placeholder=" 输入员工姓名">
                        <i class="icon-fangdajing"></i>
                    </div>
                      <el-select class="selects" v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                       </el-select>
                    <p class="exportMes">导出员工</p>
                    <p class="inportMes" @click="goImport()">导入员工</p>
                    <p class="addNews" @click="goEditorEmployee()">新增员工</p>
                </div>
            </div>
            <div class="cont-tab">
                <ul class="clearfix">
                    <li class="h-name">姓名</li>
                    <li class="h-num">登录账号</li>
                    <li class="h-shop">所属门店</li>
                    <li class="h-pos">职位</li>
                    <li class="h-sys">登录系统</li>
                    <li class="h-tel">联系电话</li>
                    <li class="h-comment">备注</li>
                    <li class="h-state">启用状态</li>
                    <li class="h-opera">操作</li>
                </ul>
                <ul class="tableCon clearfix" 
                  v-for="(list , index) in csData" 
                  :key="(list , index)">
                    <li class="h-name">{{list.name}}</li>
                    <li class="h-num">{{list.id}}</li>
                    <li class="h-shop">{{list.shop}}</li>
                    <li class="h-pos">{{list.job}}</li>
                    <li :class= "list.allow ? 'h-sys h-allow':'h-sys h-noallow'">
                        <div class="h-text" v-show="list.allow == 0">不允许</div>
                        <div class="h-text" v-show="list.allow == 1">允许</div>
                    </li>
                    <li class="h-tel">{{list.tel}}</li>
                    <li class="h-comment">{{list.comment}}</li>
                    <li class="h-state">
                        <el-switch
                        v-model="list.status"
                        :active-value="1"
                        :inactive-value="0" 
                        active-color="#39aafb"
                        inactive-color="#e1e1e1"
                        @change="changeSwitch($event,index)"
                        >
                        </el-switch>
                    </li>
                    <li class="h-opera" @click="goEditorEmployee()">编辑</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        options: [{
        value: '选项1',
        label: '全部员工'
        }, {
        value: '选项2',
        label: '总部员工'
        }, {
        value: '选项3',
        label: '门店名称'
        }],
        value: '',
        // 假数据
        csData: [
            {
            name: '张三',
            id: "11111111",
            shop: '门店1',
            job: "高级管理员",
            allow: 0,
            tel: "1581111111",
            comment: "我是备注1111111",
            status: 1,
            },
            {
            name: '李四2222222',
            id: "2222222",
            shop: '门店1',
            job: "高级管理员",
            allow: 1,
            tel: "1582222222",
            comment: "我是备注22222",
            status: 0,
            },
            {
            name: '李四2222222',
            id: "2222222",
            shop: '门店1',
            job: "高级管理员",
            allow: 0,
            tel: "1582222222",
            comment: "我是备注22222",
            status: 1,
            },
        ],
        }
    },
    methods: {
        goPeraRecord() {
           this.$router.push({
               path: "/main/setting/operaRecord"
           })
        },
       goEditorEmployee() {
           this.$router.push({
               path: "/main/setting/addEmployee"
           })
       },
       goImport() {
           this.$router.push({
               path: "/main/setting/importemployee"
           })
       },
       changeSwitch(val,id) {
         console.log(val,id);
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
      .search{
        display inline-block
        relative()
        width 215px
        height 30px
        margin-top 10px
        margin-right 45px
        .searchInput{
          width 215px
          height 30px
          border 1px solid #eeeeee
          box-sizing border-box
          padding-left 12px
          background-color #f8f8f8
       }
      .icon-fangdajing{
        color $color-light
        font-size 20px
        absolute()
        right 12px
        top 5px
        cursor pointer
        }
      }
      p{
        display inline-block
      }
     .selects{
         min-width 115px
         height 30px
         line-height 30px
         box-sizing border-box 
         margin-right 20px
         cursor pointer
        .el-input__inner{
          height 30px
          line-height 30px
        }
        >>>.el-input{
          width 115px
        }
        >>>.el-input__icon{
          height 30px
          line-height 30px
        }
      }
      p{
         width 115px
         text-align center
         height 30px
         line-height 30px
         background-color #f8f8f8
         border 1px solid #eeeeee
         box-sizing border-box 
         color $color-text
         margin-right 20px
         cursor pointer
         border-radius 2px
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
            }
            li:first-child{
               border-left 1px solid #e1e1e1 
            }
            li:last-child{
               border-right 1px solid #e1e1e1 
            }
            .h-name{
               width 11%
            }
            .h-num{
               width 9%
            }
            .h-shop{
               width 11%
            }
            .h-pos{
              width 8%
            }
            .h-sys{
              width 11%
            }
            .h-tel{
              width 11%
            }
            .h-comment{
                width 20%
            }
            .h-state{
               width 10%
            }
            .h-opera{
               width 9%
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