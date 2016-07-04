<template>
	<header>
		<div :class="{fixed:fixed}" class="appTop" >
			<div class="memu">
				<a href="#"><i class="fa fa-bars"></i></a>
				<a href="#"><i class="fa fa-search"></i></a>
			</div>
			<div class="logo"><a href="/"><img src="/static/img/logo.gif"></a></div>
			<div class="cart">
				
				<a href="#"><i class="fa fa-shopping-bag"></i></a>
				<a href="#"><i class="fa fa-user"></i></a>
			</div>
		</div>	    
    </header>
</template> 

<style lang="less">
	.fixed{position: fixed; top: 0; left: 0; width: 100%; height: 50/32rem; border-bottom: 1px solid #ddd; z-index: 100; background: #fff;}
	.appTop{display: flex; align-items:center; align-content:center;
		.logo{flex:1; text-align: center;
			img{width: 370/64rem;} 
		}

		@iconH:30/32rem;
		.memu,.cart{line-height: @iconH; display: flex; width: @iconH*2;
			a{display: block; flex:1; width: @iconH; height: @iconH; text-align: center; font-size: 20/32rem; color: #333;}
		}
		
	} 
</style> 

<script>
	export default {
		props:['fixed','showSearch'],
		data(){
			return {
				
			}
		}
	}
</script>