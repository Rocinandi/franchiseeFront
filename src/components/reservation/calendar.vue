<template>
  <div class="page"> 
    <div class="tab-bar">
      <ul class="page-title">
        <li class="active">预约大屏</li>
        <li @click="toList()">预约列表</li>
      </ul>
    </div>
    <div class="tool-bar">
      <span class="tool-item add-btn">新增预约</span>
      <span class="tool-item lock-time">锁定时间</span>
      
      <el-select v-model="storeVal" class="tool-item select-store">
        <el-option
          v-for="item in storeOptions"
          :key="item.label"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <el-date-picker 
        class="tool-item"
        v-model="dateVal"
        type="date"
        @change="pickTime"
        value-format="yyyy-MM-dd"
        placeholder="选择日期"
      >
      </el-date-picker>

      <div class="tool-item btn-groups">
        <span 
          :class=" btnGroup == '1' ? 'current' : '' "
          @click="quickSetDate(1)"
        >今天</span>
        <span 
          :class=" btnGroup == '2' ? 'current' : '' "
          @click="quickSetDate(2)"
        >明天</span>
        <span 
          :class=" btnGroup == '3' ? 'current' : '' "
          @click="quickSetDate(3)"
        >后天</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      storeOptions: [{ //门店数组
        value: '1',
        label: '黄金糕'
      }, {
        value: '2',
        label: '双皮奶'
      }, {
        value: '3',
        label: '蚵仔煎'
      }],
      storeVal: '1', //选择的门店
      dateVal: '', //日历
      btnGroup: '1' // 
    }
  },
  methods: {
    // 跳转预约列表
    toList() {
      this.$router.push({
        path: `/main/appointment`,
      })
    },
    pickTime() {
      console.log(this.dateVal)
    },
    quickSetDate(val) {
      // 快速选择日期
      let times = new Date();
      let selectTimes = ''
      this.btnGroup = val
      if(val == '1') {
        times.setTime(times.getTime())
        selectTimes = times.getFullYear()+"-" + (times.getMonth()+1) + "-" + times.getDate()
        console.log('今天'+selectTimes)
      }else if(val == '2') {
        times.setTime(times.getTime()+24*60*60*1000)
        selectTimes = times.getFullYear()+"-" + (times.getMonth()+1) + "-" + times.getDate()
        console.log('明天'+selectTimes)
      }else if(val == '3') {
        times.setTime(times.getTime() + 2*24*60*60*1000)
        selectTimes = times.getFullYear()+"-" + (times.getMonth()+1) + "-" + times.getDate()
        console.log('后天'+selectTimes)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/stylus/mixin'
>>> .tool-bar
      .el-date-editor.el-input
        width 140px !important
      .el-input__inner
        height 30px
        width 140px
        border-color #e1e1e1
        color #333
      .el-input__icon
        line-height 30px
      .el-icon-date
        color $color-light
  .tool-bar
    height 30px
    margin-top 10px
    padding 10px 0
    padding-right 10px
    background #fff
    .tool-item
      float right
      font-size 14px
      margin-left 15px
      cursor pointer
    .add-btn
      height 30px
      line-height 30px
      padding 0 10px
      color #fff
      border-radius 3px
      background $color-light
    .lock-time
      height 28px
      line-height 28px
      padding 0 10px
      color $color-light
      border 1px solid $color-light
      border-radius 3px
      background #fff
    .btn-groups
      line-height 28px
      height 28px
      border 1px solid #e1e1e1
      color #7f7f7f
      border-radius 3px
      overflow hidden
      span
        float left
        padding 0 15px
        vertical-align top
      span + span
        border-left 1px solid #e1e1e1
      .current
        color #fff
        background $color-light
</style>
