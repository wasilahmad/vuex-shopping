import Vue from 'vue'

// vue-bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

// INR global filter
Vue.filter('INR', function (value) {
  if (!value) return '0.00'
  return 'INR' + ' ' + parseFloat(value).toFixed(2);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
