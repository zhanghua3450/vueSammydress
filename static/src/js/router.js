export default function(router){
	router.map({
		'/': {
	        name:'loadpage',
	        component: function (resolve) {
		      require(['../components/loadpage.vue'], resolve)
		    }
	    },
		'/home': {
	        name:'home',
	        component: function (resolve) {
		      require(['../components/home.vue'], resolve)
		    }
	    }

	})
}
