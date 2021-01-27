const randInt = (min, max)=>{
  min = Math.ceil(min);
  max = Math.floor(max);
  return min + (Math.random() * (max - min + 1))|0;
};

export default randInt;
