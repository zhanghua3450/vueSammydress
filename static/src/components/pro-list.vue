<style lang="less">
	.pro-list-item{ box-sizing: border-box;text-align: center; position: relative; padding-bottom: 10/32rem;
		
		
		.imgwrap{width: 100%;  text-align: center; background-repeat: no-repeat; background-size: contain;}
		img{vertical-align: top; width: 100%; }
		.zhekou_tag{position: absolute; z-index: 2; top: 0; right: 0; width: 40/32rem; height: 40/32rem; border-radius: 60/32rem ;background-color: #fe5768; color: #fff; font-size: 12/32rem; play: flex; align-items:center; padding-top: 3/32rem;
			span{display: block; font-size: 14/32rem;}
		}
		.price{ font-size: 14/32rem; font-weight: bold; height: 30/32rem; line-height: 30/32rem;}
	}
	
</style>
<template>


	<div>

		
			<div class="pro-list-item" v-for="item in lists" v-link="{name:'product',params: {goodsId:item.goodsId} }" >

		
				<strong class="zhekou_tag" v-if="item.zhekou - 0 > 0"><span>{{item.zhekou}}%</span>OFF</strong>
				<div class="imgwrap" style="width:{{(windowWidth - 10)/2}}px; height:{{item.height * (windowWidth - 10)/2 / item.width}}px; background-image:url({{item.img}})">
					
				</div>
				<p class="price">
					<span v-text="item.price | bizhong getCurrecy.icon getCurrecy.huilv"></span>
					
				</p>
			
			</div>
		
		
	</div>
	

</template>

<script type="text/javascript">

	import {getCurrecy} from '../store/mutations.js';

	export default {
		props:['lists'],
		data(){
			return{
				
			}
		},
		computed:{
			windowWidth(){
				var wap = document.querySelector('.pro-list-wrap');
				return wap.offsetWidth;
			}
		},
		
		vuex:{
			getters:{
				getCurrecy
			}
		}
	}
	
</script>