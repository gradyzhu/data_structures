function numRegions(graph) {
  let nums = 0;
  let keys = Object.keys(graph);
  if (!keys.length) return 0;
  let visited = new Set();
  // console.log(queue);

  while (keys.length) {
    let key = queue.shift();
    if (visited.has(key)) continue;
    visited.add(key);
    nums++;
    queue.push(...graph[key]);
  }
  return nums;
}

module.exports = {
    numRegions
};