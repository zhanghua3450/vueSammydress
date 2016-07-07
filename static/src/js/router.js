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
	    }

	})
}
