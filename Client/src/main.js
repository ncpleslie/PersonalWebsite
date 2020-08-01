import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueScrollTo from 'vue-scrollto'
import AOS from 'aos'
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import config from "../firebase-config.json";
import {
  CardPlugin,
  FormPlugin,
  FormGroupPlugin,
  FormInputPlugin,
  FormTextareaPlugin,
  ButtonPlugin,
  ImagePlugin,
  JumbotronPlugin,
  AlertPlugin,
  EmbedPlugin,
  TooltipPlugin,
  SpinnerPlugin,
  FormFilePlugin
} from 'bootstrap-vue';
Vue.use(CardPlugin);
Vue.use(FormPlugin);
Vue.use(FormGroupPlugin);
Vue.use(FormInputPlugin);
Vue.use(FormTextareaPlugin);
Vue.use(FormFilePlugin);
Vue.use(ButtonPlugin);
Vue.use(ImagePlugin);
Vue.use(JumbotronPlugin);
Vue.use(AlertPlugin);
Vue.use(EmbedPlugin);
Vue.use(TooltipPlugin);
Vue.use(SpinnerPlugin);

import {
  routes
} from './routes';

firebase.initializeApp(config);

AOS.init({
  disable: 'mobile'
});
Vue.use(VueRouter);
Vue.use(VueScrollTo);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next('/admin');
  } else {
    next();
  }
})

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})