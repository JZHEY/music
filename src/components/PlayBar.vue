<template>
  <div class="bar">
    <div class="left">
      <i class="iconfont icon-bofang"></i><el-button type="text">播放全部</el-button>
    </div>

    <div class="right">
      <i class="iconfont icon-diandiandianshu"></i><el-button type="text">多选</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayBar',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .bar
    display flex
    justify-content space-between
    width 95%
    margin-left 2.5%
    align-items center
    .left,.right
      display flex
      justify-content start
      align-items center

      .iconfont
        font-size 2.1rem
        color black

      .el-button
        font-size 1.5rem
        color black

</style>
