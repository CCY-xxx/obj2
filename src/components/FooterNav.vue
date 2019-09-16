<template>
   <div class="footer">
      <router-link to="/home">
      <i class="iconfont icon-icon_Home"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/find">
      <i class="iconfont icon-diqiu-copy"></i>
        <span>发现</span>
      </router-link>
      <router-link to="/work">
      <i class="iconfont icon-icon_Alendar"></i>
        <span>任务</span>
      </router-link>
      <router-link to="/self">
      <i class="iconfont icon-icon_User"></i>
        <span>我的</span>
      </router-link>

    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.footer{
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 50px;
  display: flex;
  background: rgb(32, 60, 218);
  border-top: 1px solid black;
  a{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    color:rgb(234, 238, 240);
     text-decoration:none;
    i{
      font-size:25px;
     
    }
  }
  a .router-link-active{
    color:red;
  }
}
</style>
