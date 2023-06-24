function selectionSort(arr) {
  newArr = []

  while (arr.length !== 0) {
    minny = Math.min(...arr)
    index = arr.indexOf(minny)

    newArr.push(minny)
    arr.splice(index, 1)
    console.log(newArr)

  }

  }




if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file

//create new array to push things into
//create a while loop that goes until arr is 0
//find smallest value in array
//find index of smallest value
//push min value to new array
//remove that value using slice
//some elm = Math.min, somewhere?

// And a written explanation of your solution
