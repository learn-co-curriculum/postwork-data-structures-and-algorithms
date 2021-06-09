# Day 3: Recursive Fibonacci Series

Find the nth element in the Fibonacci series. The Fibonacci sequence starts with a 0 followed by a 1. After that, every value is the sum of the two values preceding it. Here are the first seven values as an example: 0, 1, 1, 2, 3, 5, 8.

```
Input: 0
Output: 0

Input: 2
Output: 1

Input: 10
Output: 55
```

If you solved this problem before iteratively, you may wish to convert that solution to a recursive version. Here are two iterative solutions - one in Ruby and one in JS:

```ruby
def fibonacci(n)
  return n if n < 2

  values = [0, 1]

  (n - 1).times do
    values << values[-1] + values[-2]
  end

  values.last
end
```

```javascript
function fibonacci(n) {
  if (n < 2) {
    return n;
  }

  const values = [0, 1];

  for (let i = 0; i < n - 1; ++i) {
    values.push(values[values.length - 1] + values[values.length - 2]);
  }

  return values[values.length - 1];
}
```

Hint: Code the base cases first.

Hint: You may wish to look up how the fibonacci sequence is expressed as a formula.

Hint: Start small. What needs to happen if n is 1 or n is 2?

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
