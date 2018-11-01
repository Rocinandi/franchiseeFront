<template>
    <div class="page">
        <ul class="page-title">
            <li @click="goVipClass()">等级设置</li>
            <li @click="goGrowSeting()">成长值设置</li>
            <li class="active" @click="goRecordSeting()">档案设置</li>
            <li @click="goSuccessCode()">安全码</li>
            <li @click="goLabelSeting()">标签设置</li>
            <li @click="goSourceMgn()">来源管理</li>
        </ul>
        <div class="emp-cont">
            <div class="emp-t clearfix">
               <p class='cont-titles'><i></i><span>基本信息</span></p>
            </div>
            <ul class="add-store">
                <li>
                    <span class="add-left">姓名：</span>
                    <div class="add-right">
                        <input type="text" class="inputBox" placeholder="请输入姓名">
                    </div>
                </li>
                <li>
                    <span class="add-left">手机号：</span>
                    <div class="add-right">
                        <input type="text" class="inputBox" placeholder="请输入手机号">
                    </div>
                </li>
                <li>
                    <span class="add-left">备注：</span>
                    <div class="add-right">
                        <textarea name="" id="" cols="30" rows="10" placeholder="请输入备注"></textarea>
                    </div>
                </li>
                <li>
                    <span class="add-left">微信号：</span>
                    <div class="add-right">
                        <input type="text" class="inputBox1" placeholder="请输入微信号">
                    </div>
                </li>
                <li>
                    <span class="add-left">生日：</span>
                    <div class="add-right">
                            <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                    </div>
                </li>
                <li>
                    <span class="add-left">地址：</span>
                    <div class="add-right">
                        <input type="text" class="inputBox1" placeholder="请输入地址">
                    </div>
                </li>
                <li>
                    <span class="add-left">请输入标题：</span>
                    <div class="add-right">
                        <input type="text" class="inputBox1" placeholder="请输入内容">
                        <span class="del">删除</span>
                    </div>
                </li>
                <li>
                    <span class="add-left">请输入标题：</span>
                    <div class="add-right add-upload">
                        <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                        <span class="del">删除</span>
                    </div>
                </li>
                <li>
                    <span class="add-left">请输入标题：</span>
                    <div class="add-right">
                        <input class="inputBox" type="tel">
                    </div>
                </li>
         </ul>
         <div class="text-btn">
             <p>添加文本</p>
             <p>添加日期</p>
             <p>添加图片</p>
         </div>
        </div>
         <div class="emp-cont">
            <div class="emp-t clearfix">
               <p class='cont-titles'><i></i><span>私密信息</span></p>
            </div>
            <ul class="add-store">
                <li>
                    <span class="add-left">请输入标题：</span>
                    <div class="add-right">
                        <input type="text" class="inputBox1" placeholder="请输入内容">
                        <span class="del">删除</span>
                    </div>
                </li>
                <li>
                    <span class="add-left">请输入标题：</span>
                    <div class="add-right add-upload">
                        <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                        <span class="del">删除</span>
                    </div>
                </li>
                <li>
                    <span class="add-left">请输入标题：</span>
                    <div class="add-right">
                        <input class="inputBox" type="tel">
                    </div>
                </li>
         </ul>
         <div class="text-btn">
             <p>添加文本</p>
             <p>添加日期</p>
             <p>添加图片</p>
         </div>
        </div>
        <div class="save">
            <p>保存</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value1: '',
            radio: 1,
            dialogImageUrl: '',
            dialogVisible: false
        }
    },
    methods: {
    //   删除图片
      handleRemove(file, fileList) {
         console.log(file, fileList);
      },
    //  查看大图 
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
    // 路径跳转
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
    .order-help{
    display inline-block
    height 50px
    line-height 50px
    font-size 14px
    color #999
    cursor pointer
    margin-left 5px
    .icon-help{
        display inline-block
        margin-top 5px
        font-size 20px
        color #ffb400
     }  
    }
    .emp-t{
       box-sizing  border-box
       border-bottom 1px solid #e5e5e5
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
  }
  .add-store{
        padding-top 50px
        width 100%
        text-align center
        li:after {
            content:""; 
            display: block; 
            clear:both; 
        }
        li{
            width 520px
            margin 20px auto 0
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
            .inputBox{
              width 280px
              height 30px
              line-height 30px
              border 1px solid #eeeeee
              font-size $small-font
              padding-left 5px
              box-sizing border-box
              border-radius 2px
            }
            .inputBox1{
              width 210px
              height 30px
              line-height 30px
              border 1px solid #eeeeee
              font-size $small-font
              padding-left 5px
              box-sizing border-box
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
              width 390px
              display inline-block
              text-align left
              margin-left 10px
            .del{
            display inline-block
            color $color-light
            margin-left 10px
            cursor pointer
            }
            textarea{
                width 280px
                height 110px
                padding 7px 
                border 1px solid #eeeeee
                border-radius 2px
                box-sizing border-box
            }
            }
            >>>.el-input__inner{
            width: 210px;
            box-sizing: border-box;
            border: 1px solid #eeeeee;
            }    
            >>>.el-date-editor{
                width 170px
                .el-input__prefix{
                    line-height 30px
                .el-input__icon{
                    line-height 30px
                    }
                }
                .el-input__suffix{
                    .el-icon-circle-close{
                    line-height 30px
                    }
                }
            }
            >>>.add-upload{
                position relative
                height: 80px;
                line-height: 80px;
                div{
                    display: inline-block;
                    height: 80px;
                    line-height: 80px;
                }
                .del{
                display inline-block
                color $color-light
                margin-left 10px
                cursor pointer
                height: 80px;
                line-height: 80px;
                }
                .el-upload--picture-card{
                border: none;
                width: 80px;
                height: 80px;
                opacity: 1;
                background: url('~@/assets/image/upload-bg.jpg') center no-repeat;
                background-size: 100%;
                }
                .el-upload--picture-card .el-icon-plus{
                display: none;
               }
                .el-upload-list__item ,
                .is-success,
                .el-upload-list__item-actions{
                width: 80px;
                height: 80px;
                }
            }
        }
    }
    .text-btn{
    text-align right
    margin-right 100px
    padding 15px 0
    p{
        display inline-block
        width 85px
        height 30px
        line-height 30px
        text-align center 
        border 1px solid #eeeeee
        margin-left 10px
        border-radius 2px
        cursor pointer
        font-size $small-font
    }
    p:first-child{
       color #ffffff
       background-color $color-light
       border none
    }
    }
    .save{
       padding 30px 0 70px
       font-size 18px
       background-color #f6f6f6
       text-align center
       p{
        display inline-block
        padding 0 60px
        cursor pointer
        border-radius 8px
        height 50px
        line-height 50px
        text-align center
        color #ffffff
        background-color #39aafb
        margin 0 auto
       }
    }
}
</style>