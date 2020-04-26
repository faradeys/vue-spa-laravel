import 'es6-promise/auto';
import axios from 'axios';
import Vue from 'vue';
import VueAuth from '@websanova/vue-auth';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import App from './App.vue';
import auth from './auth';
import router from './router';
import store from './store';
import { i18n } from './plugins/i18n';

Vue.config.productionTip = false;

// Set Vue globally
window.Vue = Vue;
// Set Vue router
Vue.router = router;
Vue.use(VueRouter);
// Set Vue authentication
Vue.use(VueAxios, axios);

axios.defaults.baseURL = '/api';
Vue.use(VueAuth, auth);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
