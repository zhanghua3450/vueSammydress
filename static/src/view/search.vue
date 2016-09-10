<style lang="less">
    .search-page{
        .search-bar{ height:50/32rem; box-shadow: 0 1px 1px #ddd; display: flex; position: fixed; left: 0; top: 0; width: 100%; z-index: 2; background-color: #fff; padding-right: 15/32rem;}
        .gotoBack{width:50/32rem; height: 50/32rem; font-size: 20/32rem; display: flex; justify-content:center; align-items:center;}
        .search-form{flex:1; height: 100%; line-height: 50/32rem;
			input{width: 100%; border: none; font-size: 18/32rem; line-height: 50/32rem; outline: none;}
        }
		::-webkit-input-placeholder {color: #ddd;}
		.search-tips{height: 100%; width: 100%; position: fixed; left: 0; top: 0; padding-top: 50/32rem;overflow-y: auto;}
        .popular-items{padding: 10/32rem; 
            h2{line-height: 40/32rem; font-size: 20/32rem; padding-bottom: 5/32rem;}
            li{display: inline-block; vertical-align: top; height: 40/32rem;}
            a{display: inline-block;  padding: 5/32rem 8/32rem; margin-right: 10/32rem; border: 1px solid #ddd; color: #333; border-radius: 3/32rem; text-decoration: none; font-size: 14/32rem;}
        }
    }
</style>

<template>
	<div class="search-page">
        <div class="search-bar">
            <div class="gotoBack" v-touch:tap="gotoBack">
                <i class="iconfont icon-guanbi1"></i>
            </div>
            <div class="search-form">
               <form action="">
                   <input type="search" placeholder="What are you looking for…" >
               </form>
            </div>
        </div>

        <div class="search-tips">
        	<div class="popular-items">
                <h2>Popular Search</h2>   
                <ul>
                    <li>
                        <a href="javascript:void(0);" data-text="Popular Search">power bank 2600mah gift</a>
                    </li>
                   <li>
                        <a href="javascript:void(0);" data-text="Popular Search">power bank</a>
                    </li><li>
                        <a href="javascript:void(0);" data-text="Popular Search">power bank 20mah gift</a>
                    </li><li>
                        <a href="javascript:void(0);" data-text="Popular Search">powerank 2600mah gift</a>
                    </li><li>
                        <a href="javascript:void(0);" data-text="Popular Search">power bank 2600mah gift</a>
                    </li><li>
                        <a href="javascript:void(0);" data-text="Popular Search">k 2600mah gift</a>
                    </li><li>
                        <a href="javascript:void(0);" data-text="Popular Search">power bank 2600mah gift</a>
                    </li><li>
                        <a href="javascript:void(0);" data-text="Popular Search">power bank 2600mah gift</a>
                    </li><li>
                        <a href="javascript:void(0);" data-text="Popular Search">power bank 2600mah gift</a>
                    </li><li>
                        <a href="javascript:void(0);" data-text="Popular Search">power bank 2600mah gift</a>
                    </li><li>
                        <a href="javascript:void(0);" data-text="Popular Search">power bank 2600mah gift</a>
                    </li><li>
                        <a href="javascript:void(0);" data-text="Popular Search">power bank 2600mah gift</a>
                    </li><li>
                        <a href="javascript:void(0);" data-text="Popular Search">power bank 2600mah gift</a>
                    </li><li>
                        <a href="javascript:void(0);" data-text="Popular Search">power bank 2600mah gift</a>
                    </li><li>
                        <a href="javascript:void(0);" data-text="Popular Search">power bank 2600mah gift</a>
                    </li><li>
                        <a href="javascript:void(0);" data-text="Popular Search">power bank 2600mah gift</a>
                    </li><li>
                        <a href="javascript:void(0);" data-text="Popular Search">power bank 2600mah gift</a>
                    </li><li>
                        <a href="javascript:void(0);" data-text="Popular Search">power bank 2600mah gift</a>
                    </li><li>
                        <a href="javascript:void(0);" data-text="Popular Search">power bank 2600mah gift</a>
                    </li><li>
                        <a href="javascript:void(0);" data-text="Popular Search">power bank 2600mah gift</a>
                    </li><li>
                        <a href="javascript:void(0);" data-text="Popular Search">power bank 2600mah gift</a>
                    </li><li>
                        <a href="javascript:void(0);" data-text="Popular Search">power bank 2600mah gift</a>
                    </li><li>
                        <a href="javascript:void(0);" data-text="Popular Search">power bank 2600mah gift</a>
                    </li><li>
                        <a href="javascript:void(0);" data-text="Popular Search">power bank 2600mah gift</a>
                    </li><li>
                        <a href="javascript:void(0);" data-text="Popular Search">power bank 2600mah gift</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
        methods:{
            gotoBack(){
                history.go(-1)
            }
        }
    }
</script>