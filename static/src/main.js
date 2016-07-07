import VueRouter from 'vue-router';

import routerMap from './js/router.js';
Vue.use(VueRouter);

import vueTouch from 'vue-touch';
Vue.use(vueTouch);

import './css/base_min.css';


var router = new VueRouter({
	hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});

routerMap(router);

var App = Vue.extend({});
router.start(App,'#app');
