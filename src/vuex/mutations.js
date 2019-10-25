export default {
    changeSongList:(state,data) => {
        console.log(data)
        state.songList = data
    },

    changeCurrentSong: (state,index) => {
        console.log('changeCurrentSong:' + index)
        state.currentSong = index
        state.audio = state.songList[state.currentSong]
        console.log(state.audio)
    },


    //下一首
    addCurrentSong: (state) => {
        if(state.currentSong < state.songList.length+1){
            console.log(state.currentSong)
            state.currentSong++
            state.audio = state.songList[state.currentSong]
            return state.audio.id
        }
     },
     //上一首
     reduceCurrentSong: (state) => {
         if(state.currentSong > 0){
            state.currentSong--
            console.log(state.currentSong)
            state.audio = state.songList[state.currentSong]
            return state.audio.id
         }
     },

     //改变播放方式
     changePlayType: (state,index) => {
        state.playType = index
     },

     //改变时间
     changeDuration:(state,data) => {
        state.duration = data
        return state.duration
    },
    
    //改变当前播放时间
    changeCurrentTime:(state,data) => {
        state.currentTime = data
        return state.currentTime
    },

    //改变链接
    changeUrl:(state,data) => {
        state.url = data
    },

    //改变播放与否
    changePlayOrNo: (state,data) => {
        state.playOrNo = data
    }
}

/**
 * 要把play组件得数据数据 改成audio里面
 * 
 */