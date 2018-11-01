<template>
  <div class="page">
    <div class="page-sub-title"> <span>编辑会员</span></div>
    <div class="info-block">
      <div class="title"><span class="icon-label"></span>基本信息</div>
      <ul class="form-area">
        <li class="form-row">
          <div class="label"><span class="required">*</span>姓名：</div>
          <input type="text" class="form-input" placeholder="请输入姓名">
        </li>
        <li class="form-row">
          <div class="label"><span class="required">*</span>手机号：</div>
          <input type="text" class="form-input" placeholder="请输入手机号">
        </li>
        <li class="form-row">
          <span class="label">性别：</span>
          <el-radio v-model="gender" label="0">男</el-radio>
          <el-radio v-model="gender" label="1">女</el-radio>
          <el-radio v-model="gender" label="2">保密</el-radio>
        </li>
        <li class="form-row">
          <div class="label">生日：</div>
          <el-date-picker
            v-model="birthday"
            type="date"
            placeholder="选择日期"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </li>
        <li class="form-row">
          <div class="label">微信号：</div>
          <input type="text" class="form-input" placeholder="请输入微信号">
        </li>
        <li class="form-row">
          <div class="label">会员来源：</div>
          <el-select v-model="sourceVal" placeholder="请选择">
            <el-option
              v-for="item in sourceOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </li>
        <li class="form-row">
          <div class="label">所属门店：</div>
          <el-select v-model="storeVal" placeholder="请选择">
            <el-option
              v-for="item in storeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </li>
        <li class="form-row">
          <div class="label">营销顾问：</div>
          <el-select v-model="adviserVal" placeholder="请选择">
            <el-option
              v-for="item in adviserOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </li>
        <li class="form-row">
          <div class="label">营销顾问：</div>
          <textarea class="form-textarea" maxlength="200" placeholder="请输入200字以内备注信息"></textarea>
        </li>
        <li class="form-row">
          <div class="label">上传图片：</div>
          <div class="upload-area">
            <div class="imgs" v-for="(item, index) in imgUrl" :key="index">
              <img :src="item" alt="">
              <span class="cover"><i class="icon-view2" @click="viewImg(item)"></i><i class="icon-delete" @click="deleteImg(index)"></i></span>
            </div>
            <div class="upload-file">
              <input type="file" id="upfile" accept="image/png,image/gif,image/jpeg,image/bmp, image/mbm" @change="handleChange($event)">
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="info-block">
      <div class="title">私密信息</div>
      <ul class="form-area">
        <li class="form-row">
          <div class="label">姓名：</div>
          <input type="text" class="form-input" placeholder="请输入姓名">
        </li>
        <li class="form-row">
          <div class="label">手机号：</div>
          <input type="text" class="form-input" placeholder="请输入手机号">
        </li>
      </ul>
    </div>
    <!-- 查看图片弹出 -->
    <el-dialog
      title=" "
      :visible.sync="viewImgDialog"
      width="50%"
    >
      <img :src="viewImgUrl" alt="" style="width: 100%">
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      gender: '2',
      birthday: '2018-1-1',
      sourceVal: '1', //会员来源
      sourceOptions: [{ //会员来源选项
        value: '1',
        label: '黄金糕'
      }, {
        value: '2',
        label: '双皮奶'
      }],
      storeVal: '1', //所属门店
      storeOptions: [{ //所属门店选项
        value: '1',
        label: '门店'
      }, {
        value: '2',
        label: '门店2'
      }],
      adviserVal: '1', //营销顾问
      adviserOptions: [{ //营销顾问选项
        value: '1',
        label: '顾问1'
      }, {
        value: '2',
        label: '顾问2'
      }],
      remark: '',
      imgUrl: ['http://10.10.8.22:9377/resource/images/2018/10/d584bda1-5472-4e36-91f4-ea74c26215fa.jpg'], //上传图片地址
      viewImgDialog: false, //查看图片弹层
      viewImgUrl: '' //查看图片
    }
  },
  methods: {
    deleteImg(i) { //删除图片
      console.log('删除图片')
      this.imgUrl.splice(i,1)
    },
    viewImg(url) { //查看图片
      console.log(url)
      this.viewImgDialog = true
      this.viewImgUrl = url
    },
    handleChange(event) {
      let formData = new FormData()
      let files = event.target.files[0]
      let fileSize = files.size
      if (  Math.round(fileSize/1024)/1000 > 2 ) {
        this.$notify.error({
          title: '错误',
          message: '图片传入过大'
        });
        return
      }
      formData.append('file', files)
      axios({
        url: 'http://10.10.8.22:9377/dataResource/user/uploadFile.do',
        method: 'post',
        contentType: false,    //这个一定要写
	      processData: false,   //这个也一定要写，不然会报错
        responseType: 'json', // 默认的
        data: formData
      }).then((res) => {
        if(res.data.result == '200'){
          this.imgUrl.push(res.data.file_url)
        }else{
          this.$notify.error({
            title: '错误',
            message: res.data.message
          });
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/stylus/mixin'
>>> .el-input__inner
      height 40px
      width 260px
    .el-date-editor.el-input
      width auto
.page
  font-size 14px
  background #fff
  .info-block
    position relative
    padding-left 134px
    .title  
      position absolute
      left -5px
      top 76px
      width 140px
      height 50px
      padding-right 20px
      line-height 50px
      text-align center
      color #fff
      background url('~@/assets/image/icon-member-title.png') left center no-repeat
      .icon-label
        margin-left -18px
        margin-right 10px
      .icon-label:before
        content:"\e6b8"
    .form-area
      min-height 100px
      padding 74px 0 30px
      color #333
      border-left 1px solid #e1e1e1
      .form-row
        margin-bottom 20px
        line-height 40px
      .label
        display inline-block
        width 130px
        padding-right 14px
        text-align right
        .required
          display inline-block
          height 40px
          margin-right 2px
          line-height 45px
          vertical-align top
          font-size 18px
          color red
      .form-input
        width 260px
        height 40px
        box-sizing border-box
        padding 0 10px
        border-radius 3px
        border 1px solid #e1e1e1
      .form-textarea
        width 540px
        height 180px
        color #333
        padding 6px 12px
        line-height 24px
        vertical-align top
        box-sizing border-box
        border-radius 3px
        border 1px solid #e1e1e1
        outline none
        resize none
    .upload-area
      display inline-block
      height 122px
      vertical-align top
      overflow hidden
      .imgs
        float left
        position relative
        width 120px
        height 120px
        overflow hidden
        margin-right 10px
        border-radius 3px
        border 1px solid #e1e1e1
        &:hover
          .cover
            display block
        &:after
          content ''
          position absolute
          right -15px
          top -6px
          width 40px
          height 24px
          background #13ce66
          transform rotate(45deg)
          box-shadow 0 0 1pc 1px rgba(0,0,0,.2)
          z-index 1
        &:before
          position absolute
          right 0
          top 0
          width 14px
          line-height 18px
          content: '\e6c6'
          font-family: 'iconfont'
          color #fff
          font-size 12px
          z-index 2
        img
          float left
          width 120px
          height 120px
      .cover
        display none
        position absolute
        left 0
        top 0
        width 120px
        height 120px
        line-height 120px
        background rgba(0,0,0,.6)
        z-index 3
        i
          float left
          width 60px
          height 120px
          line-height 120px
          font-size 20px
          color #fff
          text-align center
          cursor pointer
    .upload-file
      float left
      width 120px
      height 120px
      background #e1e1e1 url('~@/assets/image/upload-bg.jpg') center no-repeat 
      background-size 80px
      border-radius 3px
      overflow hidden
      input
        width 120px
        height 100px
        opacity 0
</style>
