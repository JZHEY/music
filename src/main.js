import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css'
import remConfig from '@/util/remConfig'
import api from './api/index'
import '@/assets/icon/iconfont.css'


remConfig()


//去掉相关警告（用于生产不提醒）
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
