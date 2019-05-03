function depthFirstSearch(root, targetVal) {
  if (!root) return null;

  let stack = [ root ];

  while (stack.length) {
    let curr = stack.pop();
    if (curr.val == targetVal) return curr;
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  
  return null;
}


module.exports = {
    depthFirstSearch
};