<template>
  <div class="play">
      
      <div class="bar">
          <login-bar :iconLeft=iconLeft :text=audio.name :iconRight=iconRight></login-bar>
      </div>
      <div class="singer">
            {{ audio.desc }}
        </div>

      <div class="play-spin">
          <div class="pic">
              <img :src=audio.picUrl style="width:17rem;height:17rem;border-radius:50%" :style="{transform:'rotateZ('+deg+'deg)'}" ref="picture">
          </div>
      </div>
    
      <div style="height:30%"></div>

      <div class="operation">
        <div class="song-operation">
            <div class="iconfont icon-shoucang" :class="{'active':like}" @click="likeIt()"></div>
            <div class="iconfont icon-xiazai"></div>
            <div class="iconfont icon-pinglun"></div>
            <div class="iconfont icon-diandiandianshu"></div>
        </div>

        <div class="progress">
            
            <slider></slider>
        </div>


        <div class="play-operation">
            <div class="iconfont " :class=typeIcon[playType] @click="changeType"></div>
            <div class="iconfont icon-shangyishoushangyige" @click="preSong"></div>
            <div class="iconfont " :class="[playIcon ? 'icon-bofang1' : 'icon-bofang3']" style="font-size:6rem" @click="playOrNo"></div>
            <div class="iconfont icon-xiayigexiayishou" @click="nextSong"></div>
            <div class="iconfont icon-liebiao"  @click="drawer = true"></div>
        </div>
      </div>

    
      <el-drawer
        :visible.sync="drawer"
        direction="btt"
        size="60%">
        <!-- <span>我来啦!</span> -->
        <div class="title" slot="title" style="1px solid red">
            <span class="left">
                <i class="iconfont icon-gengxin"></i>
                <span style="font-size:1.5rem">循环列表</span>
                <span>( {{ songList.length }} )</span>
            </span>
            <span class="right" style="">
                <i class="iconfont icon-shoucangshuji"></i>
                <span style="font-size:1.5rem">收藏全部</span>
            </span>
        </div>
        <div class="playLt">
            <div class="playItem" v-for="(item,index) in songList" :key="item.id" @click="listenThisSong(item,index)">
                <div class="song">
                    {{ item.name }}
                </div>
                <div class="desc">
                    {{ item.desc }}
                </div>
            </div>
        </div>
      </el-drawer>
      
      
  </div>
</template>

<script>
import LoginBar from '@/components/LoginBar.vue'
import VueAudio from '@/components/Audio.vue'
import Slider from '@/components/Slider.vue'
import { mapState,mapGetters,mapMutations } from 'vuex';
import api from '@/api/index'

export default {
    name:'Play',
    components:{
        LoginBar,
        VueAudio,
        Slider
    },
    data(){
        return {
            iconLeft:'icon-fanhui',
            text:'可惜我是水瓶座',
            iconRight:'icon-fenxiang',
            songData:{},
            // index:0,//歌曲下标索引
            // url:'',//图片地址
            playIcon:'',//音乐是否播放
            deg:0, //转动角度
            timer:null, //图片转动定时器
            typeIcon:['icon-danquxunhuan','icon-xunhuanbofang'],
            drawer:false,
            like:false
        }
    },
    methods:{
        ...mapMutations([
            'addCurrentSong',
            'reduceCurrentSong',
            'changePlayType',
            'changeUrl',
            'changeCurrentSong'
        ]),
        //获取专辑详细信息
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

        //下一曲
        nextSong(){
            this.$store.commit('addCurrentSong')
            let id = this.audio.id
            console.log(id)
            this.getSongUrl(id)
        },

        //上一曲
        preSong(){
            this.$store.commit('reduceCurrentSong')
            let id = this.audio.id
            this.getSongUrl(id)
        },
        
        //获取歌曲的详细信息
        // getSongDetail(id){
        //     this.$api.recommend.songDetail({
        //         ids:id
        //     }).then(res => {
        //         console.log(res)
        //         if(res.status === 200) {
        //             this.songData = res.data.songs
        //             this.text = this.songData[0].name
        //             this.getSongUrl(this.songData[0].id)
        //         }
        //     })
        // },

        //获取歌曲的播放url
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

        //判断音乐是否播放
        playOrNo(){
            // console.log(this.$parent.$refs.vueaudio.musicPlayOrNo())
            this.playIcon = this.$parent.$refs.vueaudio.musicPlayOrNo()
            console.log(this.playIcon)
            this.rotate(this.playIcon)
            // this.rotate()
        },

        //旋转
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
                console.log(`......·····`)
                clearInterval(this.timer)
                this.timer = null
            }
        },

        //喜欢 还没实现 因为 找不到显示是否喜欢的接口
        likeIt(){
            this.like = !this.like
            this.$api.recommend.likeSong({
                id:this.audio.id,
                like:this.like
            }).then(res => {
                console.log(res)
            })
        },

        //单曲循环/列表循环
        changeType(){
            console.log(this.playType)
            if (this.playType == 1) {
                this.$store.commit('changePlayType',0)
                
            } else if (this.playType == 0) {
                this.$store.commit('changePlayType',1)
            }
        },

        listenThisSong(option,index){
            console.log(option,index)
            this.$store.commit('changeCurrentSong',index)
            this.getSongUrl(option.id)
        }
    },
    computed:{
        // ...mapGetters(['getSongList'])
        ...mapGetters(['audio','playType','songList'])
    },

    mounted(){
        // this.index = this.$route.query.index
        // this.getAlbumDetail(this.getSongList[this.index].id)
        this.getSongUrl(this.audio.id)
        this.playOrNo()
        this.playIcon = true  
        // this.rotate(this.playIcon)
        this.deg = 0
        // this.des = this.$route.query.des
        
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
            
            .active
                color red
        
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
<style lang="stylus">
.el-dialog__wrapper
    .btt
        .el-drawer__header
            margin-bottom 2rem 
    
            .title
                display flex
                justify-content space-between
                align-items center

        .el-drawer__body
            height 100%

            .playLt
                height 100%
                overflow hidden
                overflow-y scroll

                .playItem
                    width 86%
                    height 30px
                    margin-left 7%
                    display flex
                    justify-content space-between
                    font-size 1.5rem
                    color #72767b
</style>