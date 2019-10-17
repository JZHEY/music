<template>
  <div class="audio">
    <audio :src="url" ref="audio"></audio>
    <div class="play-slider">
      <span>00:00</span>
      <el-slider :show-tooltip="false"></el-slider>
      <span>03:36</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Audio",
  props: {
    id: Number
  },
  data() {
    return {
      url: ""
    };
  }
};
</script>

<style lang="stylus" scoped>
.play-slider
    display flex
    align-items center
    text-align center
    height 30%

    span
        width 5rem
    
    .el-slider
        flex 1
</style>