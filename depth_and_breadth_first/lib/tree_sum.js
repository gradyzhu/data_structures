// function treeSum(root) {
//   if (!root) return 0;
//   let stack = [root];
//   let sum = 0;
//   while (stack.length) {
//     let curr = stack.pop();
//     sum += curr.val;
//     if (curr.left) stack.push(curr.left);
//     if (curr.right) stack.push(curr.right);
//   }
//   return sum;
// }

function treeSum(root) {
  if (!root) return 0;
  let left = treeSum(root.left);
  let right = treeSum(root.right);
  return root.val + left + right;
}

module.exports = {
    treeSum
};