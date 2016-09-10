<style lang="less">
	.menu-list{font-size: 16/32rem; font-weight: bold;
		a{display: block; color: #666; text-decoration: none; flex:1}
		
		li{line-height: 50/32rem;
			&.on{
				>.menu-list{display: block;}
				>.item>.iconfont{transform:  rotate(90deg);}
			}
			li{line-height: 40/32rem;}
		}
		.menu-list{font-size: 14/32rem; font-weight: normal; border-bottom: none; padding-left: 15/32rem; display: none;}
		.item{display: flex;}
		.iconfont{transition: all .5s;}
		
		
	}

</style>

<template>
	<ul class="menu-list" >
		<li v-for="list in lists" :class="{'on':(curIndex == $index)}">
			<div class="item"><a>{{list.name}}</a><i  v-touch:tap="toggle($index,list.children)" class="iconfont icon-xiangyou1" v-if="list.children.length > 0" ></i></div>
			<menu-list v-if="list.children.length > 0" :lists="list.children" ></menu-list>
		</li>
	</ul>
</template>
<script>

export default {
	props:['lists'],
	data:function(){
		return {
			curIndex : -1
		}
	},
	name:'menu-list',
	methods:{
		toggle(index,isForlder){
			
			this.curIndex = this.curIndex == index ? -1 : index;
		}
	}
}
</script>