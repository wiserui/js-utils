const isPlainObject = (val)=>{
  return Object.prototype.toString.call(val)==='[object Object]';
};
export default isPlainObject;
