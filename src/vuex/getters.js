
export default {
    // getSongList: (state) => {
    //     console.log('state:' + state.songList)
    //     return state.songList
    // },
    // getDuration:(state,data) => {
    //     state.duration = data
    //     return state.duration
    // },
    // getCurrentTime:(state,data) => {
    //     state.currentTime = data
    //     return state.currentTime
    // },

    audio: state => state.audio,
    playType: state => state.playType,
    currentSong: state => state.currentSong,
    currentTime: state => state.currentTime,
    duration: state => state.duration,
    url: state => state.url,
    playOrNo: state => state.playOrNo
}