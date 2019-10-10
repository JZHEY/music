<template>
  <div class="container">
    <login-bar :text=text></login-bar>
    <div class="content">
        <input type="password" placeholder="输入密码" v-model="password"/>
        <el-button class="imlogin" type="danger" round :disabled="isDisabled" @click="login">立即登录</el-button>
        <el-button type="text">重置密码></el-button>
    </div>
  </div>
</template>

<script>
import LoginBar from '@/components/LoginBar'
import api from '@/api/index'

export default {
    name:'LoginPassword',
    data(){
        return {
            text:'手机号登录',
            password:null
        }
    },

    components:{
        LoginBar
    },
    
    methods:{
        login(){
            let phoneNumber = localStorage.getItem('phone')
            this.$api.login.phoneLogin({
                phone: phoneNumber,
                password: this.password
            }).then(res => {
                console.log(res)
                if(res.status == 200) {
                    this.$router.replace('/find')
                }
                
            })
        }
    },

    computed:{
        isDisabled(){
            return this.password ? false : true
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container
        display flex
        flex-direction column

        .content
            display flex
            flex-direction column
            input
                width 90%
                height 3rem
                margin 2rem 5% 3rem 5%
                outline none
                border none
                border-bottom 1px solid Gainsboro
                font-size 1.5rem

            .imlogin
                width 95%
                margin-left 2.5%
                margin-bottom 1rem
</style>