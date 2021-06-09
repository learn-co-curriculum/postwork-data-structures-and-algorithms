function partition(array, low, high) {
  // type your code in here
}

function quicksort(array, low = 0, high = array.length - 1) {
  // type your code here
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log(quicksort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 2, 3, 4]");
  console.log(quicksort([1, 2, 2, 3, 4]));
}

module.exports = quicksort;

// Please add your pseudocode to this file
// And a written explanation of your solution
