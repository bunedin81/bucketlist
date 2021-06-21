import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from '@/routes/index'
import GAuth from 'vue-google-oauth2'

Vue.config.productionTip = false
Vue.use(GAuth, {clientId: process.env.VUE_APP_OAUTH_CLIENT, scope: 'profile email https://www.googleapis.com/auth/plus.login'})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')