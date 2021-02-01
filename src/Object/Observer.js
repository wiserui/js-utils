import {isArray, isUndefined} from './../Type';
const Observer = (()=>{
  const __message = {};
  return {
    regist(type, fn) {
      if (isUndefined(__message[type])) __message[type] = [fn];
      else __message[type].push(fn);
    },
    fire(type, args={}) {
      if (isUndefined(__message[type])) return;
      const event = {
        type,
        args,
      };
      let i = 0;
      const len = __message[type].length;
      for (;i<len; ++i) {
        __message[type][i].call(this, event);
      }
    },
    remove(type, fn) {
      if (isArray(__message[type])) {
        let i = __message[type].length - 1;
        for (;i>=0; --i) {
          __message[type][i] === fn && __message[type].splice(i, 1);
        }
      }
    },
  };
})();
export default Observer;
