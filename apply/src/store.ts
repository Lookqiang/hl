import Vue from 'vue';
import  Vuex  from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    slecetValue:'1'
  },
  mutations: {
    chooseSlecetValue (state,payload) {
      // 变更状态
      state.slecetValue=payload
    }
  },
  actions: {

  },
});
