import Vuex from 'vuex';

Vue.use(Vuex);

function gotCurency(){
    let bizhong = 'USD';
    let storage = window.localStorage;
    if(storage){
        bizhong = storage.getItem('bizhong');
        if(!bizhong){
            storage.setItem('bizhong','USD');
            bizhong = 'USD'
        }
    }
    var curency = {
        icon:gotIcon(bizhong),
        huilv:gotHuiv(bizhong)
    }
   
    return curency;
}

function gotIcon(bizhong){
        var my_array_sign = new Array();
        my_array_sign['USD'] = '$';
        my_array_sign['EUR'] = '€';
        my_array_sign['GBP'] = '£';
        my_array_sign['AUD'] = 'AU$';
        my_array_sign['CAD'] = 'CA$';
        my_array_sign['CHF'] = 'CH₣';
        my_array_sign['HKD'] = 'HK$';
        my_array_sign['CNY'] = '¥';
        my_array_sign['NZD'] = 'NZ$';
        my_array_sign['JPY'] = '円';
        my_array_sign['RUB'] = 'руб';
        my_array_sign['BRL'] = 'R$';
        my_array_sign['CLP'] = 'CL$';
        my_array_sign['NOK'] = 'Kr';
        my_array_sign['DKK'] = 'DKKr';
        my_array_sign['SEK'] = 'SEKr';
        my_array_sign['KRW'] = '₩';
        my_array_sign['ILS'] = '₪';

        return my_array_sign[bizhong];
}
function gotHuiv(bizhong){
    var my_array = new Array();
        my_array['USD'] = 1
        my_array['EUR'] = 0.91133164;
        my_array['GBP'] = 0.77916616;
        my_array['AUD'] = 1.3508244;
        my_array['CAD'] = 1.3300287;
        my_array['CHF'] = 0.99252345;
        my_array['HKD'] = 7.98662;
        my_array['CNY'] = 5.9;
        my_array['NZD'] = 1.409246;
        my_array['JPY'] = 103.17613;
        my_array['RUB'] = 66.704139;
        my_array['BRL'] = 3.3338834;
        my_array['CLP'] = 692.87482;
        my_array['NOK'] = 8.4249674;
        my_array['DKK'] = 6.7830238;
        my_array['SEK'] = 8.6151157;
        my_array['KRW'] = 1154.1047;
        my_array['ILS'] = 3.8878586;
        
        return my_array[bizhong];
}
// 创建一个对象来保存应用启动时的初始状态
const state = {
     // TODO: 放置初始状态
     icon:gotCurency()['icon'],
     huilv:gotCurency()['huilv'],

     fixHead:true
}
// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
     // TODO: 放置我们的状态变更函数
     CHANGE_BIZHONG (state,bizhong){
         state.icon = gotIcon(bizhong);
         state.huilv = gotHuiv(bizhong);
         window.localStorage.setItem('bizhong',bizhong);
     },

     CHANGE_FIXHEAD(state,fix){
        state.fixHead = fix
     }
     
}

export default new Vuex.Store({
    state,
    mutations
})