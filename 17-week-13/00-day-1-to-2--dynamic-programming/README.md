# Day 1-2: Dynamic Programming

## Dynamic Programming

Dynamic Programming (DP) is an algorithmic technique for solving an optimization problem by breaking it down into simpler subproblems and utilizing the fact that the optimal solution to the overall problem depends upon the optimal solution to its subproblems.

## Task

Revisit the Fibonacci series. Go back to your old solutions (iterative and recursive). If the iterative solution keeps a whole array of values, modify it to only keep track of the data it needs. Next, modify the recursive solution to count the number of stack frames. Copy this solution and modify it to use cached values to avoid repeating recursive calls with the same value. Benchmark each version and compare.

Find the nth element in the Fibonacci series. The Fibonacci sequence starts with a 0 followed by a 1. After that, every value is the sum of the two values preceding it. Here are the first seven values as an example: 0, 1, 1, 2, 3, 5, 8.

```
Input: 0
Output: 0

Input: 2
Output: 1

Input: 10
Output: 55
```

Use the language of your choosing. We've included starter files for some languages where you can pseudocode, explain your solution and code.

## Before you start coding:

1. Rewrite the problem in your own words
2. Validate that you understand the problem
3. Write your own test cases
4. Pseudocode
5. Code!

**_And remember, don't run our tests until you've passed your own!_**

## How to run your own tests

### Ruby

1. `cd` into the ruby folder
2. `ruby <filename>.rb`

### JavaScript

1. `cd` into the javascript folder
2. `node <filename>.js`

## How to run our tests

### Ruby

1. `cd` into the ruby folder
2. `bundle install`
3. `rspec`

### JavaScript

1. `cd` into the javascript folder
2. `npm i`
3. `npm test`
