
export const changeBizhong = function ({ dispatch},e) {
  let bizhong = e.target.getAttribute('data-bzname');

  dispatch('CHANGE_BIZHONG', bizhong)
}