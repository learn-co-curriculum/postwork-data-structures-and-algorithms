function rotateArray(arr, k) {
  const rotations = k % arr.length;
  const removed = arr.splice(arr.length - rotations, rotations);

  return removed.concat(arr);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log(rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log(rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log(rotateArray([1, 2, 3], 3));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log(rotateArray([1, 2, 3], 0));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log(rotateArray([1, 2, 3], 5));

  console.log("");

  console.log("Expecting: []");
  console.log(rotateArray([], 7));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
/***********************************************************************************
 * initialize rotations to store the remainder of k / array length
 * remove rotations number elements from end of array
 * return removed elements + remaining elements
 * *********************************************************************************/

// And a written explanation of your solution
/***********************************************************************************
 * We can solve this problem by figuring out how many elements to remove from the end
 * of the array, and then adding those removed elements to the front of the array. To
 * do this, we need to account for when k is the same or larger than the array's length.
 * This is ascertained by getting the remainder of k / array length.
 * **********************************************************************************/