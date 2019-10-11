<template>
  <div class="menu">
      <div class="item-menu" v-for="item in menuList" :key="item.name">
          <menu-item :icon=item.newclass :menuName=item.name></menu-item>
      </div>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue'
import { index_menu } from '@/util/data.js'
export default {
    name: 'IndexMenu',
    components: {
        MenuItem
    },
    data(){
        return {
            menuList: index_menu
        }
    }
}
</script>

<style lang="stylus" scoped>
.menu
    display flex
    justify-content space-around
    padding 1.5rem 0
    border-bottom 1px solid Gainsboro
</style>