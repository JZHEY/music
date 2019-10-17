<template>
  <div class="audio">
    <audio :src="url" ref="audio" autoplay loop
    @loadedmetadata="onLoadedmetadata"
    @timeupdate="onTimeupdate"></audio>
    <div class="play-slider">
      <span>{{ currentTime * 100 | formatTime }}</span>
      <el-slider :show-tooltip="false" v-model="currentTime" :max=maxTime></el-slider>
      <span>{{ duration | formatTime }}</span>
    </div>
  </div>
</template>

<script>
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
    onLoadedmetadata(res) {
      // console.log(res.target.duration)
      this.duration = res.target.duration
    },

    onTimeupdate(res){
      // console.log(res.target.currentTime)
      this.currentTime = res.target.currentTime /100
      this.maxTime = this.duration / 100
      if(this.currentTime == this.duration){
        this.currentTime = 0
      }
    },

    musicPlayOrNo(){
      if(this.$refs.audio.paused){
        this.$refs.audio.play()
      } else {
        this.$refs.audio.pause()
      }
    },
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