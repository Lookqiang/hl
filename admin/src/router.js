import Vue from "vue";
import Router from "vue-router";
import login from "./views/login.vue";
import home from "./views/home.vue";

Vue.use(Router);

export default new Router({
  // mode:'history',
  routes: [
    {
      path: "/admin/login",
      name: 'login',
      component: login
    },
    {
      path: "/admin/home",
      name: 'home',
      component: home
    }
  ]
});
