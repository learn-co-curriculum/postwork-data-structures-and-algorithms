function consecutiveSubstrings(string) {
  const stringArr = string.split('');
  const subs = [];

  stringArr.forEach((char, idx) => {
    subs.push(char);

    let fragment = char;

    stringArr.slice(idx + 1).forEach((letter) => {
      fragment = fragment + letter;
      subs.push(fragment);
    });
  });

  return subs;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log(consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log(consecutiveSubstrings('a'));

  console.log("");

  console.log("Expecting: []");
  console.log(consecutiveSubstrings(''));

  console.log("");

  console.log("Expecting: ['a', 'ab', 'b']");
  console.log(consecutiveSubstrings('ab'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
/*****************************************************************************
 * initialize an empty array called subs
 * 
 * iterate over string:
 *    push character onto subs
 *    initialize fragment and store character in it
 * 
 *    iterate over string starting one index ahead:
 *      add letter to fragment
 *      push fragment onto subs
 * 
 * return subs
 * ****************************************************************************/

// And a written explanation of your solution
/*****************************************************************************
 * We can get all of the consecutive substrings by iterating over the string. We
 * push that character onto an array. We also store that character in a variable,
 * which we'll use to store the rest of the following characters. Next, we iterate
 * over the rest of the string. Each time we encounter a new character, we add it
 * onto the variable and then push the variable onto the array.
 * ****************************************************************************/