<style lang="less">
	.pro-list-item{float: left; width: 160/32rem; box-sizing: border-box; padding: 0 5/32rem 10/32rem 5/32rem; text-align: center; position: relative;
		
		&:nth-child(2n){padding: 0 5/32rem 10/32rem 5/32rem;}
		.imgwrap{width: 100%; height: 150/32rem; text-align: center;}
		img{vertical-align: top; height: 100%; }
		.zhekou_tag{position: absolute; z-index: 2; top: -5/32rem; right: 10/32rem; width: 40/32rem; height: 40/32rem; border-radius: 60/32rem ;background-color: #fe5768; color: #fff; font-size: 12/32rem; play: flex; align-items:center; padding-top: 3/32rem;
			span{display: block; font-size: 14/32rem;}
		}
		.price{ font-size: 14/32rem; font-weight: bold; height: 30/32rem; line-height: 30/32rem;}
	}
</style>
<template>

	<li class="pro-list-item" v-for="item in lists" v-link="{name:'product',params: {goodsId:item.goodsId} }">
		
		<strong class="zhekou_tag" v-if="item.zhekou - 0 > 0"><span>{{item.zhekou}}%</span>OFF</strong>
		<div class="imgwrap">
			<img :src="item.img">
		</div>
		<p class="price">
			<span v-text="item.price | bizhong getCurrecy.icon getCurrecy.huilv"></span>
			
		</p>
	
	</li>

</template>

<script type="text/javascript">

	import {getCurrecy} from '../store/mutations.js';

	export default {
		props:['lists'],
		
		vuex:{
			getters:{
				getCurrecy
			}
		}
	}
	
</script>