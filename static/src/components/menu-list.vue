<style lang="less">
	.menu-list{
		>item{}
	}
</style>

<template>
	<ul class="menu-list">
		
		<li v-for="list in lists">
			<div>{{list.name}}</div>
		</li>
	</ul>
</template>
<script>

export default {
	props:['lists']


}
</script>