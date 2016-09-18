<style lang="less">
	.goods-swipe{ 
		img{width: 100%;}
		.swipe-items-wrap>div.active{position: static;}
	}
	

</style>

<template>
	<div class="goodsPage" :class="{pt50rem:fix}"  transition="expand">
		<page-head :fixed="fix" :show-search="showSearch"></page-head>
		<mt-swipe :auto="0" class="goods-swipe">
		  <mt-swipe-item>
		  	<img src="http://gloimg.sammydress.com/S/pdm-product-pic/Clothing/2016/08/03/source-img/20160803110720_59804.jpg" alt="">
		  </mt-swipe-item>
		  <mt-swipe-item>
			<img src="http://gloimg.sammydress.com/S/pdm-product-pic/Clothing/2016/08/03/source-img/20160803110720_52009.jpg">
		  </mt-swipe-item>
		  <mt-swipe-item>
			<img src="http://gloimg.sammydress.com/S/pdm-product-pic/Clothing/2016/08/03/source-img/20160803110720_30142.jpg" alt="">
		  </mt-swipe-item>
		</mt-swipe>
		
		

	</div>
</template>

<script>
	import pageHead from '../components/header.vue'
	

	export default{
		data(){
			return{
				fix:true
			}
		},
		components:{pageHead}
	}
</script>