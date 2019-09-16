<template>
  <div class="home">
   
   <div class="img" v-for="(item,index) in styleObject" :key="index" :style="item">
  
   <img width="30"  src="../../static/images/图标  汤钻.png" alt="">
   
   </div>
  
   {{amount}}
  
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      amount:0,
      ave:0,
      styleObject:[
      
      ]
     
    }
  },
  created(){
   this.styleObject=this.$store.state.styleObject
    //  let topY=Math.round(Math.random()*300)+'px'
    //   let leftX=Math.round(Math.random()*300)+'px'
//  this.styleObject =[
//        { position:'absolute',
//           top:Math.round(Math.random()*300)+'px',
//           left:Math.round(Math.random()*300)+'px'
//           },
//              { position:'absolute',
//           top:Math.round(Math.random()*300)+'px',
//           left:Math.round(Math.random()*300)+'px'
//           },
//             { position:'absolute',
//           top:Math.round(Math.random()*300)+'px',
//           left:Math.round(Math.random()*300)+'px'
//           },
//             { position:'absolute',
//           top:Math.round(Math.random()*300)+'px',
//           left:Math.round(Math.random()*300)+'px'
//           },
//              { position:'absolute',
//           top:Math.round(Math.random()*300)+'px',
//           left:Math.round(Math.random()*300)+'px'
//           },
//      ]
//       console.log( this.styleObject )
//       this.setCookie('styleObject',this.styleObject,2)
//       let old=this.getCookie('styleObject')
//       console.log(old)
  },
  mounted(){
   axios.get('../../static/data/userInfo.json').then((response)=>{
            console.log(response)
            const res=response.data
            if(res.errorCode==='00'){
               
                const data=res.returnObject
                this.amount=data.amount
                this.$store.state.amount=data.amount
                // this.userInfo=data.userInfo
                console.log(this.amount)
                console.log(this.$store.state.amount)
                let count=Math.round(Math.random()*10)
                 console.log(count)
               this.ave=(this.amount/count).toFixed(4)
               console.log(this.ave)
              
            }
            
        })
  // console.log(this.$store.state.amount)
  //     this.$store.commit('loadData')
  //  this.amount=this.$store.state.amount
  //     this.$nextTick(()=>{
  //     //  this.amount=this.$store.state.amount
  //     })
     
  },
  methods:{
    //读取cookie，需要注意的是cookie是不能存中文的，如果需要存中文，解决方法是后端先进行编码encode()，前端取出来之后用decodeURI('string')解码。（安卓可以取中文cookie，IOS不行）
//    getCookie(cname)        
// {        
// var name = cname + "=";        
// var ca = document.cookie.split(';');        
// for(var i=0; i<ca.length; i++)        
//   {        
//   var c = ca[i].trim();        
//   if (c.indexOf(name)==0) return c.substring(name.length,c.length);        
//   }        
// return "";        
// },

// //设置cookie   name为cookie的名字，value是值，expiredays为过期时间（天数）
//    setCookie (name, value, expiredays) {
//      var exdate = new Date();
//      exdate.setDate(exdate.getDate() + expiredays);
//     document.cookie = name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
//    },

//  //删除cookie

//    delCookie (name) {
//       var exp = new Date();
//       exp.setTime(exp.getTime() - 1);
//       var cval = getCookie(name);
//      if (cval != null)
//      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
//    },
    posChange(index){
      let topY=Math.round(Math.random()*300)+'px'
      let leftX=Math.round(Math.random()*300)+'px'
    

    }
  },
  computed:{

    // amount(){
    //   this.$store.commit('loadData')
    //   // let proIndex=Math.random()*this.amount
    //   // console.log(proIndex.toFixed(4))
    //   return this.$store.state.amount
    // }
    // ave(){
    //   return (this.amount/(Math.random()*10)).toFixed(4)
    // }
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

 .home{
   height: 100%;
  width: 100%;
  background: url('../../static/images/bg6_1551427762114.png') no-repeat;
//  overflow: hidden;
//  background-size:cover;
 background-size:100% 100%;
//  margin-bottom: 30px;
 }
img{
  
 
}
 
</style>
