<template>
  <div class="song-list">
      <recommend-item></recommend-item>
  </div>
</template>

<script>
import RecommendItem from '@/components/RecommendItem'
import api from '@/api/index'

export default {
    name: 'SongList',
    components:{
        RecommendItem
    },
    methods:{
        getSongList(){
            this.$api.recommend.popularRecommend().then(res => {
                console.log(res)
            })
        }
    },
    mounted(){
        this.getSongList()
    }
}
</script>

<style lang="stylus" scoped>

</style>