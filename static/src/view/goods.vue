<style lang="less">
	.goods-swipe{ margin-bottom: 10/32rem;
		img{width: 100%;}
		.swipe-items-wrap>div.active{position: static;}
		.swipe-indicator.active{background-color:#fe5768; }
	}

	.goodsPage{
		.mint-navbar {
			.mint-tab-item{ padding: 17/32rem 0;}
		}
		.mint-tab-item-label{font-size: 14/32rem; text-transform: uppercase;}

		.title{padding: 0 10/32rem 5/32rem; font-size: 14/32rem;}
		.goods-adinfo{padding:10/32rem; margin-bottom: 10/32rem; background-color: #f7f7f7; font-size: 12/32rem; line-height: 18/32rem;}
		.price-box{padding:0 10/32rem 10/32rem; line-height: 32/32rem;
			span{display: inline-block; vertical-align: top;}
			.price{font-size: 20/32rem; font-weight: bold; margin-right: 10/32rem; color: #fe5768;}
			.costPrice{text-decoration: line-through; font-size: 14/32rem; color: #999; margin-right: 10/32rem;}
			.catoof{background-color: #fe5768; color: #fff;  padding: 0 5/32rem; font-size: 12/32rem;}
		}
	}
	
</style>

<template>
	<div class="goodsPage pt50rem"  transition="expand">
		<!-- <page-head></page-head> -->
		<mt-navbar class="page-part" :fixed="topFix" :selected.sync="selected">
			<mt-tab-item id="goods-basic">basic</mt-tab-item>
			<mt-tab-item id="goods-details">details </mt-tab-item>
			<mt-tab-item id="goods-comment">comment</mt-tab-item>
		</mt-navbar>
		<!-- tab-container -->
		<mt-tab-container :active.sync="selected">
			<mt-tab-container-item id="goods-basic">
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
				
				<h1 class="title">High Quality Fish Scale Knitting Tassel Sofa Blanket</h1>
				<div class="price-box">
					<span class="price">$6.79</span>
					<span class="costPrice">$17.60</span>
					<span class="catoof">61% OFF</span>
				</div>
				<p class="goods-adinfo">Processing Time: Item will be shipped out within 5-10 business days.</p>
				
			</mt-tab-container-item>
		  <mt-tab-container-item id="goods-details">
		    <mt-cell v-for="n in 4" :title="'测试 ' + n"></mt-cell>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="goods-comment">
		    <mt-cell v-for="n in 6" :title="'选项 ' + n"></mt-cell>
		  </mt-tab-container-item>
		</mt-tab-container>

		

	</div>
</template>

<script>
	import pageHead from '../components/header.vue'
	

	export default{
		data(){
			return{
				selected:"goods-basic",
				topFix:true
			}
		},
		components:{pageHead}
	}
</script>