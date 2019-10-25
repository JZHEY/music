<template>
  <div id="app">
    <vue-audio ref="vueaudio" id="v-audio"></vue-audio>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import VueAudio from '@/components/Audio.vue'
export default {
  components:{
    VueAudio
  },
  methods:{
    
  }
}
</script>
<style lang="stylus" scoped>
  #app
    height 100%
    width 100%
</style>
