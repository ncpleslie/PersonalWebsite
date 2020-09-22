import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import AOS from 'aos'
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';
import firebase from "firebase/app";
import "firebase/auth";
import config from "../firebase-config.json";
import {
  CardPlugin,
  FormPlugin,
  FormGroupPlugin,
  FormInputPlugin,
  FormTextareaPlugin,
  AlertPlugin,
  TooltipPlugin,
  SpinnerPlugin,
  FormFilePlugin,
  TabsPlugin
} from 'bootstrap-vue';
Vue.use(CardPlugin);
Vue.use(FormPlugin);
Vue.use(FormGroupPlugin);
Vue.use(FormInputPlugin);
Vue.use(FormTextareaPlugin);
Vue.use(FormFilePlugin);
Vue.use(AlertPlugin);
Vue.use(TooltipPlugin);
Vue.use(SpinnerPlugin);
Vue.use(TabsPlugin);

import {
  routes
} from './routes';

import './registerServiceWorker'

firebase.initializeApp(config);
Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      created() {
        AOS.init();
      },
      render: h => h(App)
    }).$mount('#app')
  }
})