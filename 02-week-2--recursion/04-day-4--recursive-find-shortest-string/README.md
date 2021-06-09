# Day 4: Recursive Find Shortest String

Given an Array of strings, return the shortest string. If there is more than one string of that length, return the string that comes first in the list. The Array will have a minimum length of 1.

Once you're done solving the problem, calculate the average run time and compare it to the average run time for the iterative version.

```
Input: ['aaa', 'a', 'bb', 'ccc']
Output: 'a'

Input: ['cat', 'hi', 'dog', 'an']
Output: 'hi'

Input: ['flower', 'juniper', 'lily', 'dandelion']
Output: 'lily'
```

You may wish to convert your iterative solution to a recursive one. We've included our old solutions in Ruby and JavaScript below:

```ruby
def find_shortest_string(arr)
  arr.reduce do |shortest, string|
    string.length < shortest.length ? string : shortest
  end
end
```

```javascript
function findShortestString(arr) {
  return arr.reduce((shortest, string) =>
    string.length < shortest.length ? string : shortest
  );
}
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
