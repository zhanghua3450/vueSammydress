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

	.cate-filter{line-height: 30/32rem; height: 30/32rem; margin: 10/32rem;
		a{width: 50%; display: block; float: left; color: #333; font-size: 14/32rem;  text-decoration: none;
			&:last-child{text-align: right;}
		}
		
	}
	.icon-loading{width: 30/32rem!important; height: 30/32rem!important; font-size: 30/32rem!important; line-height: 30/32rem!important;}
	.pro-list{padding-bottom: 20px;}
	.infinite-status-tips{font-size: 20/32rem !important;}
</style>
<template>

	<div class="listPage" :class="{pt50rem:fix}"  transition="expand">
		<page-head :fixed="fix" :show-search="showSearch"></page-head>
		<div class="page-main">

			<div class="cur-cate">
				<h1>WOMAN</h1>
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
				<a href="javascript:void(0);"><i class="iconfont icon-filter"></i> REFINE</a>
				<a href="javascript:void(0);"><i class="iconfont icon-sort"></i> SORT BY</a>
			</div>

			<div class="pro-list clearfix">
				
				<ul>
					<pro-list :lists="lists" :bzicon="bzicon"></pro-list>
					<infinite-loading :distance="distance" :on-infinite="onInfinite" v-if="isLoadedAllData"></infinite-loading>
				</ul>
			</div>
		</div>

		<page-footer></page-footer>
	</div>
</template>

<script>
	import pageHead from '../components/header.vue';
	import pageFooter from '../components/footer.vue';
	import proList from'../components/pro-list.vue';
	import Indicator from 'vue-indicator';
	import '../css/indicator.css';
	import InfiniteLoading from 'vue-infinite-loading';

	import store from '../store/store.js'
	
	export default{
		route:{
			data(){
				this.onInfinite();
			}
		},
		
        data(){
            return{
               fix:true,
               lists:[],
               distance:10,
               isLoadedAllData:true,
               curpage:0
            }
        },
        methods:{
        	onInfinite(){
        		//Indicator.open('Loading...');
        		++ this.curpage;
        		this.$http.get('/static/json/list.json',{params:{curpage:this.curpage}}).then(function(response){
        			
        			response.data.lists.map((index, elem)=>{
        				this.lists.push(index)
        			});
        			//Indicator.close();
        			if(this.curpage < response.data.pageall){
        				this.$broadcast('$InfiniteLoading:loaded');
        			}else{
        				this.$broadcast('$InfiniteLoading:noMore');
        			}
        		})
        	}
        },
        components:{
        	pageHead,pageFooter,proList, InfiniteLoading
        },
		
		store:store
    }
</script>