<template lang="html">
    <div class="loade-content">

        <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
    </div>
</template>

<script>
    import pageHead from './header.vue';
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
    export default{
        data(){
            return {
                fix:true
            }
        },
        components:{
            PulseLoader,pageHead
        },
        ready(){
            setTimeout(() => {
                this.$route.router.go({ name: 'home'});
            },2000);

        }
    }
</script>

<style>
    .loade-content{position:fixed; width: 100%; height: 100%;}
    .v-spinner{position: absolute; left:50%; top:50%; transform:translate(-50%,-50%);}
</style>
