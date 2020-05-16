import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    isLogin:0,
  },
  mutations:{
    changeLogin(state,data){
      state.isLogin = data;
    }
  }
})

export default store;
