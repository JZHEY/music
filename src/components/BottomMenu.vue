<template>
    <div class="bottom-menu">
          <cube-tab-bar
            v-model="selectedLabelDefault"
            :data="tabs"
            @click="clickHandler"
            @change="changeHandler"
        ></cube-tab-bar>
    </div>
</template>

<script>
import { bottom_menu } from "@/util/data.js";
export default {
  name: "BottomMenu",
  components: {
      
  },
  data() {
    return {
      tabs: bottom_menu,
      selectedLabelDefault: '发现',
    };
  },
  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      console.log(label);
    },
    changeHandler(label) {
      // if you clicked different tab, this methods can be emitted
    }
  }
};
</script>

<style lang="stylus" scoped>
.bottom-menu
  position fixed
  width 100%
  background-color LightGrey
  opacity:0.9
  height 4.5rem
  bottom 0
  left 0
</style>