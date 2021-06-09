function findShortestString(arr) {
  // THE LONGER WAY OF DOING THE EXACT SAME THING THAT'S ON LINES 13-14
  // let shortest = arr[0];

  // arr.forEach(string => {
  //   if (string.length < shortest.length) {
  //     shortest = string;
  //   }
  // });

  // return shortest;

  return arr.reduce((shortest, string) => 
    string.length < shortest.length ? string : shortest);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log(findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log(findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log(findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  console.log("");

  console.log("Expecting: 'cat'");
  console.log(findShortestString(['cat']));

  // BENCHMARK HERE
  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    findShortestString(['flower', 'juniper', 'lily', 'dadelion']);
  }

  const avgTime = (Date.now() - startTime) / 1000;
  console.log(avgTime);
}

module.exports = findShortestString;

// Please add your pseudocode to this file
/****************************************************************************
 * store the first string from the array in a variable called shortest
 * 
 * iterate over the array:
 *    if the length of the current string < shortest:
 *        shortest = current string
 * 
 * return shortest
******************************************************************************/

// And a written explanation of your solution
/****************************************************************************
 * We can get the first occurrence of the shortest string by storing the first
 * string in the input array in a variable. As we iterate over the array, we 
 * check if the current string is shorter than the shortest string. If it is, 
 * we store the current string as the shortest string. Since we are checking if
 * subsequent strings are shorter than the shortest string, we will always return
 * the first occurrence of the shorest string. If we iterated over a string of
 * equal length to the shortest string, the value stored wouldn't change.
 ******************************************************************************/