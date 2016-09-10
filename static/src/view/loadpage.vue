<template>
    <div class="loade-content">
        <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
    </div>
</template>

<script>
    //import pageHead from '../components/header.vue';
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
    export default{
        data(){
            return {
                fix:true
            }
        },
        components:{
            PulseLoader
        },
        ready(){
            setTimeout(() => { 
                this.$route.router.go({ name: 'home'});
            },2000);

        }
    }
</script>

<style>
    .loade-content{ position: fixed; left: 0; top: 0; width: 100%; height: 100%; display: flex; align-items:center; justify-content:center;}
</style>
