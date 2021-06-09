let fibs = [];

function fibonacci(num) {
    if (num === 0 || num === 1) return num
    if (fibs[num]) return fibs[num]
    fibs[num] = fibonacci(num - 1) + fibonacci(num - 2)
    return fibs[num]
}

if (require.main === module) {
// add your own tests in here
console.log("Expecting: 0");
console.log("=>", fibonacci(0));

console.log("");

console.log("Expecting: 1");
console.log("=>", fibonacci(2));

console.log("");

console.log("Expecting: 55");
console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file

// fib(4) = fib(3) + fib(2)
// fib(2), fib(3) were already saved into mem, so will fib(4)

// fib(5) = fib(4) + fib(3)
// The previously saved fib(3) and fib(4) will be used to avoid duplicated calculation and call stacks

// And a written explanation of your solution

// In a nutshell, DP is a efficient way in which we can use memoziation to cache visited data to faster retrieval later on.

// This implementation makes use of mem as an array (or hash) to store value of an already computed num. This will greatly reduce the number of call stack and duplicated computation in the call stack.

// Time complexity O(N), Space O(N)

