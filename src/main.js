// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
//调用axios组件 发送get post数据
Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
//拦截器
router.beforeEach(function (to,from,next) {
  if(to.meta.requireAuth){
  //  要去url只有登录成功才能访问
    if(store.state.token){
      next()
    }else{
      //,query:{backUrl:to.fullPath  返回原先的url
      next({name:'login',query:{backUrl:to.fullPath}})
    }
  }else{
    next()
  }
})
