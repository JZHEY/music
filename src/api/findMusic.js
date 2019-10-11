import axios from "@/util/Http.js"
import base from './base'

const recommend = {
    popularRecommend() {
        return axios.get(`${base.sq}/personalized`)
    }
}
export default recommend