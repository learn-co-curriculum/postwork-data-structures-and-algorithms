function recursiveSearch(arr, target) {
  if (arr.length === 0) {
    return false;
  }

  if (arr[0] === target) {
    return true;
  }

  return recursiveSearch(arr.slice(1), target);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log(recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log(recursiveSearch([3, 2, 1], 4));

  console.log("");

  console.log("Expecting: false");
  console.log(recursiveSearch([], 7));

  console.log("");

  console.log("Expecting: true");
  console.log(recursiveSearch([7], 7));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
/*****************************************************************************************
* return false if array is empty
* return true if first element of array == target

* return recursive_search(input array - first element, target)
******************************************************************************************/

// And a written explanation of your solution
/*****************************************************************************************
* There are two bases cases for this problem: if we find the target, we should return true
* and stop recursing, and if we go through all of the elements, we should stop recursing
* and return false. This means we need to operate on a subset of the array every time we
* recurse. To do this, we can pass the array minus the first element to the recursive call, 
* and then check if the 0th element in the array is the target. The array will shrink by
* one element on every invocation.
******************************************************************************************/
