const once = (fn)=>{
  let isCall = false;
  return function(...args) {
    if (isCall) return;
    isCall = true;
    // eslint-disable-next-line no-invalid-this
    return fn.apply(this, args);
  };
};
export default once;
