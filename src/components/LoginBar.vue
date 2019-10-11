<template>
  <div class="bar">
      <span class="leftIcon">
          <i class="iconLeft iconfont" :class="iconLeft" @click="goback"></i>
      </span>
      <div class="text" v-if="text ? true : false">{{ text }}</div>
      <div class="search" v-else>
          <el-input placeholder="请输入内容" size="mini" clearable>
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
      </div>
      <span class="rightIcon">
          <i class="iconfont" :class="iconRight"></i>
      </span>
  </div>
</template>

<script>
export default {
    name:'LoginBar',
    props:{
        text:String,
        iconRight:String,
        iconLeft:String
    },

    methods:{
        goback(){
            this.$router.back(-1)
        }
    }
}
</script>

<style lang="stylus" scoped>
    .bar
        display flex
        height 4rem
        justify-content start
        align-items center

        .leftIcon,.rightIcon
            display flex
            justify-content center
            width 10%
            font-size 2.5rem

        .iconfont
            font-size 2.2rem

        .text
            display flex
            justify-content center
            width 90%
            font-family 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
            font-weight bold
            font-size 1.8rem
            color #373737
        .search
            display flex
            width 90%
            align-items center
            font-size 1.8rem
</style>