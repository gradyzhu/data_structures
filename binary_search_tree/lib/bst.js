class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
  constructor() {
    this.root = null;
  }

  insert(value, root = this.root) {
    let node = new TreeNode(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    if (node.val < root.val) {
      if (!root.left) {
        root.left = node;
      } else {
        this.insert(value, root.left);
      }
    } else {
      if (!root.right) {
        root.right = node;
      } else {
        this.insert(value, root.right);
      }
    }
  }

  searchRecur(value, root = this.root) {
    if (!root) return false;
    if (root.val === value) return true;
    if (value < root.val) {
      if (root.left) return this.searchRecur(value, root.left);
    } else {
      if (root.right) return this.searchRecur(value, root.right);
    }
    return false;
  }

  searchIter(value, root = this.root) {
    if (!root) return false;
    let queue = [ root ];

    while (queue.length) {
      let node = queue.shift();
      if (node.val === value) return true;
      if (value < node.val) {
        if (node.left) queue.push(node.left);
      } else {
        if (node.right) queue.push(node.right);
      }
    }
    return false;
  }


}

module.exports = {
    TreeNode,
    BST
};