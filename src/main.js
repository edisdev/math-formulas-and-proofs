import Vue from 'vue'
import App from './App.vue'
import Router from './router';
import Store from './store';

import "@/assets/styles/index.scss"

new Vue({
  el: '#app',
  router: Router,
  store: Store,
  render: h => h(App)
})
