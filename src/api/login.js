import axios from "@/util/Http.js"
// import qs from 'qs'
import base from './base'

//登录接口
const login = {
    phoneLogin (params) {
        // console.log(base.sq)
        return axios.get(`${base.sq}/login/cellphone`,{
            params:params
        })
    },

    emailLogin (params) {
        return axios.get('/login',{
            params:params
        })
    }
}

export default login 