import axios from 'axios'
import { Message } from 'element-ui';
import router from '../router'
import store from '../store';

// let baseUrl = ''

// if(process.env.NODE_EVN == 'development'){
//     baseUrl = '/api'
// }else if(process.env.NODE_EVN == 'product'){
//     baseUrl = config.api_base_url
// }else if(process.env.NODE_EVN == 'debug'){
//     baseUrl = ''
// }

// axios.default.baseUrl = '/api'
// console.log(axios.default.baseUrl)
// axios.defaults.withCredentials=true

const tip = (msg,obj) => {
    obj.$message({
        duration:1000,
        message:msg
    })
}

const toLogin = () => {
    router.replace({
        path:'/login',
        query:{
            redirect: router.currentRoute.fullPath
        }
    })
}

const errorHandle = (status,other) => {
    switch (status) {
        case 301:
            toLogin()
            break;

        default:
            console.log(other)
            break;
    }
}

let instance = axios.create({ timeout: 1000 * 12})

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

instance.interceptors.response.use(
    res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
    error => {
        const { response } = error;
        if ( response ) {
            errorHandle(response.status,response.data.message)
            return Promise.reject(response)
        } else {
            if (!window.navigator.onLine) {
                store.commit('changeNetwork',false)
            } else {
                return Promise.reject(response)
            }
        }
    }
)

export default instance