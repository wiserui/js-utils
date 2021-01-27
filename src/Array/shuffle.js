import {randInt} from './../Number';

const shuffle = (arr) =>{
  const _exch = (a, b)=>{
    [arr[a], arr[b]] = [arr[b], arr[a]];
  };
  const len = arr.length;
  for (let i = 0; i<len-1; ++i) {
    const rand = randInt(i, len-1);
    _exch(i, rand);
  }
};
export default shuffle;
