import axios from "@/util/Http.js"
import base from './base'

const recommend = {
    popularRecommend() {
        return axios.get(`${base.sq}/personalized?limit=6`)
    },

    newSongs() {
        return axios.get(`${base.sq}/album/newest`)
    }
}
export default recommend