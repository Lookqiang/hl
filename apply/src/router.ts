import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/login/Login.vue';
import resetpassword from './views/login/resetpassword.vue';
import signin from './views/login/signin.vue';


Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/resetpassword',
      name: 'resetpassword',
      component: resetpassword,
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin,
    },
  ],
});
