<template>
  <div class="home">
    <div class="logo" style="width:100%;height:65%;">
      <img src="../assets/loginLogo.jpg" style="width:80px;height:80px;border-radius:50%">
    </div>

    <div class="login-button">
      <el-button round @click="goLoginPhone">手机号登录</el-button>
      <br>
      <el-button round style="background-color:#DB382B;color:white">立即体验</el-button>
      <br>
      <div class="agree-content" :class="{ around: shake, animated: shake }">
        <el-checkbox v-model="check">同意《服务条款》和《隐私政策》</el-checkbox>
      </div>
      
    </div>

    <div class="other">
      <img src="../assets/wechat.png" style="width:40px;height:40px" alt="">
      <img src="../assets/qq.png" style="width:40px;height:40px" alt="">
      <img src="../assets/weibo.png" style="width:40px;height:40px" alt="">
      <img src="../assets/wangyi.png" style="width:40px;height:40px" alt="">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from '@/components/TopBar.vue'

export default {
  name: 'LoginIndex',
  data(){
    return{
      check:false,
      shake:false
    }
  },
  components: {
    TopBar
  },
  methods:{
    goLoginPhone(){
      if(this.check){
        this.$router.push('/loginPhone')
      }else{
        this.shake = true
        setTimeout(() => {
          this.shake = false
        }, 1000);
      }
        
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  width 100%
  height 100%
  background-color #DB382B

  .logo
    display flex
    justify-content center
    align-items center
  
  .other
    display flex
    justify-content space-around
    align-items center
    margin-top 2rem

  .login-button
    display flex
    flex-direction column
    margin-left:10%

    .el-button
      width 90%

    .around
      animation-name:aroundAnimation; /*动画的名称*/
      transform-origin: center bottom; /*设置动画旋转元素的基点为*/
      cursor: pointer;

    .animated 
      animation-duration: 0.2s; /*动画时间*/
      animation-fill-mode: both; /*播放后的状态*/
      animation-iteration-count: 5; /*动作循环的次数：infinite 无限循环*/
      animation-duration: 0.2s; /*动画时间*/
      
    @keyframes upAnimation{
      0%,
      100%,
      20%,
      50%,
      80% {
      transition-timing-function: cubic-bezier(0.215,.61,.355,1); 
      transform: translate3d(0,0,0);
      }
      40%,
      43%{
      transition-timing-function: cubic-bezier(0.755,0.50,0.855,0.060);
      transform: translate3d(0,-30px,0);
      }
      70%{
      transition-timing-function: cubic-bezier(0.755,0.050,0.855,0.060);
      transform: translate3d(0,-15px,0);
      }
      90%{
      transform: translate3d(0,-4px,0);
      }
    }

    @keyframes aroundAnimation{
      0%,
      100%,
      20%,
      50%,
      80% {
      transition-timing-function: cubic-bezier(0.215,.61,.355,1); 
      transform: translate3d(0,0,0);
      }
      40%,
      43%{
      transition-timing-function: cubic-bezier(0.755,0.50,0.855,0.060);
      transform: translate3d(-20px,0,,0);
      }
      70%{
      transition-timing-function: cubic-bezier(0.755,0.050,0.855,0.060);
      transform: translate3d(-10px,0px,0);
      }
      90%{
      transform: translate3d(20px,0,0);
      }
    }
</style>
