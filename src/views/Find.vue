<template>
  <div>
      <!-- 头部bar -->
      <div class="bar">
        <login-bar :text = text :iconRight = iconRight :iconLeft = iconLeft></login-bar>
      </div>
      <!-- 广告 -->
      <div class="ads">
        <el-carousel height="15rem">
          <el-carousel-item v-for="item in imgs" :key="item">
            <img :src=item alt="" style="width:95%;height:15rem;margin-left:2.5%;border-radius:1rem">
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 中间菜单 -->
      <div class="top-menu">
        <div>
          <index-menu></index-menu>
        </div>
      </div>
      <!-- 推荐歌单 -->
      <div class="recom-song">
        <div class="recom-title">
          <div class="left-title">
            推荐歌单
          </div>
          <el-button class="right-btn" round size="mini">歌词广场</el-button>
        </div>
        <div class="recom-list">
          <song-list :songList = songList></song-list>
        </div>
        
      </div>
      <!-- 新歌/新碟 -->
      <div class="new-song recom-song">
        <div class="recom-title">
          <div class="left-title">
            <span>新碟</span> | <span>新歌</span>
          </div>
          <el-button class="right-btn" round size="mini">歌词广场</el-button>
        </div>
        <div class="recom-list">
          <song-list :songList = newSongs></song-list>
        </div>
      </div>
      <!-- 底部导航 -->
      <bottom-menu></bottom-menu>
  </div>
</template>

<script>
import LoginBar from '@/components/LoginBar'
import IndexMenu from '@/components/IndexMenu'
import SongList from '@/components/SongList'
import BottomMenu from '@/components/BottomMenu'
import { imgs } from '@/util/data.js'
import api from '@/api/index'

export default {
  name: 'Find',
  data(){
    return{
      text: null,
      iconRight:'icon-tongji',
      iconLeft: 'icon-huatong',
      songList: [],
      newSongs: [],
      imgs
    }
  },
  components:{
    LoginBar,
    IndexMenu,
    SongList,
    BottomMenu
  },
  methods:{
    getSongList(){
      this.$api.recommend.popularRecommend().then(res => {
          console.log(res)
          if(res.status === 200){
              this.songList = res.data.result
          }
      })
    },
    getNewSongs(){
      this.$api.recommend.newSongs().then(res => {
        console.log(res)
        if(res.status === 200) {
          this.newSongs = res.data.albums.slice(0,6)
          console.log(this.newSongs)
        }
      })
    },
    
  },
  mounted(){
    this.getSongList()
    this.getNewSongs()
  }
}
</script>

<style lang="stylus" scoped>
.recom-song
  margin-top 1rem
  .recom-title
    width 95%
    display flex
    justify-content space-between
    align-items center
    margin-left 2.5%
    .left-title
      font-size 1.6rem
      font-weight bold
.new-song
  margin-top 2rem
  margin-bottom 5.5rem


</style>