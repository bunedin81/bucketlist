import Vue from 'vue';
import App from './App.vue';
import store from './store/store';
import router from '@/routes/index';
import GAuth from 'vue-google-oauth2';
import VueCookies from 'vue-cookies';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Datepicker from 'vuejs-datepicker';

Vue.config.productionTip = false;
Vue.use(GAuth, {
  clientId: process.env.VUE_APP_OAUTH_CLIENT,
  scope: 'profile email https://www.googleapis.com/auth/plus.login',
});
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueCookies);
Vue.use(Datepicker);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');

//for git test
