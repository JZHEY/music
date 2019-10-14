<template>
  <div class="song-item">
      <div class="song">
          <div><img :src=picUrl alt=""></div>
          <span class="playcount"><i class="el-icon-caret-right"></i>{{ playCount }}</span>
      </div>
      <div class="des">
          {{ name }}
      </div>
  </div>
</template>

<script>
export default {
    name: 'RecommendItem',
    props:{
        picUrl: String,
        name: String,
        playCount: Number
    }
}
</script>

<style lang="stylus" scoped>
.song-item
    margin-top 1rem
    .song
        position relative
        width 9.5rem
        height 9.5rem

        img 
            width 9.5rem
            height 9.5rem
            border-radius 5px
        
        .playcount
            position absolute
            top:.5rem
            right:.5rem
            color white
            font-size 1.3rem
    .des
        width 9.5rem
        font-size 1.3rem
        color DimGray
        margin-top .3rem
        // 超出2行省略
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
</style>