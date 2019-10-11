<template>
  <div class="menu-item">
      <div class="icon">
          <i class="iconfont" :class=icon></i>
      </div>
      <div class="menu-name">
          {{ menuName }}
      </div>
  </div>
</template>

<script>
export default {
    name: 'MenuItem',
    props:{
        icon: String,
        menuName: String
    }
}
</script>

<style lang="stylus" scoped>
.menu-item
    .icon
        width 50px
        height 50px
        border-radius 50%
        background-color #EA5E4E
        display flex
        justify-content center
        align-items center

        .iconfont
            font-size 3rem
            color white

    .menu-name
        width 50px
        margin-top .5rem
        display flex
        justify-content center
        font-size 1.3
        color Gray
</style>