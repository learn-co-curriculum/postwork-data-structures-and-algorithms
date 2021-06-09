# Days 1-2: Bubble Sort

Bubble sort is considered one of the simpler sorting algorithms, and it is highly efficient at handling already sorted lists. While it performs well for sorted lists and short lists, it does not perform well for longer lists. As a result, the sorting functions built into programming languages do not use bubble sort.

```
Input: [3, 2, 1, 4]
Output: [1, 2, 3, 4]

Input: []
Output: []
```

## How Does Bubble Sort Work?

Bubble sort sorts a list in place. In other words, it does not create a new Array; instead, it modifies the Array that was passed to the function as an argument.

To achieve this in-place sorting, bubble sort swaps elements when they are in the incorrect order. When no swaps occur, the Array is considered sorted. This algorithm iterates over an Array over and over until it is sorted. If the input Array is already sorted, it iterates over it only once because no swaps occur.

Let's look at a step-by-step example with an unsorted list:

```
Input: [2, 3, 1]
// 2 is less than 3, so it stays where it is
// But 1 is less than 3 so those two values are swapped
Pass 1: [2, 1, 3]

// 1 is less than 2, so those values are swapped
// 2 is less than 3, so those values stay as is
Pass 2: [1, 2, 3]

// On this final pass, no swaps occur, so Array is sorted
Pass 3: [1, 2, 3]
```

And here's what happens with a sorted list:

```
Input: [1, 2, 3]

// No swaps occur when iterating over Array
// Input Array is returned as is
Pass 1: [1, 2, 3]
```

## Implement Bubble Sort

Given what you know about bubble sort, implement your own version. Remember, we need to sort the Array in place, so there's no need to declare a new Array and push to it: be sure to return the input Array with its values in order.

Lastly, you may wish to look up how to swap values in whichever language you choose to solve the problem in. Some languages, like Ruby and JavaScript, provide shortcuts!

When you write up the explanation of your solution, don't forget to calculate Big O for its time complexity.

Also take some time to think about what you learned by solving this challenge. What problem solving techniques did you use, coding or otherwise? How can they help you solve other problems?

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
