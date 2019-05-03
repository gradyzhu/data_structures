function breadthFirstArray(root) {
  let queue = [ root ];
  let res = [];

  while (queue.length) {
    let curr = queue.shift();
    res.push(curr.val);
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  
  return res;
}

module.exports = {
    breadthFirstArray
};