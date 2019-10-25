<template>
  <div class="audio">
    <audio :src="url" ref="audio" autoplay :loop="playType == 0 ? true:false"
    @loadedmetadata="onLoadedmetadata"
    @timeupdate="onTimeupdate"></audio>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex';
import api from '@/api/index'
export default {
  name: "Audio",
  props: {
    // url: String
  },
  data() {
    return {
    };
  },
  methods:{
    ...mapMutations([
      'addCurrentSong',
      'reduceCurrentSong',
      'changeDuration',
      'changeCurrentTime',
      'addCurrentSong'
      ]),
    onLoadedmetadata(res) {
      // console.log(res.target.duration)
      // this.duration = res.target.duration 
      this.$store.commit('changeDuration',res.target.duration)
    },

    onTimeupdate(res){
      // console.log(res.target.currentTime,res.target.duration)
      this.$store.commit('changeCurrentTime',res.target.currentTime/100)
      // this.currentTime = res.target.currentTime / 100
      // this.maxTime = this.duration / 100
      // console.log((this.currentTime*100).toFixed(4),this.duration.toFixed(4))
      if((this.currentTime * 100).toFixed(4) == this.duration.toFixed(4) && this.currentTime > 0 && this.duration > 0){
        this.currentTime = 0
        console.log('end   end')
        if(this.playType == 1){
          this.$store.commit('addCurrentSong')
          let id = this.audio.id
          console.log(id)
          this.getSongUrl(id)
        }
      }
    },

     getSongUrl(id){
            this.$api.recommend.songUrl({
                id:id
            }).then(res => {
                console.log(res)
                if(res.status === 200){
                    this.$store.commit('changeUrl',res.data.data[0].url)
                //    this.url = res.data.data[0].url
                }
                
            })
            // console.log(this.songData[0])
        },

    musicPlayOrNo(){
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
      if(this.$refs.audio.paused){
        this.$refs.audio.play()
        console.log('kai')
        return true
      } else {
        this.$refs.audio.pause()
        console.log('guan')
        return false
      }
    },

    
  },

  computed:{
    ...mapGetters([
      'playType',
      'currentTime',
      'duration',
      'url',
      'audio'
      ])
  },

  mounted(){
    // this.musicPlayOrNo()
  },

  
};
</script>

<style lang="stylus" scoped>

</style>