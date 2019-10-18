<template>
  <div class="play">
      
      <div class="bar">
          <login-bar :iconLeft=iconLeft :text=text :iconRight=iconRight></login-bar>
      </div>
      <div class="singer">
            {{ des }}
        </div>

      <div class="play-spin">
          <div class="pic">
              <img :src=albumData.blurPicUrl style="width:17rem;height:17rem;border-radius:50%" :style="{transform:'rotateZ('+deg+'deg)'}" ref="picture">
          </div>
      </div>
    
      <div style="height:30%"></div>

      <div class="operation">
        <div class="song-operation">
            <div class="iconfont icon-shoucang"></div>
            <div class="iconfont icon-xiazai"></div>
            <div class="iconfont icon-pinglun"></div>
            <div class="iconfont icon-diandiandianshu"></div>
        </div>

        <div class="progress">
            <vue-audio :url=url ref="vueaudio"></vue-audio>
            
        </div>


        <div class="play-operation">
            <div class="iconfont icon-xunhuanbofang"></div>
            <div class="iconfont icon-shangyishoushangyige"></div>
            <div class="iconfont " :class="[playIcon ? 'icon-bofang1' : 'icon-bofang3']" style="font-size:6rem" @click="playOrNo"></div>
            <div class="iconfont icon-xiayigexiayishou"></div>
            <div class="iconfont icon-liebiao"></div>
        </div>
      </div>
      
  </div>
</template>

<script>
import LoginBar from '@/components/LoginBar.vue'
import VueAudio from '@/components/Audio.vue'
import api from '@/api/index'

export default {
    name:'Play',
    components:{
        LoginBar,
        VueAudio
    },
    data(){
        return {
            iconLeft:'icon-fanhui',
            text:'可惜我是水瓶座',
            iconRight:'icon-fenxiang',
            albumData:{},
            songData:{},
            des:'',//歌手名字
            url:'',//图片地址
            playIcon:'',//音乐是否播放
            deg:0, //转动角度
            timer:null //图片转动定时器
        }
    },
    methods:{
        getAlbumDetail(id){
            this.$api.recommend.albumDetail({
                id
            }).then(res => {
                console.log(res)
                if(res.status == 200){
                    this.albumData = res.data.album
                    console.log(this.albumData)
                }
            })
        },
        
        getSongDetail(id){
            this.$api.recommend.songDetail({
                ids:id
            }).then(res => {
                console.log(res)
                if(res.status === 200) {
                    this.songData = res.data.songs
                    this.text = this.songData[0].name
                    this.getSongUrl(this.songData[0].id)
                }
            })
        },

        getSongUrl(id){
            this.$api.recommend.songUrl({
                id:id
            }).then(res => {
                console.log(res)
                if(res.status === 200){
                   this.url = res.data.data[0].url
                }
                
            })
            // console.log(this.songData[0])
        },

        playOrNo(){
            this.playIcon = this.$refs.vueaudio.musicPlayOrNo()
            // this.rotate()
            this.rotate(this.playIcon)
        },

        rotate(playIcon) {
            if(playIcon){
                // console.log(`kai·····`)
                this.timer = setInterval(() => {
                    this.deg += 1

                    if(this.deg > 360){
                        this.deg = 0
                    }
                }, 30);
            } else {
                // console.log(`guan·····`)
                clearInterval(this.timer)
                this.timer = null
            }
        }
    },
    mounted(){
        this.getAlbumDetail(this.$route.query.albumId)
        this.getSongDetail(this.$route.query.id)
        this.playOrNo()
        this.des = this.$route.query.des
        
    }
}
</script>

<style lang="stylus" scoped>
.play
    height 100%
    display flex
    flex-direction column
    justify-content center
    background-color Silver
    opacity 0.8

    .singer
        width 100%
        display flex
        justify-content center
        font-size 1.5rem

    .play-spin
        width 100%
        height 70%
        display flex
        justify-content center
        align-items center

        .pic
            width 25rem
            height 25rem
            border-radius 50%
            display flex
            justify-content center
            align-items center
            background-image url('../assets/cd.png')
            background-size 25rem 25rem
            border 1px solid white
    
    .operation
        width 100%
        height 27%
        position fixed
        bottom 0
        left 0

        .song-operation
            display flex
            justify-content space-around
            align-items center
            height 30%
            
            .iconfont
                font-size 3rem
        
        .progress
            width 100%
            height 30%
        
        .play-operation
            display flex
            justify-content space-around
            align-items center
            height 40%

            .iconfont
                font-size 3rem
        
</style>