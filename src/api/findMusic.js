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
    songDetail(params) {
        return axios.get(`${base.sq}/song/detail`,{
            params:params
        })
    },
    albumDetail(params) {
        return axios.get(`${base.sq}/album`,{
            params:params
        })
    },
    songUrL(params) {
        return aixos.get(`${base.sq}/song/url`,{
            params:params
        })
    }
}
export default recommend