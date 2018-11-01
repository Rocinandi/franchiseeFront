<template>
    <div class="page">
        <ul class="page-title">
            <li @click="goEmpManage()">员工管理</li>
            <li class="active">操作记录</li>
        </ul>
        <div class="emp-cont">
            <div class="emp-t clearfix">
               <p class='cont-titles'><i></i><span>操作记录</span></p>
                <div class="emp-from">
                    <div class="search">
                        <input class="searchInput" type="text" placeholder=" 输入员工姓名">
                        <i class="icon-fangdajing"></i>
                    </div>
                    <el-date-picker
                    v-model="timeValue"
                    type="daterange"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                    <el-select class="selects" v-model="jobsValue" placeholder="所有岗位">
                        <el-option
                        v-for="item in jobList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select class="selects" v-model="nameValue" placeholder="全部员工">
                        <el-option
                        v-for="item in nameList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="cont-tab">
                <ul class="clearfix">
                    <li class="h-name">姓名</li>
                    <li class="h-num">所属门店</li>
                    <li class="h-shop">职位</li>
                    <li class="h-tel">联系电话</li>
                    <li class="h-comment">操作时间</li>
                    <li class="h-opera">操作记录</li>
                </ul>
                <ul class="tableCon clearfix">
                    <li class="h-name">张三</li>
                    <li class="h-num">15023500943</li>
                    <li class="h-shop">门店名称</li>
                    <li class="h-tel">15023500943</li>
                    <li class="h-comment">2018-08-07 11:15:07</li>
                    <li class="h-opera">编辑了门店类提成方案“总提成方案”</li>
                </ul>
            </div>
            <div class="pages">
             <el-pagination
            :page-size="20"
            :pager-count="11"
            layout="prev, pager, next"
            :total="1000">
            </el-pagination>
       </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timeValue: "",
            jobsValue: "",
            nameValue: "",
            jobList: [{
                value: "1",
                label: "所有岗位"
            },{
                value: "2",
                label: "管理技师"
            }],
            nameList: [{
                value: "1",
                label: "员工名称111"
            },{
                value: "2",
                label: "员工名称"
            }]
        }
    },
    methods: {
        goEmpManage() {
            this.$router.push({
                path: "/main/setting/empManage"
            })
        }
    }

}
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/mixin';

>>>.el-date-editor{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    margin-right: 20px;
}
>>>.el-date-editor .el-range__icon{
   height: 25px;
   line-height: 25px;
}
>>>.el-icon-arrow-up{
  line-height: 30px;
}
>>>.el-date-editor .el-range-input, .el-date-editor .el-range-separator{
   height: 25px;
   line-height: 25px;
}
>>>.el-date-editor .el-range-separator{
   height: 30px;
   line-height: 30px;
}
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
        margin-right 20px
        .searchInput{
          width 215px
          height 30px
          border 1px solid #eeeeee
          box-sizing border-box
          padding-left 12px
          background-color #f8f8f8
          border-radius 2px
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
         width 115px
         height 30px
         line-height 30px
         box-sizing border-box 
         margin-right 20px
         cursor pointer
         >>>.el-input__inner{
           height 30px
           line-height 30px
           >>>.el-input__icon{
           height 30px
           line-height 30px
           }
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
      }
      .addNews{
        background-color $color-light
        color #ffffff
        margin-right 5px
        margin-top 10px
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
               width 10%
            }
            .h-num{
               width 12%
            }
            .h-shop{
               width 12%
            }
            .h-tel{
              width 13%
            }
            .h-comment{
                width 18%
            }
            .h-opera{
               width 35%
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
  .pages{
    text-align right
    padding 20px
  }
}

</style>