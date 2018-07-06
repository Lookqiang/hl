import Vue from 'vue';
import  Vuex  from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token:localStorage.token,
    account:localStorage.account,
    student_id:localStorage.student_id
  },
  mutations: {
    chooseSlecetValue (state,payload) {
      // 变更状态
      
    }
  },
  actions: {

  },
});
