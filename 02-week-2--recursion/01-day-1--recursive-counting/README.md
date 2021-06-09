# Day 1: Recursive Counting

Let's ease into recursion. For this challenge, we'd like you to convert the following while loop that counts to a recursive method that counts. We've included while loops for Ruby and JS below. Your method is successful if it prints numbers 0-9. Remember: it must call itself!

```ruby
count = 0

while count < 10
  puts count
  count += 1
end
```

```js
let count = 0;

while (count < 10) {
  console.log(count);
  ++count;
}
```

If you get a stack overflow, just breathe. We all get them - the trick is to get used to them and carry on solving the problem.

Use the language of your choosing. We've included starter files for some languages where you can pseudocode, explain your solution and code.

## Before you start coding:

You may wish to optionally write pseudocode and an explanation of your solution for this problem.

Feel free to run our tests whenever you like.

## How to run your code

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
