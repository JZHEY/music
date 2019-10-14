<template>
  <div class="bottom-menu">
      <div class="menu" v-for="(item, index) in menuList" :key="item.name">
          <menu-item :icon=item.newclass :menuName=item.name :menuSty=menuStyle :index=index @click.native="clickMenu(index)"></menu-item>
      </div>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue'
import { bottom_menu } from '@/util/data.js'
export default {
    name:'BottomMenu',
    components:{
        MenuItem
    },
    data() {
        return {
            menuList:bottom_menu,
            menuStyle:'bottom-menu-item'
        }
    },
    methods:{
        clickMenu(index){
            console.log(index)
        }
    }
}
</script>

<style lang="stylus" scoped>
.bottom-menu
    display flex
    justify-content space-around
    height 5.5rem
    align-items center
</style>