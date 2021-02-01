const arrayToTree = (arr, {
  parentId = 'parentId',
  childrenName = 'children',
  id = 'id',
  root = '0',
})=>{
  return arr.filter((item)=>item[parentId]===root).map((item)=>({
    ...item,
    [childrenName]: arrayToTree(arr, {
      parentId,
      childrenName,
      id,
      root: item[id],
    }),
  }));
};
export default arrayToTree;
