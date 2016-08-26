
const mixin_bizhong={
    data(){
        return {
            bzicon:'$',
            huilv:'1'
        }
    },
    created() {
        var store = window.localStorage;
        var sbzicon = store.getItem('bzicon');
        var shuilv = store.getItem('huilv');
        
        if(sbzicon && shuilv){
            this.$set('bzicon',sbzicon);
            this.$set('huilv',shuilv);
            
        }else{
            store.setItem('bzicon','$');
            store.setItem('huilv','1');
        }
        
    },
    methods:{
        changeBizhong:function(icon,huilv){
            this.huilv = huilv;
            this.bzicon = icon;
            store.setItem('bzicon',icon);
            store.setItem('huilv',huilv);
        }
    }
}

exports.mixin_bizhong = mixin_bizhong; 