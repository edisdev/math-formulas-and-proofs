// import vue and vuex //
import Vue from 'vue';
import Vuex from 'vuex';

import Formulas from './modules/formular'
// use Vuex
Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    Formulas
  },
});