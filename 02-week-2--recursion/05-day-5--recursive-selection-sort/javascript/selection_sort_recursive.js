function selectionSortRecursive(arr) {
if (arr.length < 1) {
  return []
}

  const smallestNum = Math.min(...arr)
  const index = arr.indexOf(smallestNum)
  arr.splice(index, 1)
  const result = selectionSortRecursive(arr)
  result.unshift(smallestNum)
  return result

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
