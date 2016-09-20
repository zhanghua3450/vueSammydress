
export const changeBizhong = function ({ dispatch},e) {
  let bizhong = e.target.getAttribute('data-bzname');

  dispatch('CHANGE_BIZHONG', bizhong)
};

export const changeFixHead  = function({dispatch,state}){
	dispatch('CHANGE_FIXHEAD',!state.fixHead)
}