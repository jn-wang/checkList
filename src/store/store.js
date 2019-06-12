import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    //全局变量组件中通过this.$store.state.username调用

    apiList:{
      login:'http://127.0.0.1:8000/api/v1/auth/',
    }
  },


})
