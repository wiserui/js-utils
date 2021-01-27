/* eslint-disable no-invalid-this */
const curry = (func)=>{
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, [...args, ...args2]);
      };
    }
  };
};
export default curry;
