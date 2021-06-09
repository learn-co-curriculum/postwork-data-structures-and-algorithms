# Day 5: Find Shortest String

Given an Array of strings, return the shortest string. If there is more than one string of that length, return the string that comes first in the list. The Array will have a minimum length of 1.

```
Input: ['aaa', 'a', 'bb', 'ccc']
Output: 'a'

Input: ['cat', 'hi', 'dog', 'an']
Output: 'hi'

Input: ['flower', 'juniper', 'lily', 'dandelion']
Output: 'lily'
```

**Benchmarking**

For this task, we are also asking you to calculate the average runtime of your solution. In other words, you run it a bunch of times and then divide the total time it took for the solution to run by the number of times it ran.

Here is the pseudocode for creating your own basic benchmarking procedure:

```
store the current time in a variable called start time

loop 1000 times:
  execute the method using a small input, e.g. three items if input is an Array
  execute the method using a larger input, e.g. 100 items if input is an Array

average runtime = (current time - start time) / 2000
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
