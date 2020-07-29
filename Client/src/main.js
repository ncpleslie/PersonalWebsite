import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router';
import VueScrollTo from 'vue-scrollto'

import {
  routes
} from './routes';

import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

AOS.init()

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

Vue.use(BootstrapVue)
Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')