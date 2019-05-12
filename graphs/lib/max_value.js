function maxValue(node, visited=new Set()) {
  let max = 0;
  let queue = [ node ];

  while (queue.length) {
    let curr = queue.shift();
    if (visited.has(curr)) continue;
    visited.add(curr);

    if (curr.val > max) max = curr.val;
    queue.push(...curr.neighbors);
  }

  return max;
}

module.exports = {
    maxValue
};