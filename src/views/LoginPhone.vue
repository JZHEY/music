<template>
  <div class="container">
    <login-bar :text=text></login-bar>
    <div class="content">
        <div class="tip">未注册手机号登录后将会自动创建账号</div>
        <div class="phone">
            <span class="pre-phone">+86</span><input type="text" v-model="phone">
        </div>
        <el-button class="imlogin" type="danger" round @click="goNext" :disabled="isDisabled">下一步</el-button>
    </div>
      
  </div>
</template>

<script>
import LoginBar from '@/components/LoginBar'

export default {
    name:'LoginPhone',
    data(){
        return {
            text:'手机号登录',
            phone:null
        }
    },

    components:{
        LoginBar
    },

    methods:{
        goNext(){
            localStorage.setItem('phone',this.phone)
            this.$router.push('/loginPassword')
        }
    },

    computed:{
        isDisabled(){
            return this.phone ? false : true
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

            .tip
                margin-left 5%
                margin-top 2rem
                color #cccccc
                font-size 1.4rem

            .imlogin
                width 95%
                margin-left 2.5%
                margin-bottom 1rem
            
            .phone
                display flex
                align-items center
                width 90%
                height 3rem
                border none
                border-bottom 1px solid #ccc
                margin 2rem 5% 2rem 5%
                .pre-phone
                    font-size 1.6rem
                    margin-right .5rem
                input                    
                    outline none
                    border none
                    font-size 1.6rem

</style>