import {isString} from './../Type';
const strToUnicode =(val)=>{
  const ret = [];
  if (isString(val)) {
    for (const char of val) {
      ret.push('\\u'+char.charCodeAt().toString(16).padStart(4, '0'));
    }
    return ret.join('');
  }
};
export default strToUnicode;
