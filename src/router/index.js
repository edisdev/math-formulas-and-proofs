import Vue from 'vue';
import Router from 'vue-router';

// components

import Home from '../pages/Home';
import Formular from '../pages/Formula';
import FormularDetail from '../pages/Formula/Detail'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {  
      path: '/formuller',
      name: 'FormulaList',
      component: Formular
    },
    { 
      path: '/formul/:id',
      name: 'FormulaDetail',
      component: FormularDetail
    }
  ]
});