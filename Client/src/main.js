import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import VueScrollTo from 'vue-scrollto'

import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

AOS.init()

Vue.use(BootstrapVue)
Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
