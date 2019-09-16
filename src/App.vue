<template>
  <div id="app">
   <FooterNav />
    <router-view/>
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav'
export default {
  name: 'App',
  components:{
    FooterNav
  },
  created(){
    // setTimeout(() => {
      this.$store.commit('loadData')
    // }, 1000);

  },
  mounted(){
// this.$store.commit('loadData')
  },
   computed:{
   }
}
</script>

<style>
*{
  margin:0px;
  padding: 0px;
}
html,body{
  height: 100%;
  width: 100%;
}
#app{
   height: 100%;
  width: 100%;
}

</style>
