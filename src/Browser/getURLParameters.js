import {isUndefined, isArray} from './../Type';
const getURLParameters = (url)=>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
      (pre, cur)=>{
        const pos = cur.indexOf('=');
        const key = cur.slice(0, pos);
        const value = cur.slice(pos+1);
        if (isUndefined(pre[key])) {
          pre[key] = value;
        } else {
          if (isArray(pre[key])) {
            pre[key].push(value);
          } else {
            pre[key] = [pre[key], value];
          }
        }
        return pre;
      },
      {});
export default getURLParameters;
