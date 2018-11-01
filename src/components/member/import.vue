<template>
  <div class="page">
    <div class="page-sub-title"><span>导入会员</span></div>
    <div class="panle">
      <div class="download-block">
        <div class="title">模板下载</div>
        <div class="download-inner">
          <p class="describe">支持xIsx、csv文件格式</p>
          <p class="describe">每次最多导入1万条记录</p>
          <a href="" class="download-btn">下载模板</a>
        </div>
      </div>
      <div class="upload-block">
        <div class="title">文件上传</div>
        <div class="upload-inner">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
          </el-upload>
        </div>
      </div>
    </div>
    <div class="submit-btn">提交</div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="stylus" scoped>
@import '~@/assets/stylus/mixin'
.page
  font-size 14px
  .page-sub-title
    background #fff
  .panle
    position relative
    overflow hidden
    background #fff
    border 1px solid #e1e1e1
    border-top 0
    &:after
      content ''
      position absolute
      width 1px
      height 100%
      left 50%
      top 0
      z-index 5
      background #e1e1e1
    .title
      height 50px
      line-height 50px
      padding 0 20px
      color #666
      border-bottom 1px solid #e1e1e1
      background #f0f4f8
    .download-block
      float left
      width 50%
      .download-inner
        padding 40px 20px 240px
        text-align center
        .download-btn
          display inline-block
          min-width 100px
          height 30px
          padding 0 10px
          margin 140px auto 0
          text-align center
          line-height 30px
          color #fff
          border-radius 3px
          background $color-light
      .describe
        color #666
        line-height 30px
        text-align left
        &:before
          content ''
          display inline-block
          width 7px
          height 7px
          margin-right 6px
          margin-top -3px
          border-radius 50%
          background #666
          vertical-align middle
    .upload-block
      float left
      width 50%
      .upload-inner
        width 362px
        padding 140px 0
        margin 0 auto
  .submit-btn
    width 100px
    height 35px
    margin 35px auto
    line-height 35px
    text-align center
    font-size 14px
    color #fff
    border-radius 3px
    background $color-light
    cursor pointer
</style>
