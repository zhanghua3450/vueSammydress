<template>
	<header>
		<div :class="{fixed:getFixHead,'show':opened}" class="appTop ">
			<div class="memu">
				<a href="javascript:void(0);" v-touch:tap="toggle"><i class="iconfont icon-caidan"></i></a>
				<a v-link="{name:'search'}"><i class="iconfont icon-sousuo"></i></a>
			</div>
			<div class="logo"><a href="/"><img src="/static/img/logo.gif"></a></div>
			<div class="cart">

				<a href="#"><i class="iconfont icon-gouwuche"></i></a>
				<a href="#"><i class="iconfont icon-wode"></i></a>
			</div>
		</div>

		<menu-sader :opened.sync = "opened">
			<menu-list :lists = "lists"></menu-list>
		</menu-sader>
    </header>
    
</template>

<style lang="less">
	.fixed{position: fixed; top: 0; left: 0; width: 100%; height: 50/32rem; border-bottom: 1px solid #ddd; z-index: 100; background: #fff;}
	.appTop{display: flex; align-items:center; align-content:center;transition: all .5s ease; 
		a{text-decoration: none;}
		.logo{flex:1; text-align: center;
			img{width: 370/64rem;}
		}

		@iconH:30/32rem;
		.memu,.cart{line-height: @iconH; display: flex; width: @iconH*2;
			a{display: block; flex:1; width: @iconH; height: @iconH; text-align: center; font-size: 20/32rem; color: #333;}
		}
		&.show{transform: translateX(250/32rem);}
	}
	.drag-handle{display: none !important;}
	.scroll-hide{height: 100%; overflow: hidden;}
</style>

<script>
	import menuSader from './menu.vue';
	import menuList from './menu-list.vue';
	
	
	import {getFixHead} from '../store/mutations.js'

	export default {
		
		vuex:{
			getters:{
				getFixHead
			}
		},

		data(){
			return {
				'opened':false,
				lists:[
					{name:'My tree',
						children:[
							{name:'hello'},
							{name:'wat'},
							{name:'child folder',
								children:[
									{name:'hello'},
									{name:'wat'}	
								]
							}
						]
					},
					{name:'My tree',
						children:[
							{name:'hello'},
							{name:'wat'},
							{name:'child folder',
								children:[
									{name:'hello'},
									{name:'wat'}	
								]
							}
						]
					}
					
				]
			}
		},
		
		methods:{
			toggle(){
			
				$('body').addClass('scroll-hide');
				this.opened = !this.opened
			}
		},
		components:{menuSader,menuList}
	}
</script>
