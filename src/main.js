import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import stAuthPlugin from "./plugins/stAuth";
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import UUID from 'vue-uuid';
 
Vue.use(UUID);
Vue.use(BootstrapVue);
Vue.use(stAuthPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
