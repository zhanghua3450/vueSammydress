<style lang="less">
	.menu-side{
		.page-cover{position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 101;}
		
		.menuBox{position: fixed; left: -250/32rem; top: 0; height: 100%; width: 250/32rem; padding: 5/32rem;background: #fff; z-index: 101; transition: all .5s ease; 
			&.show{transform: translateX(250/32rem);}
		}
	}
	
</style>
<template>
	<div class="menu-side" >
		<div class="page-cover" v-if="opened" v-touch:tap="closeMenu"></div>
		<div class="menuBox" :class="{'show':opened}">
			<slot></slot>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props:['opened'],
		methods:{
			closeMenu(){
				if(this.opened){
					$('body').removeClass('scroll-hide');
					setTimeout(()=>{
						this.opened = !this.opened;
					},100)
				}
				
			}
		}
	}
</script>