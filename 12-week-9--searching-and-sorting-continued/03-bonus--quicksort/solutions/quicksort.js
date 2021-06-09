function partition(array, low, high) {
  const pivot = array[high];  // choose rightmost element as pivot
  let pivotIndex = high;  // store index of pivot

  // iterate over the portion of the array that needs processing
  // use a while loop to control the index, we only want to increment it
  // if we encounter an element that's less than or equal to the pivot
  let i = low;

  while (i < pivotIndex) {
    if (array[i] <= pivot) {
      ++i;
      continue;
    }

    const beforePivot = pivotIndex - 1;
    // swap the higher valued element with the one just before the pivot
    // then swap the element just before the pivot with the pivot
    // then update the pivot index since it moved
    [array[i], array[beforePivot]] = [array[beforePivot], array[i]];
    [array[pivotIndex], array[beforePivot]] = [array[beforePivot], array[pivotIndex]];
    --pivotIndex;
  }

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

  // testing partition
  let pArray = [3, 2, 1, 4];
  console.log("Expecting: 3, [3, 2, 1, 4]");
  console.log(partition(pArray, 0, pArray.length - 1), pArray);

  console.log("");

  pArray = [3, 2, 1, 2];
  console.log("Expecting: 2, [1, 2, 2, 3]");
  console.log(partition(pArray, 0, pArray.length - 1), pArray);

  console.log("");

  pArray = [];
  console.log("Expecting: -1, []");
  console.log(partition(pArray, 0, pArray.length - 1), pArray);

  console.log("");

  pArray = [3];
  console.log("Expecting: 0, [3]");
  console.log(partition(pArray, 0, pArray.length - 1), pArray);

  console.log("");

  pArray = [1, 2];
  console.log("Expecting: 1, [1, 2]");
  console.log(partition(pArray, 0, pArray.length - 1), pArray);

  console.log("");

  pArray = [0, 4, 2];
  console.log("Expecting: 1, [0, 2, 4]");
  console.log(partition(pArray, 0, pArray.length - 1), pArray);

  console.log("");

  pArray = [2, -10, 7, 0, 1, 3];
  console.log("Expecting: 4, [2, -10, 1, 0, 3, 7]");
  console.log(partition(pArray, 0, pArray.length - 1), pArray);

  console.log("");

  pArray = [2, -10, 7, 0, 1, 3];
  console.log("Expecting: 2, [2, -10, 0, 7, 1, 3]");
  console.log(partition(pArray, 1, 3), pArray);

  console.log("");

  pArray = [2, 1, 0];
  console.log("Expecting: 0, [0, 1, 2]");
  console.log(partition(pArray, 0, 2), pArray);

  console.log("");
}

module.exports = quicksort;

// Please add your pseudocode to this file
// And a written explanation of your solution
