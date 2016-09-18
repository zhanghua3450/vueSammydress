export default function(router){
	router.map({
		'/': {
	        name:'loadpage',
	        component: function (resolve) {
		      require(['../view/loadpage.vue'], resolve)
		    }
	    },
		'/home': {
	        name:'home',
	        component: function (resolve) {
		      require(['../view/home.vue'], resolve)
		    }
	    },
	    '/list/:listId': {
	        name:'list',
	        component: function (resolve) {
		      require(['../view/list.vue'], resolve)
		    }
	    },
		'/search':{
			name:'search',
			component(resolve){
				require(['../view/search.vue'],resolve)
			}
		},
		'product/:goodsId':{
			name:'product',
			component(resolve){
				require(['../view/goods.vue'],resolve)
			}
		}
	});
	 //默认List主页
    router.redirect({
        '/':"/home"
    });
	//注册路由切换前
	router.beforeEach(function (transition) {
	    transition.next();

	});
	
}


