import {isArray} from './../Type';
const flatten = (arr, deep=1)=>
  deep > 0 &&
   arr.reduce(
       (pre, cur)=>pre.concat(
          isArray(cur)?
          flatten(cur, deep-1):
          cur,
       ), [],
   ) ||
   arr;
export default flatten;
