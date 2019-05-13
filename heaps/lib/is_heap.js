// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
  let current = array[idx];
  let leftChild = array[idx*2];
  let rightChild = array[idx*2+1];

  if (leftChild === undefined) leftChild = -Infinity;
  if (rightChild === undefined) rightChild = -Infinity;

  if (current < leftChild || current < rightChild) {
    return false;
  }

  while (idx < array.length) {
    idx++;
    if (isMaxHeap(array, idx) == false) return false;
  }

  return true;
}


module.exports = {
    isMaxHeap
};