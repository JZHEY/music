export default {
    changeSongList:(state,data) => {
        console.log(data)
        state.songList = data
    },

    nextSong:(state) => {

    },

    changeCurrentSong: (state,index) => {
        console.log('changeCurrentSong:' + index)
        state.currentSong = index
    },

    //下一首
    addCurrentSong: (state) => {
        if(state.currentSong > 0){
            console.log(state.currentSong)
            return state.currentSong++
        }
     },
     //上一首
     reduceCurrentSong: (state) => {
         if(state.currentSong > 0){
             console.log(state.currentSong)
            return state.currentSong--
         }
     }
}

/**
 * 要把play组件得数据数据 改成audio里面
 * 
 */