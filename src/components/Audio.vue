<template>
  <div class="audio">
    <audio :src="url" ref="audio" autoplay :loop="playType == 0 ? true:false"
    @loadedmetadata="onLoadedmetadata"
    @timeupdate="onTimeupdate"></audio>
    <div class="play-slider">
      <span>{{ currentTime * 100 | formatTime }}</span>
      <el-slider :show-tooltip="false" v-model="currentTime" :max=maxTime :step=currentTime/100 @change="sliderChang"></el-slider>
      <span>{{ duration | formatTime }}</span>
    </div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex';
export default {
  name: "Audio",
  props: {
    url: String
  },
  data() {
    return {
      duration:0,
      currentTime:0,
      maxTime:0
    };
  },
  methods:{
    ...mapMutations(['addCurrentSong','reduceCurrentSong']),
    onLoadedmetadata(res) {
      // console.log(res.target.duration)
      this.duration = res.target.duration 
    },

    onTimeupdate(res){
      // console.log(res.target.currentTime)

      this.currentTime = res.target.currentTime / 100
      this.maxTime = this.duration / 100
      // console.log((this.currentTime*100).toFixed(4),this.duration.toFixed(4))
      if((this.currentTime*100).toFixed(4) == this.duration.toFixed(4) && this.currentTime > 0 && this.duration > 0){
        this.currentTime = 0
        console.log('end   end')
        if(this.playType == 1){
          this.$parent.nextSong()
        }
      }
    },

    musicPlayOrNo(){
      if(this.$refs.audio.paused){
        this.$refs.audio.play()
        // console.log('kai')
        return true
      } else {
        this.$refs.audio.pause()
        // console.log('guan')
        return false
      }
    },

    sliderChang(val){
      // console.log(val)
      // console.log(document.getElementById('app'))
      this.$refs.audio.currentTime = val * 100
    }
    
  },

  computed:{
    ...mapGetters(['playType'])
  },

  mounted(){

  },

  filters:{
    formatTime(time){
      // console.log(time)
      time = parseInt(time)
      let f = 0
      let m = 0

      f = parseInt(time / 60)
      m = time % 60
      if(f < 10){
        f = `0${f}`
      }

      if(m < 10){
        m = `0${m}`
      }

      return (`${f} : ${m}`)
    }
  }
};
</script>

<style lang="stylus" scoped>
.play-slider
    display flex
    align-items center
    text-align center

    span
        width 5rem
    
    .el-slider
        flex 1
</style>