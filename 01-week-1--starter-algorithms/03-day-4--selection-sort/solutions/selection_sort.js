function selectionSort(arr) {
  const sorted = [];

  while (arr.length > 0) {
    const min = Math.min(...arr);
    const idx = arr.indexOf(min);

    sorted.push(min);
    arr.splice(idx, 1);
  }

  return sorted;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log(selectionSort([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: []");
  console.log(selectionSort([]));

  console.log("");

  console.log("Expecting: [-1]");
  console.log(selectionSort([-1]));

  console.log("");

  console.log("Expecting: [-10, 2, 2, 3, 7]");
  console.log(selectionSort([3, 2, 2, 7, -10]));

  console.log("");

  console.log("Expecting: [100, 200]");
  console.log(selectionSort([100, 200]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    selectionSort([2, 1]);
    selectionSort(longInput);
  }

  const avgTime = (Date.now() - startTime) / 2000;

  console.log(avgTime);
}

module.exports = selectionSort;

// Please add your pseudocode to this file
/***************************************************************************
 * initialize an empty Array called sorted
 * 
 * loop array length times:
 *    store minimum value in array in min
 *    remove minimum value from input array
 *    push min onto sorted
 * 
 * return sorted
****************************************************************************/

// And a written explanation of your solution
/****************************************************************************
 * The selection sort algorithm states that we need to find the minimum value 
 * of the input array and place it in another array until all of the values have
 * been placed. This means I can find the minimum in the input, remove it from the
 * input, and push it onto another array in order to sort the values. The first time
 * I find the minimum in the input, that's the lowest value, the second time I find
 * the minimum, that's the second lowest value, and so on. Once the input array is  
 * empty, the sorting is complete.
 * **************************************************************************/