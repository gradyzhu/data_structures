// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/

const findHeight = root => {
  if (!root) return -1;
  let left = findHeight(root.left);
  let right = findHeight(root.right);
  let max = left > right ? left : right;
  return 1 + max;
};

var isBalanced = function(root) {
  if (!root) return true;
  let balanced = Math.abs(findHeight(root.left) - findHeight(root.right)) <= 1;
  return balanced && isBalanced(root.left) && isBalanced(root.right);
};