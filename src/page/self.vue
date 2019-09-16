<template>
  <div class="self">
  <ul>
    <li><span>用户昵称：{{nickName}}</span></li>
    <li><span>钻石数量：{{diamond}}</span></li>
    <li><span>健康力{{power}}</span></li>
  </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userInfo:{}
    }
  },
  mounted(){
    // this.userInfo=this.$store.state.userInfo
    // console.log(this.userInfo)
  },
   computed:{
   ...mapState(['diamond','power','nickName'])
     },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
