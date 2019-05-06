// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


var sortedArrayToBST = function(nums, root=null) {
  if (!nums.length) return null;
  let idx = Math.floor(nums.length / 2);
  if (!root) root = new TreeNode(nums[idx]);
  
  let left = nums.slice(0, idx);
  let right = nums.slice(idx + 1);
  
  root.left = sortedArrayToBST(left, left[nums.length -1]);
  root.right = sortedArrayToBST(right, right[nums.length -1]);
  
  return root;
}; 