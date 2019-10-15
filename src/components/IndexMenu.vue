<template>
  <div class="menu">
      <div class="item-menu" v-for="item in menuList" :key="item.name" @click="handleClick(item.label)">
          <menu-item :icon=item.newclass :menuName=item.name :menuSty=menuStyle></menu-item>
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
            menuList: index_menu,
            menuStyle:'menu-item'
        }
    },
    methods:{
        handleClick(name){
            console.log(name)
            if(name == 'every'){
                this.$router.push('everydayRecomm')
            }
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