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
          <song-list></song-list>
        </div>
        
      </div>
      <!-- 新歌/新碟 -->
      <div class="new-song">

      </div>
      <!-- 云村精选 -->
      <div class="select">

      </div>
  </div>
</template>

<script>
import LoginBar from '@/components/LoginBar'
import IndexMenu from '@/components/IndexMenu'
import SongList from '@/components/SongList'
import api from '@/api/index'

export default {
  name: 'Find',
  data(){
    return{
      text: null,
      iconRight:'icon-tongji',
      iconLeft: 'icon-huatong',
      imgs:[
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570781009344&di=7d0c793edc3b116a692a7e614bff82ff&imgtype=0&src=http%3A%2F%2Fpic27.nipic.com%2F20130402%2F2786001_165104993000_2.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570781327707&di=30d456e7c98d95ac6f10292931a60189&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140329%2F5654593_113505353155_2.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570781623913&di=d5ce58ccbb780de3e48b84da88c6aef3&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F58961d9d1335390ca777f363abbf12edd2909c7fdc0d-Urm3pL_fw658',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570781748024&di=fc9ac15103f08732e6cd1b29a76bda16&imgtype=0&src=http%3A%2F%2Fdik.img.kttpdq.com%2Fpic%2F18%2F12390%2Fac68bc90af0058e8.jpg'
      ]
    }
  },
  components:{
    LoginBar,
    IndexMenu,
    SongList
  },
  methods:{
    
  }
}
</script>

<style lang="stylus" scoped>
.recom-song
  margin-top .5rem
  .recom-title
    width 95%
    display flex
    justify-content space-between
    align-items center
    margin-left 2.5%
    .left-title
      font-size 1.6rem
      font-weight bold
</style>