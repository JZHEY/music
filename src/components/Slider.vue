<template>
    <div class="play-slider">
        <span>{{ currentTime * 100  | formatTime }}</span>
        <el-slider :show-tooltip="false" v-model="currentTime" :step=(currentTime/100) :max="duration/100" @change="sliderChang" ></el-slider>
        <span>{{ duration | formatTime }}</span>
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex';
export default {
    name:'slider',
    data(){
        return {
        }
    },
    methods:{
        ...mapMutations([
            'changeCurrentTime'
        ]),

        sliderChang(val){
            console.log(val)
            console.log(document.getElementById('v-audio').childNodes[0].currentTime)
            document.getElementById('v-audio').childNodes[0].currentTime = val * 100
            // this.$refs.audio.currentTime = val * 100
            this.$store.commit('changeCurrentTime',val * 100)
        }
    },
    computed:{
        ...mapGetters([
            'duration'
        ]),
        currentTime:{
            get() {
                return this.$store.state.currentTime
            },
            set(newCurrent) {
                this.$store.state.currentTime = newCurrent
            }
        }
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
}
</script>

<style scoped lang="stylus">
.play-slider
    display flex
    align-items center
    text-align center

    span
        width 5rem
    
    .el-slider
        flex 1
</style>