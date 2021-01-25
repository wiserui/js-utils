/* eslint-disable no-invalid-this */
const throttle = (func, wait, options)=>{
  let {immediate=false} = options;
  let timer = null;
  return function(...args) {
    const context = this;
    if (immediate) {
      func.apply(context, args);
      immediate = false;
      return;
    }
    if (timer) {
      return;
    }
    timer = setTimeout(()=>{
      timer = null;
      func.apply(context, args);
    }, wait);
  };
};
export default throttle
;
