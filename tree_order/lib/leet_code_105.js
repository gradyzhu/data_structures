// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


var buildTree = function(preorder, inorder) {
  if (preorder.length == 0) return null;
  
  let root = new TreeNode(preorder[0]);
  let rootidx = inorder.indexOf(preorder[0]);
  
  let inorderLeft = inorder.slice(0, rootidx);
  let inorderRight = inorder.slice(rootidx + 1);
  
  let preorderLeft = preorder.filter(el => inorderLeft.includes(el));
  let preorderRight = preorder.filter(el => inorderRight.includes(el));
      
  root.left = buildTree(preorderLeft, inorderLeft); 
  root.right = buildTree(preorderRight, inorderRight);
  
  return root;
};