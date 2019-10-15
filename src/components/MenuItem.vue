<template>
  <div :class=menuSty>
      <div class="icon" :class="{current:index==0}">
          <i class="iconfont" :class=icon></i>
      </div>
      <div class="menu-name" :class="{current:index==0}">
          {{ menuName }}
      </div>
  </div>
</template>

<script>
export default {
    name: 'MenuItem',
    props:{
        icon: String,
        menuName: String,
        menuSty: String,
        index:Number
    },
    components:{

    },
    computed:{

    }

}
</script>

<style lang="stylus" scoped>
.menu-item
    .icon
        width 4rem
        height 4rem
        border-radius 50%
        background-color #EA5E4E
        display flex
        justify-content center
        align-items center

        .iconfont
            font-size 3rem
            color white

    .menu-name
        width 4rem
        margin-top .5rem
        display flex
        justify-content center
        font-size 1.3
        color Gray

.bottom-menu-item
    .icon
        display flex
        justify-content center
        align-items center
        width 2.5rem
        height 2.5rem
        border-radius 50%
        color Gray

        .iconfont
            font-size 2.2rem

        &.current
            background-color #EA5E4E
            padding .2rem
            color white

    .menu-name
        width 2.5rem
        display flex
        justify-content center
        align-items center
        margin-top .3rem
        color Gray

        &.current
            color #EA5E4E
</style>