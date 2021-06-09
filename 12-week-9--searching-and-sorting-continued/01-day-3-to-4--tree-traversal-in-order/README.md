# Days 3 to 4: In-Order Tree Traversal

![Binary search trees](./trees.png)

In-order tree traversal requires an algorithm that visits the left subtree first followed by the root, and then the right subtree. When using in-order traversal with a binary search tree (BST), the value of each node will be output in order from least to greatest. For the left tree above the output would be: 3, 5, 6, 10, 12, 16. For the tree on the right: 5, 30, 60. This algorithm can be programmed recursively or iteratively.

## Implement In-Order Traversal

For this exercise, your function will be called with the root node of a BST. Your algorithm should return an array containing the nodes' values in sorted order. Note that your algorithm should not be calling sort! It should traverse the tree nodes in order and add each value to the array that will be returned as it travels through the tree.

What is the time complexity of your solution?

_Hint: It might help to add a default parameter if solving this recursively._

```
      2
    /   \
  -10   20

in_order_traversal(root)
=> [-10, 2, 20]
```

```
     10
    /   \
   0    20
    \     \
     5     30

in_order_traversal(root)
=> [0, 5, 10, 20, 30]
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
