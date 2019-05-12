function breadthFirstSearch(startingNode, targetVal) {
  let queue = [ startingNode ];
  let visited = new Set();

  while (queue.length) {
    let curr = queue.shift();
    if (visited.has(curr)) continue;
    visited.add(curr);

    if (curr.val == targetVal) return curr;
    queue.push(...curr.neighbors);
    // curr.neighbors.forEach(neighbor => {
    //   queue.push(neighbor);
    // });
  }

  return null;
}

module.exports = {
    breadthFirstSearch
};