import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import AxiosPlugin from 'vue-axios-cors';
 



Vue.config.productionTip = false

Vue.use(VueAxios, axios)

Vue.use(AxiosPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
