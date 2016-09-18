import VueRouter from 'vue-router';
import filter from './js/filter.js';
import routerMap from './js/router.js';

import store from './store/store.js'

Vue.use(VueRouter);

import vueTouch from 'vue-touch';
Vue.use(vueTouch);


var VueResource = require('vue-resource');
Vue.use(VueResource);

import Mint from 'mint-ui';
Vue.use(Mint);

import './css/base_min.css';


var router = new VueRouter({
	hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});

routerMap(router);

var App = Vue.extend({store:store});
router.start(App,'#app');
