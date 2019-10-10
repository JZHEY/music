<template>
  <div class="bar">
      <span class="leftIcon"><i class="el-icon-arrow-left" @click="goback"></i></span>
      <div class="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
    name:'LoginBar',
    props:{
        text:String
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
        height 3rem
        justify-content start
        align-items center

        .leftIcon
            width 8%
            font-size 2.5rem
        
        .text
            display flex
            justify-content center
            width 90%
            font-family 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
            font-weight bold
            font-size 1.8rem
            color #373737
</style>