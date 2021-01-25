/* eslint-disable no-invalid-this */
const debounce = (func, wait, options={})=> {
  let {immediate=false} = options;
  let timer = null;
  return function(...args) {
    const context = this;
    if (immediate) {
      func.apply(context, args);
      immediate = false;
      return;
    }
    timer && clearTimeout(timer);
    timer = setTimeout(function() {
      func.apply(context, args);
    }, wait);
  };
};
export default debounce;
