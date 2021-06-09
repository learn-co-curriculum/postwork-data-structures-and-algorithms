function bubbleSort(arr) {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    arr.forEach((num, idx) => {
      if (idx === arr.length - 1) {
        return;
      }

      if (num > arr[idx + 1]) {
        [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
        sorted = false;
      }
    });
  }

  return arr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log(bubbleSort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log(bubbleSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: []");
  console.log(bubbleSort([]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log(bubbleSort([2, 3, 1]));

  console.log("");

  console.log("Expecting: [1]");
  console.log(bubbleSort([1]));

  console.log("");

  console.log("Expecting: [1, 3]");
  console.log(bubbleSort([3, 1]));

  console.log("");

  console.log("Expecting: [-2, 0, 0, 1, 5, 6, 6, 7, 8, 8]");
  console.log(bubbleSort([6, -2, 0, 8, 7, 8, 6, 0, 5, 1]));
}

module.exports = bubbleSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
// Please add your pseudocode to this file
/************************************************************************************/
// initialize boolean sorted to false
//
// while sorted is false:
//   sorted = true
//   iterate over array with index tracking:
//     if current element is larger than next element:
//       swap those elements in place
//       sorted = false
//
// return input array
/************************************************************************************/

// And a written explanation of your solution
/************************************************************************************/
// Since we need to iterate over the array over and over until it's sorted, we need
// to track if it's sorted, so we initialize a Boolean to false to do exactly that.
// Next we need to use a while loop (or something similar) that runs until the Array
// is sorted. This allows us to iterate over the Array as many times as needed.
// Since we want to set sorted to false only if a swap happens, we'll set it to true
// before iterating over the Array. When we iterate over the Array, we always go
// over the whole thing. We compare the value we're iterating over to the next one, 
// and if the first one is more than the next one, we swap them. We also set sorted
// to false because of the swap. We'll eventually get to a point where there are no
// swaps and at that point, sorted will remain true and when the iteration ends,
// we'll exit the outer loop and return the Array.
// Big O for time complexity is O(n^2) quadratic time because of the loop within a loop. 
// In the worst case we'll end up going over the whole Array roughly once per element.
/************************************************************************************/