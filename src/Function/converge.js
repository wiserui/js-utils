const converge = (converger, fns)=>
  (...args)=>converger(...fns.map((fn)=>fn(...args)));
export default converge;
