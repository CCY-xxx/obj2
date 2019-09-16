<template>
  <div class="home">
    <div class="header">
      <span class="diamond">
        <img src="../../static/images/图标  汤钻.png" alt />
        钻石数量：{{diamond}}
      </span>&nbsp;&nbsp;&nbsp;
      <span class="power">
        <img src="../../static/images/图标 健康力.png" alt />
        健康力：{{power}}
      </span>
    </div>
    <div>
      <img width="100px" style="position:absolute;top:80px;left:250px" src="../../static/images/icon_right.png" alt="">
    </div>

    <div
      class="img"
       ref="img" 
      @click="fadeClick($event,index)"
      v-for="(item,index) in styleObject"
      :key="index"
      :style="item"
    >
      
      <div v-show="flag" >
          <img width="30" src="../../static/images/图标  汤钻.png" alt />
          <div>{{ave}}</div>
        </div>
  
    
    
    </div>
    
     <div class="left">
      <img src="../../static/images/区块高度及资产.png" alt />
    </div>
    <div class="right">
      <img src="../../static/images/是否收藏.png" alt />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";//导入vuex中的state
export default {
  data() {
    return {
      flag: true,
      msg: "Welcome to Your Vue.js App"
     
    };
  },
  created() {
    
  },
  mounted() {
   
  },
  methods: {
    //点击钻石时间处理
    fadeClick(e, index) {
      let dia = Number(this.ave) + Number(this.diamond);
      this.$store.state.diamond = dia.toFixed(4);//保留四位小数
      // console.log(this.diamond.toFixed(4));
      this.styleObject.forEach((item, i) => {
        if (i == index) {
         this.flag = false;
          this.styleObject.splice(index, 1);//删除点击的钻石
           
        }
        this.flag = true;
      });
    }
  },
  computed: {
    ...mapState(["amount", "diamond", "ave", "styleObject", "power"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.home {
  height: 100%;
  width: 100%;
  background: url("../../static/images/bg6_1551427762114.png") no-repeat 0 -40px;
  //  overflow: hidden;
  //  background-size:cover;
  background-size: 100% 100%;
}
.header {
  width: 370px;
  height: 40px;
  line-height: 40px;
  border-radius: 60px;
  border: 1px solid rgb(140, 140, 218);
  background: rgb(123, 123, 230);
  color: white;
  font-size: 18px;
  // display: flex;
}
.header img {
  margin-left: 10px;
  width: 15px;
  height: 15px;
}
.left,.right{
width: 35%;
height: 18%;
border: 1px solid rgb(3, 3, 90);;
text-align: center;
border-radius: 20px;
background: rgb(3, 3, 90);
box-sizing: border-box;
box-shadow: 6px 6px 5px black;
}
.left{
 position: absolute;
  top: 70%;
  left:2%;
}
.left img{
  margin-top: 8px;
  width: 80%;
}
.right{
   position: absolute;
  top: 70%;
  left:40%;
}
.right img{
  margin-top: 8px;
   width: 80%;
}
@keyframes mymove
{
0%   {top:200px;left:180px;transform:scale(0.2);opacity: 0.2;}
25%  {top:200px;left:180px;transform:scale(0.4);opacity: 0.4;}
50%  {top:200px;left:180px;transform:scale(0.6);opacity: 0.6;}
75%  {top:200px;left:180px;transform:scale(0.8);opacity: 0.8;}
100% {top:200px;left:180px;transform:scale(1);opacity: 1;}
}
@keyframes move
{
0%  {transform:scale(1);opacity: 1;}
100% {transform:scale(0);opacity: 0;}
}
.img{
 animation:mymove 1s ease;
}
// .img{
//  animation:move 2s ease;
// }
</style>
