function selectionSortRecursive(arr) {
  if (arr.length === 0) {
    return [];
  }

  const min = Math.min(...arr);
  const idx = arr.indexOf(min);
  arr.splice(idx, 1);

  const result = selectionSortRecursive(arr);
  result.unshift(min);
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log(selectionSortRecursive([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [5]");
  console.log(selectionSortRecursive([5]));

  console.log("");

  console.log("Expecting: [-1, 2, 2, 3, 3, 5]");
  console.log(selectionSortRecursive([3, 2, -1, 3, 5, 2]));

  console.log("");

  console.log("Expecting: [3, 5]");
  console.log(selectionSortRecursive([5, 3]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
/*****************************************************************************************
* return empty array if array is empty
*
* find smallest value in array and store it in min
* find index of smallest value and store it in idx
* remove the smallest value from the array
*
* recurse through the array and store the result in result
* place the min from each frame at the front of the array
* return result
*****************************************************************************************/

// And a written explanation of your solution
/*****************************************************************************************
* Once again, it's easier to start with the base case: if the array is empty, return
* an empty array. We can then add items to this returned empty array in the previous
* frames. To figure out what to add, we need to find the minimum value in the array
* and its index. Next, we remove that value from the array and pass the array to the
* recursive call. This means that as we go deeper and deeper into the stack, the
* array gets smaller, until it's empty. Since frames are completed in last in first out
* order, we need to add the minimum value from each frame to the front of the result
* array. For example, if the array is [2, 1], the minimum in the first frame is 1, and
* the recusrive call is made with the argument [2]. In this frame the minimum is 2, so
* the recursive call is now made with the argument []. This hits the base case, which
* returns []. result is now an empty array in the previous frame. On the next line, the
* minimum, which is 2, gets unshifted on. [2] is returned up the stack, and stored in
* result. Here, the minimum is 1, which gets unshifted on, resulting in [1, 2].
*****************************************************************************************/
