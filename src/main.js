import Vue from 'vue'
import App from './App.vue'
import VueSelect from 'vue-select';
import router from './router'
import store from './store'

Vue.component('v-select', VueSelect);
import 'semantic-ui-css/semantic.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
