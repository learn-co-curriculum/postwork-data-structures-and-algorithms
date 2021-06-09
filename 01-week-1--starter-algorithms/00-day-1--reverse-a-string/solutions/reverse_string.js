function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i > -1; --i) {
    reversed = reversed + str[i];
  }

  return reversed;
}

console.log("Expecting: 'ih'");
console.log(reverseString('hi'));

console.log("");

console.log("Expecting: 'ybabtac'");
console.log(reverseString('catbaby'));

console.log("");

console.log("Expecting: 'a'");
console.log(reverseString('a'));

console.log("");

console.log("Expecting: '' (empty string)");
console.log(reverseString(''));

// Please add your pseudocode to this file
/**************************************************
 * initialize a variable called reversed with an empty string
 * 
 * iterate backwards through the input string:
 *    set reversed to reversed + current character
 * 
 * return reversed
 * ************************************************/


// And a written explanation of your solution
/**************************************************
 * If I iterate over the input string backwards, I should be able
 * to add whichever character I'm currently iterating over onto
 * my result string (""). For example, if the string is "ab", I'll iterate
 * over "b" first, add that to my result ("b"), and then iterate over
 * "a", and add that to my result next ("ba").
 * ************************************************/
