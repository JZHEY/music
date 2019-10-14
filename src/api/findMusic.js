import axios from "@/util/Http.js"
import base from './base'

const recommend = {
    popularRecommend() {
        return axios.get(`${base.sq}/personalized?limit=6`)
    }
}
export default recommend