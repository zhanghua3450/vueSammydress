export function getCurrecy(state){
    let icon = state.icon;
    let huilv = state.huilv;
    let currency = {
        icon : icon,
        huilv : huilv
    }
  
    return currency
}

export function getFixHead(state){
	return state.fixHead
}