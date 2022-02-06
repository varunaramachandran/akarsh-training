import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import { routes } from './routes';
Vue.config.productionTip = false;
const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history',
});
Vue.use(VueRouter);
Vue.use(Vuelidate);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
