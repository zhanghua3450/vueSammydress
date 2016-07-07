<template>
	<header>
		<div :class="{fixed:fixed}" class="appTop" >
			<div class="memu">
				<a href="javascript:void(0);" @click="toggle"><i class="iconfont icon-caidan"></i></a>
				<a href="#"><i class="iconfont icon-sousuo"></i></a>
			</div>
			<div class="logo"><a href="/"><img src="/static/img/logo.gif"></a></div>
			<div class="cart">

				<a href="#"><i class="iconfont icon-gouwuche"></i></a>
				<a href="#"><i class="iconfont icon-wode"></i></a>
			</div>
		</div>
    </header>
    <side-nav :is-opened.sync="opened"   v-ref:side-nav>
	  <li>First Text<li>
	</side-nav>
</template>

<style lang="less">
	.fixed{position: fixed; top: 0; left: 0; width: 100%; height: 50/32rem; border-bottom: 1px solid #ddd; z-index: 100; background: #fff;}
	.appTop{display: flex; align-items:center; align-content:center;
		a{text-decoration: none;}
		.logo{flex:1; text-align: center;
			img{width: 370/64rem;}
		}

		@iconH:30/32rem;
		.memu,.cart{line-height: @iconH; display: flex; width: @iconH*2;
			a{display: block; flex:1; width: @iconH; height: @iconH; text-align: center; font-size: 20/32rem; color: #333;}
		}

	}
	.drag-handle{display: none !important;}
	.side-nav{background:#fff;}
</style>

<script>
	import sideNav from 'vue-side-nav';

	export default {
		props:['fixed','showSearch'],
		data(){
			return {
				opened:true
				
			}
		},
		methods:{
			toggle(){
				
				this.opened = !this.opened
				
			}
		},
		components:{sideNav}
	}
</script>
