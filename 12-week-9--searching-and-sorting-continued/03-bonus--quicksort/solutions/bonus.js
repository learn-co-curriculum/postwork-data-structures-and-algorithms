// // BONUS: REDUCE NUMBER OF SWAPS
// function partition(array, low, high) {
//   const pivot = array[high];  // choose rightmost element as pivot
//   let pivotIndex = high;  // store index of pivot
//   let i = low;

//   while (i < pivotIndex) {
//     if (array[i] <= pivot) {
//       ++i;
//       continue;
//     }

//     const beforePivot = pivotIndex - 1;
//     [array[i], array[beforePivot]] = [array[beforePivot], array[i]];
//     --pivotIndex;
//   }
//   // SWAP ONCE AT END OF LOOP
//   [array[pivotIndex], array[high]] = [array[high], array[pivotIndex]];

//   return pivotIndex;
// }

// SUPER BONUS: USE MIDDLE AS PIVOT
function partition(array, low, high) {
	const middle = Math.floor((high + low ) / 2);
  const pivot = array[middle];  // choose middle element as pivot
  [array[middle], array[high]] = [array[high], array[middle]]; // swap middle to end
  
  let pivotIndex = high;  // store index of pivot
  let i = low;

  while (i < pivotIndex) {
    if (array[i] <= pivot) {
      ++i;
      continue;
    }

    const beforePivot = pivotIndex - 1;
    [array[i], array[beforePivot]] = [array[beforePivot], array[i]];
    --pivotIndex;
  }
  // SWAP ONCE AT END OF LOOP
  [array[pivotIndex], array[high]] = [array[high], array[pivotIndex]];

  return pivotIndex;
}

function quicksort(array, low = 0, high = array.length - 1) {
  if (low >= high) {
    return array;
  }

  const pivotIndex = partition(array, low, high);
  quicksort(array, low, pivotIndex - 1);
  quicksort(array, pivotIndex + 1, high);

  return array;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log(quicksort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 2, 3, 4]");
  console.log(quicksort([1, 2, 2, 3, 4]));

  console.log("");

  console.log("Expecting: []");
  console.log(quicksort([]));

  console.log("");

  console.log("Expecting: [1]");
  console.log(quicksort([1]));

  console.log("");

  console.log("Expecting: [2, 4]");
  console.log(quicksort([2, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 3, 4, 5, 6, 7]");
  console.log(quicksort([1, 2, 3, 4, 5, 6, 7]));

  console.log("");

  console.log("Expecting: [7, 6, 5, 4, 3, 2, 1]");
  console.log(quicksort([1, 2, 3, 4, 5, 6, 7]));

  console.log("");

  console.log("Expecting: [4, 4, 4, 4]");
  console.log(quicksort([4, 4, 4, 4]));

  console.log("");

  console.log("Expecting: [-10, -10, 0, 1, 2, 3, 4, 8, 9, 10, 87]");
  console.log(quicksort([-10, 8, 4, 3, 9, 10, -10, 87, 2, 0, 1]));

  console.log("");
}

module.exports = quicksort;

// Please add your pseudocode to this file
// And a written explanation of your solution
