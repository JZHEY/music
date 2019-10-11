<template>
  <div class="song-item">
      <div class="song">
          <div><img src="http://b-ssl.duitang.com/uploads/item/201612/04/20161204000928_jfHPk.jpeg" alt=""></div>
          <span class="playcount"><i class="el-icon-caret-right"></i>205万</span>
      </div>
      <div class="des">
          从这个秋日起，给自己一个新的开始，感受秋意浓郁
      </div>
  </div>
</template>

<script>
export default {
    name: 'RecommendItem',

}
</script>

<style lang="stylus" scoped>
.song-item
    .song
        position relative
        width 10rem
        height 10rem

        img 
            width 10rem
            height 10rem
            border-radius 5px
        
        .playcount
            position absolute
            top:.5rem
            right:.5rem
            color white
            font-size 1.3rem
    .des
        width 10rem
        font-size 1.3rem
        color DimGray
        // 超出2行省略
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
</style>