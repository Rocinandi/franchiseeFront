<template>
    <div class="page">
        <ul class="add-store">
            <li>
                <span class="add-left"><i>*</i>门店名称：</span>
                <div class="add-right">
                    <input type="text" class="inputBox" placeholder="请输入20字以内的门店名称">
                </div>
            </li>
            <li>
                <span class="add-left">门店logo：</span>
                <div class="add-right">
                    <div class="upload">
                        <p>+</p>
                        <span>上传图片</span>
                    </div>
                    <!-- <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload> -->
                </div>
            </li>
            <li>
                <span class="add-left">客服电话：</span>
                <div class="add-right">
                    <input class="inputBox" type="tel">
                </div>
            </li>
            <li>
                <span class="add-left"><i>*</i>预约起止时间：</span>
                <div class="add-right" @mouseleave="checkTimeHide()">
                     <input type="text" readonly @click="checkTime()"   class="el-dropdown-link inputBox checkbox" placeholder="周一至周日">
                     <transition name="el-fade-in-linear">
                        <ul class="dropDown" v-show="checkTimeIsShow">
                            <el-checkbox-group v-model="checkedWeeks">
                                <li v-for="week in weeks" :key="week">
                                    <el-checkbox :label="week">{{week}}</el-checkbox>
                                </li> 
                                <li class="sure" @click="checkBusSure()"><p>确认</p></li>
                            </el-checkbox-group>
                        </ul>
                    </transition>
                    <div class="timeCheck clearfix">
                       <div class="startTimes">
                        <el-time-select
                            placeholder="8:30"
                            v-model="startTime"
                            :picker-options="{
                            start: '8:30',
                            step: '00:30',
                            end: '24:00'
                            }">
                        </el-time-select>
                       </div>
                       <p>
                           至
                       </p>
                       <div class="startTimes">
                            <el-time-select
                            placeholder="24:00"
                            v-model="endTime"
                            :picker-options="{
                            start: '08:30',
                            step: '00:30',
                            end: '24:00',
                            minTime: startTime
                            }">
                        </el-time-select>
                       </div>
                    </div>
                </div>
            </li>
            <li>
                <span class="add-left"><i>*</i>营业起止时间：</span>
                <div class="add-right">
                     <input type="text" readonly @click="checkTime()"
                      class="el-dropdown-link inputBox checkbox" placeholder="周一至周日">
                     <transition name="el-fade-in-linear">
                        <ul class="dropDown" v-show="checkTimeIsShow">
                            <el-checkbox-group v-model="checkedWeeks">
                                <li v-for="week in weeks" :key="week">
                                    <el-checkbox :label="week">{{week}}</el-checkbox>
                                </li> 
                                <li class="sure" @click="checkBusSure()"><p>确认</p></li>
                            </el-checkbox-group>
                        </ul>
                    </transition>
                </div>
            </li>
            <li>
                <span class="add-left">门店位置：</span>
                <div class="add-right">
                   <div class="addcasader">
                        <el-cascader
                        :options="options2"
                        @active-item-change="handleItemChange"
                        :props="props"
                        placeholder="请选择所在地区"
                        ></el-cascader>
                   </div>
                    <input type="text" class="inputBox" placeholder="请输入详细地址">
                    <div class="addMap">
                        我是地图
                    </div>
                </div>
            </li>
            <li>
                <span class="add-left">营业状态：</span>
                <div class="add-right">
                    <label class="switch-btn">
						<input class="checked-switch" type="checkbox">
						<span class="text-switch" data-yes="营业" data-no="打烊"></span> 
						<span class="toggle-btn"></span> 
					</label>
                </div>
            </li>
            <li class="saveMes" @click="saveAddMes()"><p>保存</p></li>
        </ul>
    </div>
</template>

<script>
const cityOptions = ['周一', '周二','周三','周四','周五','周六','周日']

export default {
    data() {
        return {
            checkedlist: true,
            checkTimeIsShow: false,
            checkedWeeks: ['周一', '周二','周三','周四','周五','周六','周日'],
            weeks : cityOptions,
            startTime: '',
            endTime: '',
            options2: [{
            label: '江苏',
            cities: []
            }, {
            label: '浙江',
            cities: []
            }],
            props: {
            value: 'label',
            children: 'cities'
            }
        }
    },
    methods: {
        checkTime() {
           this.checkTimeIsShow = true
        },
        checkTimeHide() {
            this.checkTimeIsShow = false
        },
        checkBusSure() {
            this.checkTimeIsShow = false
            console.log(this.checkedWeeks);
        },
        // 地区联动
        handleItemChange(val) {
        console.log('active item:', val);
        setTimeout(_ => {
          if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
            this.options2[0].cities = [{
              label: '南京'
            }];
          } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
            this.options2[1].cities = [{
              label: '杭州'
            }];
          }
        }, 300);
      },
    //   保存信息
      saveAddMes() {
          console.log(1)
      }
     }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/mixin';

.page{
   min-height calc(100vh - 150px)
   background-color #fff
   .clearfix:after {
    content:""; 
    display: block; 
    clear:both; 
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
              background-color #f8f8f8
              font-size $small-font
              padding-left 5px
              box-sizing border-box
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
              .switch-btn {
                  position: relative; 
                  display: block; 
                  vertical-align: top; 
                  width: 70px; 
                  height: 35px; 
                  border-radius: 18px; 
                  cursor: pointer;
                }
            .checked-switch {
                position: absolute;
                top: 0; 
                left: 0; 
                opacity: 0;}
            .text-switch {
                background-color: #e9e9e9;
                border: 1px solid #e9e9e9; 
                border-radius: inherit; 
                color: #999999; 
                display: block; 
                font-size: $small-font; 
                height: inherit; 
                position: relative; 
                text-transform: uppercase;
                }
            .text-switch:before, .text-switch:after {
                position: absolute; 
                top: 50%; 
                margin-top: -.5em; 
                line-height: 1; 
                -webkit-transition: inherit; 
                -moz-transition: inherit; 
                -o-transition: inherit; 
                transition: inherit;
                }
            .text-switch:before {
                content: attr(data-no); 
                right: 11px;
                }
            .text-switch:after {
                content: attr(data-yes); 
                left: 11px; 
                color: #FFFFFF; 
                opacity: 0;
                }
            .checked-switch:checked ~ .text-switch {
                background-color: #39aafb; 
                border: 1px solid #39aafb;
                }
            .checked-switch:checked ~ .text-switch:before {
                opacity: 0;
                }
            .checked-switch:checked ~ .text-switch:after {
                opacity: 1;
                }
            .toggle-btn {
                background: linear-gradient(#eee, #fafafa); 
                border-radius: 100%; 
                height: 34px; 
                left: 1px; 
                position: absolute; 
                top: 1px; 
                width: 34px;
                }
            .checked-switch:checked ~ .toggle-btn {
                left: 37px;
                }
            .text-switch, .toggle-btn {
                transition: All 0.3s ease; 
                -webkit-transition: All 0.3s ease; 
                -moz-transition: All 0.3s ease; 
                -o-transition: All 0.3s ease;
                }
              .addMap{
                width 380px
                height 255px
                margin-top 20px
                text-align center
                border 1px solid #eeeeee
              }
              .timeCheck{
                margin-top 20px
                p{  
                    float left
                    display inline-block
                    font-size 14px
                    height 30px
                    line-height 30px
                    margin: 0 10px
                }
                .startTimes{
                 float left
                 width 114px
                 height 30px
                 line-height 30px
                 box-sizing border-box
                }
                .el-date-editor.el-input{
                    width 114px
                    height 30px
                }
                .el-icon-time{
                    display none
                }
                .el-icon-time:before{
                   content: " "
                   display none
                }
                .el-input__icon{
                    display none
                }
              }
              .dropDown{
               width 280px
               border 1px solid #eee
               border-top none
               .sure{
                width 280px
                margin-top 10px
                p{
                    width 80px
                    height 30px
                    line-height 30px
                    border-radius 3px
                    margin 0 auto
                    background-color $color-light
                    color #fff
                }
                }
               li{
                   width 140px
                   float left
                   display inline-block
                   box-sizing border-box
                   text-align center
                   cursor pointer
                   margin-top 0
                   height 45px
                   line-height 45px
                   span{
                       display inline-block
                       margin-left 5px
                   }
               }
               li:hover{
                   background-color #f8f8f8
               }
              }
              .el-cascader__label{
               color #999
              }
            }
            .dropDown:after {
                content:""; 
                display: block; 
                clear:both; 
            }
            .upload{
              width 80px
              height 80px
              text-align center
              background-color #e1e1e1
              color #ffffff
              cursor pointer
              relative()
              p{
                font-size 40px
              }
              span{
                font-size $normal-font
              }
            }
        }
    }
    .saveMes{
        color #ffffff
        text-align center
        margin: 0 auto
        padding-bottom 35px
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