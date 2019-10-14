<template>
  <div class="song-list">
      <div class="song-item" v-for="item in songList" :key="item.id">
          <recommend-item :picUrl=item.picUrl :playCount=item.playCount :name=item.name></recommend-item>
      </div>
  </div>
</template>

<script>
import RecommendItem from '@/components/RecommendItem'
import api from '@/api/index'

export default {
    name: 'SongList',
    props:{
        songList: Array
    },
    components:{
        RecommendItem
    },
    data(){
        return {
            
        }
    },
    methods:{

    },
    mounted(){
        
    }
}
</script>

<style lang="stylus" scoped>
.song-list
    display flex
    flex-wrap wrap
    justify-content space-between
    width 95%
    margin-left 2.5%
</style>