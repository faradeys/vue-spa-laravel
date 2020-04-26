import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      isAdmin: false,
    },
  },
  mutations: {},
  actions: {},
  getters: {
    auth(state) {
      return state.user;
    },
  },
});
