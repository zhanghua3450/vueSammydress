<template>
	<div class="listPage" :class="{pt50rem:fix}"  transition="expand">
		<page-head :fixed="fix" :show-search="showSearch"></page-head>
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