import axios from 'axios';
const multiRequest = (urls, maxNum)=>{
  const len = urls.length;
  const result = new Array(maxNum).fill(false);
  let count = 0;
  return new Promise((resolve)=>{
    const next = ()=>{
      const current = count++;
      if (current >= len) {
        !result.includes(false) && resolve(result);
        return;
      }
      const url = urls[current];
      axios(url).then((res)=>{
        result[current] = res;
        current < len && next();
      }).catch((err)=>{
        result[current] = err;
        current < len && next();
      });
    };
    while (count < maxNum) {
      next();
    }
  });
};
export default multiRequest;
