function findFirstDuplicate(arr) {
  const uniques = new Set();

  for (const value of arr) {
    if (uniques.has(value)) {
      return value;
    }

    uniques.add(value);
  }

  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log(findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log(findFirstDuplicate([1, 2, 3, 4]));

  console.log("");

  console.log("Expecting: -1");
  console.log(findFirstDuplicate([]));

  console.log("");

  console.log("Expecting: -1");
  console.log(findFirstDuplicate([5]));

  console.log("");

  console.log("Expecting: 7");
  console.log(findFirstDuplicate([7, 1, 2, 3, 7]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
/******************************************************************
 * initialize an empty set called uniques
 * 
 * iterate through the input array:
 *    if the value is in uniques, return the value
 *    else add the value to the set
 * 
 * return -1 if no duplicate found during iteration
 * ***************************************************************/

// And a written explanation of your solution
/*******************************************************************
 * A Set is a data structure that contains only unique objects/values.
 * If I check if a value is in a Set before adding it, I'll know if there's
 * a duplicate. If there's a duplicate, I'll just return that value right 
 * away because that'll be the first duplicate in the input array. If we
 * exit iteration without returning anything, that means there's no duplicate, 
 * so we'll return -1
 * *******************************************************************/
