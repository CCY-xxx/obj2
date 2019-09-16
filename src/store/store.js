import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const state = {
    amount: 0,//钻石总数
    userInfo: {},//个人详情
    count: 0,//钻石分拆个数
    ave: 0,//钻石单数
    nickName: '',//用户昵称
    diamond: 0,//拥有的钻石数量
    power: 0,//拥有的健康力数量
    styleObject:[]//钻石随机位置
}
const mutations = {
    loadData() {
        //获取json数据并赋值
        axios.get('../../static/data/userInfo.json').then((response) => {
            // console.log(response)
            const res = response.data
            this.state.amount = res.returnObject.amount
            this.state.nickName = res.returnObject.userInfo.nickName
            this.state.userInfo = res.returnObject.userInfo
            this.state.power = res.returnObject.userInfo.power
            if (this.state.styleObject.length > 0) {
                return
            }
            this.state.count = Math.round(Math.random() * 10) + 1
            this.state.ave = (this.state.amount / this.state.count).toFixed(4)
            this.state.diamond = res.returnObject.userInfo.diamond
            //根据钻石分拆个数设置钻石随机位置
            for (let i = 1; i <= this.state.count; i++) {

                this.state.styleObject.push(
                    {
                        position: 'absolute',
                        top: Math.round(Math.random() * 300 + 50) + 'px',
                        left: Math.round(Math.random() * 300) + 'px'
                    }
                )

            }


            // console.log(this.state.amount)

        })
    },

}
const store = new Vuex.Store({
    state,
    mutations
})
export default store