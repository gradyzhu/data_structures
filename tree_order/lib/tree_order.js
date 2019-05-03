function inOrderArray(root) {
  let res = [];
  if (!root) return res;

  if (root.left) {
    let left = inOrderArray(root.left);
    res = res.concat(left);
  }

  res.push(root.val);

  if (root.right) {
    let right = inOrderArray(root.right);
    res = res.concat(right);
  }

  return res;
}

function postOrderArray(root) {
  let res = [];
  if (!root) return res;

  if (root.left) {
    let left = postOrderArray(root.left);
    res = res.concat(left);
  }

  if (root.right) {
    let right = postOrderArray(root.right);
    res = res.concat(right);
  }

  res.push(root.val);
  
  return res;
}


module.exports = {
    inOrderArray,
    postOrderArray
};