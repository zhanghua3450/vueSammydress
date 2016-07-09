<style lang="less">
	#pageFooter{ background: #f7f7f7;  padding:0 10/32rem 10/32rem; overflow: hidden;
		.directory-column{border-bottom: 1px solid #e3e3e3;
			&.on{
				.colum-icon{transform: rotate(45deg);}
				.colum-list{visibility: visible; position: static;transform: translateY(0);}
			}
		}
		.select-label{line-height: 40/32rem; position: relative; display: flex;  align-items:center; align-content:center;}
		h3{font-size: 14/32rem; flex:1; text-transform: uppercase;}
		.colum-icon{transition: all .5s;}
		.colum-list{visibility:hidden; position: absolute; top: 0; left: 0; width: 100%; padding-bottom: 10/32rem; transform: translateY(-10%);transition: all .5s;
			li{line-height: 30/32rem; padding-left: 20/32rem; font-size: 12/32rem;
				a{display: block; color: #333; text-decoration: none;}
			}

		}
	
		.footLink{ text-align: center; line-height:40/32rem; 
			a{color: #333; font-size: 14/32rem; text-decoration: none; padding: 0 15/32rem;
				
			}
		}
		.copyright{text-align: center; font-size: 12/32rem; color: #666;}
	}
</style>

<template>
	<footer id="pageFooter">
		<div class="directory-column" :class="[curIndex == 0 ? 'on' : '' ]" >
			<label class="select-label" v-touch:tap="toggole(0)">
				<h3>USD</h3>
				<i class="colum-icon iconfont icon-jiahao1"></i>
			</label>
			<ul class="colum-list">
				<li v-for="item in currencyItem" data-icon="{{item.icon}}" v-text="item.name"></li>
			</ul>
		</div>

		<div class="directory-column" v-for="item in footItems" :class="[curIndex == $index+1 ? 'on' : '' ]" >
			<label class="select-label" v-touch:tap="toggole($index+1)">
				<h3>{{item.title}}</h3>
				<i class="colum-icon iconfont icon-jiahao1"></i>
			</label>
			<ul class="colum-list">
				<li v-for="list in item.lists">
					<a :href="list.url" v-text="list.name"></a>
				</li>

			</ul>
		</div>
		
		<div class="footLink">
			<a v-link="'home'">HOME</a>
			
			<a href="#">FULL SITE</a>
		</div>
		<div class="copyright">
			<p>Copyright © 2011-2016 SammyDress.com. <br>All Rights Reserved.</p>
		</div>

	</footer>
</template>

<script >

	export default{
		data(){
			return {
				curIndex:'-1',

				currencyItem:[
					{icon:"$",name:'USD',orgp:'1'},
					{icon:"€",name:'EUR',orgp:'1.5'}
				],

				footItems:[
					{
						title:'about',
						lists:[
							{url:'#',name:'Contact Us'}
						]
					},
					{
						title:'Find Us On',
						lists:[
							{url:'#',name:'Facebook'},{url:'#',name:'Twitter'},{url:'#',name:'YouTube'},{url:'#',name:'Google+'},{url:'#',name:'vk'},{url:'#',name:'blogspot'},{url:'#',name:'instagram'}
						]
					}
				]
			}
		},
		computed:{
			
		},
		methods:{
			toggole(index){
				this.curIndex = this.curIndex == index ? '-1' : index;


			}
		},

	}
</script>
