function fibonacci(n) {
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log(fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log(fibonacci(10));

  console.log("");

  console.log("Expecting: 1");
  console.log(fibonacci(1));

  console.log("");

  console.log("Expecting: 6765");
  console.log(fibonacci(20));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
/************************************************************************************** 
* if n is less than 2 return n
*
* return last value in sequence + second to last value in sequence
***************************************************************************************/

// And a written explanation of your solution
/************************************************************************************** 
* We can use the same base case as the iterative version: if n is less than 2, just
* return n, since 0 and 1 are the first values in the series. After that we need to
* calculate the next value by adding up the two previous values. If we recurse until
* n equals 0 or 1, we'll hit the base case and start returning values, which can then
* be added together. For example, if we start with n = 2, our recursive call will be
* fibonacci(1) + fibonacci(0). Both sides of the equation will hit the base case. The 
* left side will return 1 and the right side will return 0, resulting in a total of 1.
***************************************************************************************/
