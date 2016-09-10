Vue.filter('bizhong',function(value,icon,huilv){
	let newV = (value * huilv).toFixed(2);
	return icon + newV;
})