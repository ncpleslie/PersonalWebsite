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

import firebase from "firebase/app";

const config = {
  apiKey: "AIzaSyCTPuElepHtt2YHyajpj-r5aozVoe58IqE",
  authDomain: "nickleslie-api.firebaseapp.com",
  databaseURL: "https://nickleslie-api.firebaseio.com",
  projectId: "nickleslie-api",
  storageBucket: "nickleslie-api.appspot.com",
  messagingSenderId: "1007346792264",
  appId: "1:1007346792264:web:69e01d13e748b1c1dd257d"
};
firebase.initializeApp(config);

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