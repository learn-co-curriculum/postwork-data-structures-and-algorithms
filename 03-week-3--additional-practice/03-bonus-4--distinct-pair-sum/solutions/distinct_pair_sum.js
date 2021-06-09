function distinctPairSum(arr, k) {
  const pairs = {};

  arr.slice(0, -1).forEach((num, idx) => {
    const nextValue = arr[idx + 1];

    if (num + nextValue === k && 
      pairs[num] === undefined && 
      pairs[nextValue] === undefined) {
        pairs[num] = [num, nextValue];
    }
  });

  return Object.values(pairs);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log(distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log(distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));

  console.log("");

  console.log("Expecting: []");
  console.log(distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 100));

  console.log("");

  console.log("Expecting: []");
  console.log(distinctPairSum([], 100));

  console.log("");

  console.log("Expecting: [[59, 41]]");
  console.log(distinctPairSum([59, 41], 100));

  console.log("");

  console.log("Expecting: []");
  console.log(distinctPairSum([59], 100));

  console.log("");

  console.log("Expecting: [[0, 0], [10, -10], [3, -3]]");
  console.log(distinctPairSum([1, 0, 0, 10, -10, 5, 4, 3, -3, -3], 0));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
/***********************************************************************************
 * initialize empty object called pairs
 * 
 * iterate over array up to second to last item:
 *  if current item and next item are not keys in pairs and they sum to k:
 *    add current item as key in pairs with value of [current item, next item]
 * 
 * return values stored in pairs
************************************************************************************/

// And a written explanation of your solution
/***********************************************************************************
 * Objects only allow keys with unique values. If we iterate over the array, and on 
 * each iteration, check if the current value and next value add up to k, we can then
 * check if either of those values is a key in pairs. If neither is a key in pairs, we
 * add the current element being iterated over as the key and the pair as the value. 
 * When the iteration is over, we just return the values from pairs.
 ************************************************************************************/