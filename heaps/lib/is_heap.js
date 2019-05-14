// you may assume that the array will always have a null element at the 0-th index

// super slow solution

// function isMaxHeap(array, idx=1) {
//   let current = array[idx];
//   let leftChild = array[idx*2];
//   let rightChild = array[idx*2+1];

//   if (leftChild === undefined) leftChild = -Infinity;
//   if (rightChild === undefined) rightChild = -Infinity;

//   if (current < leftChild || current < rightChild) {
//     return false;
//   }

//   while (idx < array.length) {
//     idx++;
//     if (isMaxHeap(array, idx) == false) return false;
//   }

//   return true;
// }

function isMaxHeap(array, idx=1) {
  if (array[idx] === undefined) return true;
  let current = array[idx];
  let leftChild = array[idx*2];
  let rightChild = array[idx*2+1];

  if (leftChild === undefined) leftChild = -Infinity;
  if (rightChild === undefined) rightChild = -Infinity;

  return (current > leftChild && current > rightChild && isMaxHeap(array, idx * 2) && isMaxHeap(array, idx * 2 + 1));
}

module.exports = {
    isMaxHeap
};