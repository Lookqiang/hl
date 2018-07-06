import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import axios from 'axios';
Vue.config.productionTip = false;
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (router.currentRoute.name != 'signin' && router.currentRoute.name != 'login' && router.currentRoute.name != 'resetpassword') {
    router.push('login')
  } 
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


new Vue({
  router,
  store,
  render: (h) => h(App),
  created() {

    if (store.state.token && store.state.account) {
      router.push({ name: 'apply' })
    }
    if (store.state.token == '') {
      // 添加请求拦截器

      
    }
    router.beforeEach((to, from, next) => {
      next()
    });
    router.afterEach((to, from) => {
      console.log(to);
      console.log(from);
    });
  },

}).$mount('#app');
