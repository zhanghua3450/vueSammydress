<style lang="less">
	.cur-cate{ padding-left:10/32rem; padding-right: 10/32rem;
		h1{width: 100%; display: flex; height: 40/32rem; align-items:center; justify-content:center; font-size: 16/32rem; border: 1/32rem solid #ddd; }
	}
	.cur-cate-list{position: absolute; top: 0; left: 0; bottom: 0; right: 0; z-index: 100;background: #f7f7f7;
		header{background: #fff; display: flex; line-height: 30/32rem; padding: 10/32rem;}
		h2{font-size: 16/32rem; flex:1; font-weight: bold;}
		.close{font-size: 16/32rem; width: 30/32rem; height: 30/32rem; text-align: center; border: 1/32rem solid #666; overflow: hidden; border-radius: 20/32rem; transform: rotate(45deg);}
		
		li{line-height: 40/32rem; border-top: 1/32rem solid #ddd; padding-left: 10/32rem; padding-right: 10/32rem;}
		a{color: #333; text-decoration: none; font-size: 14/32rem;}
	}
</style>
<template>
	<div class="listPage" :class="{pt50rem:fix}"  transition="expand">
		<page-head :fixed="fix" :show-search="showSearch"></page-head>
		<div class="page-main">
			<div class="cur-cate">
				<h1>Women</h1>
				<div class="cur-cate-list" v-show="showList">
					<header>
						<h2>Shop woman by Category</h2>
						<i class="close iconfont icon-jiahao1"></i>
					</header>
					<ul>
						<li><a href="#">Dress</a></li>
						<li><a href="#">Dress</a></li>
						<li><a href="#">Dress</a></li>
					</ul>
				</div>
			</div>
			<div class="cate-filter">
				<a href="javascript:void(0);">REFINE</a>
				<a href="javascript:void(0);">SORT BY</a>
			</div>
		</div>
		<page-footer></page-footer>
	</div>
</template>

<script>
	import pageHead from '../components/header.vue';
	import pageFooter from '../components/footer.vue';
	export default{
        data(){
            return{
                fix:true,
                bannerList:[ ],
                cateList:[]
            }
        },
        components:{
        	pageHead,pageFooter
        }
    }
</script>