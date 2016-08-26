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
				<li v-for="item in currencyItem"  v-touch:tap="changeBizhong" data-bzname="{{item.name}}" data-icon="{{item.icon}}" v-text="item.name"></li>
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
		
		methods:{
			toggole(index){
				this.curIndex = this.curIndex == index ? '-1' : index;
			},
			changeBizhong(event){
				let  icon = $(event.target).data('icon');
				let  bzname = $(event.target).data('bzname')
				let  store = window.localStorage;
				let my_array = new Array();
					my_array['USD'] = 1
					my_array['RUB'] = 65.41568;
					my_array['EUR'] = 0.89386717;
					my_array['GBP'] = 0.76598299;
					my_array['AUD'] = 1.3268067;
					my_array['CHF'] = 0.97311783;
					my_array['HKD'] = 7.8313481;
					my_array['CNY'] = 5.97;
					my_array['NZD'] = 1.3845787;
					my_array['CAD'] = 1.3048392;
					my_array['JPY'] = 101.26765;
					my_array['BRL'] = 3.2691377;
					my_array['CLP'] = 679.22197;
					my_array['NOK'] = 8.2845856;
					my_array['DKK'] = 6.6529508;
					my_array['SEK'] = 8.4615578;
					my_array['ILS'] = 3.8138711;
					my_array['THB'] = 34.980037;
					my_array['IDR'] = 13386.6208;
					my_array['MYR'] = 4.0787234;
					my_array['SGD'] = 1.3654695;
					my_array['PHP'] = 46.95793;
					my_array['TWD'] = 32.076388;
				store.setItem('bzicon',icon);
            	store.setItem('huilv',my_array[bzname]);
			}
		},

	}
</script>
