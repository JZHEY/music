import axios from "@/util/Http.js"
import base from './base'

//登录后首页请求得接口
const recommend = {
    popularRecommend() {
        return axios.get(`${base.sq}/personalized?limit=6`)
    },

    newSongs() {
        return axios.get(`${base.sq}/album/newest`)
    },

    everydayRecommend() {
        return axios.get(`${base.sq}/recommend/songs`)
    },

    
}
export default recommend