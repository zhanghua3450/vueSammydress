<style lang="less">

    .home-content{

        .tips{line-height: 40/32rem; text-align: center;font-size: 20/32rem; background: #de373e; color: #fff; margin-bottom: 10/32rem; }
        .swipe{height: auto; height: 270/64rem;  margin-bottom: 10/32rem;
            img{width: 100%;}
            .swipe-indicator{width: 8/32rem; height: 8/32rem; margin: 0 3/32rem;}
        }
        .catList{
            @cateListImgH:90/32rem;
            li{width: 160/32rem;  height: @cateListImgH; float: left; margin-bottom: 10/32rem; position: relative;
                &:nth-child(odd){padding-right: 5/32rem;
                    p{right: 5/32rem; }
                }
                &:nth-child(even){padding-left: 5/32rem;
                    p{right: 0;}
                }
                img{width: 155/32rem; height: @cateListImgH;}
                p{background:rgba(0,0,0,.5); color: #fff; line-height: 30/32rem; padding: 0 10/32rem; position: absolute;  top: 50%; transform: translateY(-50%); font-size:14/32rem; text-transform: uppercase;}
            }
        }
        .freeShip{ line-height: 40/32rem; background: rgb(110, 192, 3); text-align: center; width: 100%; margin-bottom:10/32rem;
            a{color: #fff; text-decoration: none; font-size: 20/32rem;}
        }
    }
    /* 必需 */
    .expand-transition {
      transition: all .3s ease;
      opacity: 1
    }

    /* .expand-enter 定义进入的开始状态 */
    /* .expand-leave 定义离开的结束状态 */
    .expand-enter, .expand-leave {
      opacity: 0
    }
</style>

<template>
   <div class="home-content" :class="{pt50rem:fix}"  transition="expand">
       <page-head :fixed="fix" :show-search="showSearch"></page-head>

       <div class="tips">NEW SIGN UPS GET 10% OFF</div>

       <swipe class="swipe"  :auto="4000">
             <swipe-item   v-for="banner in bannerList">
                 <a :href="banner.url"><img :src="banner.src"></a>
             </swipe-item>
       </swipe>

       <ul class="catList clearfix">
           <li v-for="cate in cateList">
               <a :href="cate.url"><img v-lazy="cate.src" ><p v-text="cate.name"></p></a>
           </li>
       </ul>

       <div class="freeShip">
           <a href="#"><i class="fa fa-plane"></i> Free Shipping Zone</a>
       </div>

       <page-footer></page-footer>

   </div>
</template>

<script>
    import lazyload from 'vue-lazyload';
    Vue.use(lazyload, {
      error: '/static/img/lazyload.gif',
      loading: '/static/img/lazyload.gif',
      try: 3
    })

    import pageHead from './header.vue';
    import { Swipe, SwipeItem } from 'vue-swipe';
    import pageFooter from './footer.vue';


    require('vue-swipe/dist/vue-swipe.css');


    export default{
        data(){
            return{
                fix:true,
                bannerList:[
                    {src:'http://uidesign.sammydress.com/S/images/promotion/Clearance/640x270ena.jpg', url:"#", width:640,height:270},
                    {src:'http://uidesign.sammydress.com/S/images/promotion/Beautiful/640x270.jpg',url:"#", width:640,height:270},
                    {src:'http://css.sammydress.com/imagecache/S/images/pageimg/special/dress/640.jpg',url:"#", width:640,height:270}
                ],
                cateList:[
                    {url:"#",name:"women",src:'http://uidesign.sammydress.com/S/images/banner/sm/women.jpg'},
                    {url:"#",name:"men",src:'http://uidesign.sammydress.com/S/images/banner/sm/men.jpg'},
                    {url:"#",name:"Shoes",src:'http://uidesign.sammydress.com/S/images/banner/sm/shoes.jpg'},
                    {url:"#",name:"bags",src:'http://uidesign.sammydress.com/S/images/banner/sm/bag.jpg'},

                    {url:"#",name:"hair",src:'http://uidesign.sammydress.com/S/images/banner/sm/hair.jpg'},
                    {url:"#",name:"JEWELRY",src:'http://uidesign.sammydress.com/S/images/banner/sm/jew.jpg'},
                    {url:"#",name:"KIDS",src:'http://uidesign.sammydress.com/S/images/banner/sm/kids.jpg'},
                    {url:"#",name:"HOME&GARDEN",src:'http://uidesign.sammydress.com/S/images/banner/sm/home.jpg'}
                ]
            }
        },
        components:{pageHead,Swipe,SwipeItem,pageFooter}
    }
</script>
