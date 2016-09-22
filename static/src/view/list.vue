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
	.pro-list{padding-bottom: 20/32rem;}
	.pro-list-wrap{
		.tile-box{ width: 50%; float: left;
			&:first-child{padding-right: 5/32rem;}
			&:last-child{padding-left: 5/32rem;}
		}

	}
	.infinite-status-tips{font-size: 20/32rem !important;}
	.popPanel{width: 80%; height: 100%;}

	.popupScroll{overflow-y: auto; -webkit-overflow-scrolling: touch; position: relative; width: 100%; 
		height: 100%;
		.mint-cell{font-size: 12/32rem;}
		.mint-checklist-title{font-size: 12/32rem; line-height: 30/32rem; font-weight: bold; text-transform: uppercase;}
		.popBottom{padding: 5/32rem;}
	}
</style>
<template>

	<div class="listPage pt50rem"   transition="expand">
		<page-head></page-head>
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
				<a @click="showPopUp"><i class="iconfont icon-filter"></i> REFINE</a>
				<a @click="showActionsheet"><i class="iconfont icon-sort"></i> SORT BY</a>
			</div>

			<div class="pro-list clearfix">
					<div class="pro-list-wrap clearfix">
						<div class="tile-box">
							<pro-list :lists="listseven" :bzicon="bzicon"></pro-list>
						</div>
						<div class="tile-box">
							<pro-list :lists="listodd" :bzicon="bzicon"></pro-list>
						</div>
					</div>
			
					
					<infinite-loading :distance="distance" :on-infinite="onInfinite" v-if="isLoadedAllData"></infinite-loading>
				
			</div>
		</div>

		<page-footer></page-footer>
		<mt-popup :visible.sync="popup.visible"  position="left" class="popPanel">
			<div class="popupScroll">
				<mt-checklist v-for="list in checklist"
				  	:title="list.title"
				  	:value.sync="list.value"
				  	:options="list.options">
				</mt-checklist>

				<div class="popBottom">
					<mt-button type="danger" size="large" @click="getFiletValue">Apply</mt-button>
				</div>
			</div>
		</mt-popup>

		<mt-actionsheet :actions="actionsheet.actions" :visible.sync="actionsheet.visible" :cancel-text="actionsheet.cancel"></mt-actionsheet>

	</div>
</template>

<script>
	import pageHead from '../components/header.vue';
	import pageFooter from '../components/footer.vue';
	import proList from'../components/pro-list.vue';
	// import Indicator from 'vue-indicator';
	// import '../css/indicator.css';
	import InfiniteLoading from 'vue-infinite-loading';
   import URL from '../js/ajaxURL';

	export default{
		route:{
			data(){
				this.onInfinite();
			}
		},
		
        data(){
            return{


               listseven:[],
               listodd:[],


               distance:10,
               isLoadedAllData:true,
               curpage:0,

               popup:{
            		visible:false
               },

               actionsheet:{
               		visible:false,
               		actions:[
               			{name:'Hot',method:this.actionSheetMethod},
               			{name:'New',method:this.actionSheetMethod},
               			{name:'Facebook Likes',method:this.actionSheetMethod},
               			{name:'Recommended',method:this.actionSheetMethod},
               			{name:'Price - Low to High',method:this.actionSheetMethod}
               		],
               		cancel:"Cancel"
               },

               checklist:[
               		{title:"Featured",value:[],options:[{label:"On sale",value:"0"},{label:"Priority Dispatch",value:"1"},{label:"Free Shipping",value:"2"}]},
               		{title:"Size",value:[],options:[{label:"One Size",value:"0"},{label:"S",value:"1"},{label:"M",value:"2"},{label:"M",value:"3"},{label:"L",value:"4"}]},
               		{title:"Style",value:[],options:[{label:"Casual1",value:"0"},{label:"Sexy & Club",value:"1"},{label:"Brief",value:"2"},{label:"Novelty",value:"3"}]}
               ]
               
            }
        },
   
        methods:{
        	actionSheetMethod(){
        		this.curpage = 0;
        		var targetObj = event.target;

        		this.$route.router.go({query:{sortBy:targetObj.innerText }})
        		
        		
        	},
        	onInfinite(){
        		//Indicator.open('Loading...');

        		++ this.curpage;
        		let params = Object.assign({},this.$route.params,this.$route.query,{curpage:this.curpage})
        		
        		this.$http.get(URL.LIST,{params:params}).then(function(response){
        			
        			response.data.lists.forEach((v, i)=>{
        				if(i % 2 == 0){
        					this.listseven.push(v);
        				}else{
        					this.listodd.push(v);
        				}
        				//this.lists.push(index)
        			});
        			//Indicator.close();
        			if(this.curpage < response.data.pageall){
        				this.$broadcast('$InfiniteLoading:loaded');
        			}else{
        				this.$broadcast('$InfiniteLoading:noMore');
        			}
        		})
        	},
        	showPopUp(){
        		this.popup.visible = true;
        	},
        	showActionsheet(){
        		this.actionsheet.visible = true;
        	},
        	getFiterItems(){
        		let params = Object.assign({},this.$route.params,this.$route.query,{curpage:this.curpage})
        	},
        	getFiletValue(){
        		this.popup.visible = false;
        	}
        },
        components:{
        	pageHead,pageFooter,proList, InfiniteLoading
        }
    }
</script>