function* chunkify(itr, size) {
  let chunk = [];
  for (const key of itr) {
    chunk.push(key);
    if (chunk.length >= size) {
      yield chunk;
      chunk = [];
    }
  }
  if (chunk.length>0) {
    yield chunk;
  }
}
export default chunkify;
