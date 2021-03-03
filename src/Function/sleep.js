const sleep = (ms) => {
  return new Promise((res)=>{
    setTimeout(res, ms);
  });
};
export default sleep;
