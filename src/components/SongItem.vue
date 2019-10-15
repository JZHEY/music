<template>
  <div class="list-item">
      <div class="avatar">
          <img :src=detail.picUrl style="width:4rem;height:4rem;border-radius:5px">
      </div>

      <div class="content">
          <div class="title">
              {{ detail.name }}
          </div>

          <div class="des">
              {{ detail.desc }}
          </div>
      </div>

      <div class="icon-btn">
          <i class="iconfont icon-bofang"></i>
          <i class="iconfont icon-diandiandianshu"></i>
      </div>
  </div>
</template>

<script>
export default {
    name:'SongItem',
    props:{
        detail:Object
    },
}
</script>

<style lang="stylus" scoped>
.list-item
    display flex
    align-items center

    .avatar
        display flex
        justify-content center
        align-items center
        margin .7rem .5rem

    .content
        display flex
        flex-direction column
        justify-content space-between
        height 3rem
        width 17rem
        margin-left .5rem
        overflow: hidden;/*超出部分隐藏*/
        white-space: nowrap;/*不换行*/
        text-overflow:ellipsis;/*超出部分文字以...显示*/
        .title
            font-size 1.7rem
            color #24292e
            font-weight 500

        .des
            color DarkGray
            font-size 1.3rem

    .icon-btn
        display flex
        width 7rem
        position absolute
        right 0
        justify-content space-around

        .iconfont
            font-size 2.5rem
            color DarkGray
</style>