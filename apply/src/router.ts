import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/login/Login.vue';
import resetpassword from './views/login/resetpassword.vue';
import signin from './views/login/signin.vue';
import apply from './views/apply.vue';


Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [
    {
      path: '/apply/Login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        next()
      }
    },
    {
      path: '/apply/resetpassword',
      name: 'resetpassword',
      component: resetpassword,
    },
    {
      path: '/apply/signin',
      name: 'signin',
      component: signin,
    },
    {
      path: '/apply/apply',
      name: 'apply',
      component: apply,
    }
  ],
});
