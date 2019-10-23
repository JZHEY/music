export default {
    songlist:[],//播放列表
    audio:{
        id: 0,//歌曲id
        name: '遇见你的时候所有星星都落在我头上',//歌曲名字
        picUrl: '',//图片地址
        desc: ''
    },
    currentSong: 0,//当前播放得歌曲
    currentTime: 0, //当前播放时间
    duration: 0 ,//结束时间    
    playType: 1, //播放方式 0 单曲循环 1 列表循环
}