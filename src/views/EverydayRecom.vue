<template>
  <div class="">
      <div class="top">
          <div class="bar">
              <login-bar :text=text :iconRight=iconRight :iconLeft=iconLeft ></login-bar>
          </div>
          <div class="date">

          </div>
      </div>
      <div class="play-list">
          <div class="play-bar">
              <play-bar></play-bar>
          </div>
          <div class="song-list">
              <!-- <div class="item" v-for="item in detailList" :key="item.id" @click="gotoPlay(item.id,item.albumId,item.desc)"> -->
              <div class="item" v-for="(item,index) in detailList" :key="item.id" @click="gotoPlay(index)">
                  <song-item :detail=item></song-item>
              </div>
          </div>
          <div class="white"></div>
      </div>
     
      <bottom-menu></bottom-menu>
  </div>
</template>

<script>
import LoginBar from '@/components/LoginBar'
import PlayBar from '@/components/PlayBar'
import SongItem from '@/components/SongItem'
import BottomMenu from '@/components/BottomMenu'
import api from '@/api/index'
import {mapState,mapGetters,mapMutations} from 'vuex';
export default {
    name: 'EverydayRecomm',
    components:{
        LoginBar,
        PlayBar,
        SongItem,
        BottomMenu
    },
    data() {
        return {
            iconRight:'icon-tongji',
            text:'  ',
            iconLeft:'icon-fanhui',
            dailySongList:[],
            detailList:[]
        }
    },
    methods:{
        getEverydaySongsList() {
            this.$api.recommend.everydayRecommend().then(res => {
                console.log(res)
                if(res.status === 200){
                    this.dailySongList = res.data.recommend
                    console.log(this.dailySongList)
                    this.dealdata(this.dailySongList)
                }
            })
        },

        //将获取到得数据处理成为description 传给子组件song-item
        dealdata(data){
            let des = ''
            data.forEach(item => {
                item.artists.forEach(element => {
                    console.log(element)
                    des += element.name + '/'
                });
                this.detailList.push({
                    picUrl:item.album.picUrl,
                    albumId:item.album.id,
                    name:item.name,
                    desc:des.substr(0,des.length-1),
                    id:item.id
                })
                des = ''
            });
            this.changeSongList(this.detailList)
            console.log(this.detailList)
        },
        ...mapMutations(['changeCurrentSong','changeSongList']),
        // gotoPlay(id,albumId,des){
        gotoPlay(index){
            // this.$router.push({name:'play',query:{id:id,albumId:albumId,des:des}})
            this.changeCurrentSong(index)
            console.log(index)
            this.$router.push({name:'play',query:{index:index}})
        }
    },
    mounted(){
        this.getEverydaySongsList()
    }
}
</script>

<style lang="stylus" scoped>
.top
    width 100%
    height 16rem
    background-image url('http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/02/83/04debf1701c2a89a9da61400d017d8b4.jpg')
    background-size 100% 16rem

.play-list
    position absolute
    top 15rem
    left 0
    width 100%
    height 50rem
    background-color white
    border-radius 10px

.white
    background white
    bottom 0
    height 5.5rem
    width 100%
</style>