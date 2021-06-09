function merge(arr1, arr2) {
  const result = [];

  while (arr1.length && arr2.length) {
    result.push((arr1[0] < arr2[0]) ? arr1.shift() : arr2.shift());
  }

  return [...result, ...arr1, ...arr2];
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2]");
  console.log(mergeSort([2, 1]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log(mergeSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: [-10, 0, 2, 2, 5, 10, 20]");
  console.log(mergeSort([10, -10, 0, 2, 20, 5, 2]));

  console.log("");

  console.log("Expecting: []");
  console.log(mergeSort([]));

  console.log("");

  console.log("Expecting: [3]");
  console.log(mergeSort([3]));
}

module.exports = mergeSort;

// Please add your pseudocode to this file
/****************************************************************************
 * return array if length < 2
 * 
 * initialize middle by rounding down length / 2
 * initialize left with first half of array (0 to middle, exclusive)
 * initialize right with second half (middle to end inclusive)
 * 
 * recursively divide left and store it in left
 * recursively divide right and store it in right
 * 
 * return the result of sorting and merging left and right
 * **************************************************************************/

// And a written explanation of your solution
/****************************************************************************
 * I started by thinking about when I'd want to return the input as is. If the
 * input is 1 element or less, I can just return it, so I made that my base case.
 * Next I divided the input into the left half and the right half. Since it needs
 * to be divided until each side of the list is as small as possible, I placed
 * my recursive calls there, so that the left and right would be divided until 
 * they hit the base case. If I think about a small input, such as a list with
 * only 2 numbers, it would recurse like so:
 * Initial call: mergeSort([2, 1])
 * left = mergeSort([2])
 * // Pause ^, and then return [2] up the stack, and store in left
 * right = mergeSort([1])
 * // Pause ^, and then return [1] up the stack, and store in right
 * 
 * My list still needs to be sorted and merged. So now I can call my helper 
 * function: merge(left, right) => merge([2], [1]) => [1, 2]
 * 
 * Since my helper function sorts and merges lists, I can return its result. 
 * If the list is larger than 2 elements, it'll return the sorted portion up 
 * the stack to the previous frame, where it'll then be merged with the other
 * portion of the list that was sorted and merged. It'll keep on doing this
 * until there are no frames left on the stack, resulting in it returning the
 * entire list as one sorted array. 
 * **************************************************************************/