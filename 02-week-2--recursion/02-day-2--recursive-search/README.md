# Day 2: Recursive Search

Given an Array of values, use recursion to find the target value. Return `true` if found, otherwise `false`.

```
Input: [1, 2, 3], 2
Output: true

Input: [3, 2, 1], 4
Output: false
```

Sometimes it can help to solve the problem iteratively first, and then convert that to the recursive version. Here are two possible iterative solutions: one in Ruby and one in JS.

```ruby
def iterative_search(arr, target)
  arr.each do |value|
    return true if value == target
  end

  false
end
```

```js
function iterativeSearch(arr, target) {
  for (const value of arr) {
    if (value === target) {
      return true;
    }
  }

  return false;
}
```

There are many ways to solve this problem. We suggest starting with the bases cases. What are they?

Feeling stuck? Have a hint! Do you need to pass the whole array with every recursive call or just part of it?

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
