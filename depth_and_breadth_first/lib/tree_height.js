function treeHeight(root) {
  if (!root) return -1;
  let left = treeHeight(root.left);
  let right = treeHeight(root.right);
  let max = left > right ? left : right;
  return 1 + max;
}


module.exports = {
    treeHeight
};