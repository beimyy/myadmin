// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Router from 'vue-router'
Vue.use(Router);

import Vuex from 'vuex';
Vue.use(Vuex);

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

import router from './router'
//import routers from './config/routers.js';
//const router = new VueRouter({routers});

import App from './App'

Vue.config.productionTip = false

router.beforeEach(function(to, from, next){
	window.scroll(0, 0);
	console.log('to = ' + to);
	console.log('from = ' + from);
	next();
});

/* eslint-disable no-new */
const appAdmin = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
