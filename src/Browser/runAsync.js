const runAsync = (func)=>{
  const url = URL.createObjectURL(new Blob([`postMessage((${func})())`], {
    type: 'application/javascript; charset=utf-8',
  }));
  const worker = new Worker(url);
  return new Promise((res, rej)=>{
    worker.onmessage = ({data})=>{
      res(data);
      worker.terminate();
    };
    worker.onerror = (err)=>{
      rej(err);
      worker.terminate();
    };
  });
};
export default runAsync;
