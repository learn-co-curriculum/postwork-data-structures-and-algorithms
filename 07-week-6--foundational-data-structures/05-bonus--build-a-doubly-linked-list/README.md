# Bonus: Build a Doubly Linked List

Today we'll be implementing a Doubly Linked List. A Doubly Linked List is like a singly-linked list, except it has an extra attribute on each Node: a `prev` pointer that points to the previous Node.

![Linked List](./linked_list.png)

## Implement a Doubly Linked List

For this challenge, assume that only one Node is added at a time, including upon initialization of a new list.

### 1. Modify the `Node` Class

Each node should have a pointer called `prev` that points to the Node that comes before it. If no Node comes before it, it should be a falsy value, such as `null` in JS or `nil` in Ruby.

```
node = new Node('first')
node.prev
=> nil or null

node.prev = new Node('zeroth')
node.prev
=> Node with value 'zeroth'
```

### 2. Modify the `LinkedList` Class

Look through the methods and determine which need to be modified in order to ensure that a Node's `prev` attribute always points to the correct Node.

```
list = new LinkedList
list.add_first(new Node('zeroth'))
list.head
=> Node with value 'zeroth'
list.head.prev
=> nil or null

list.add_first(new Node('less than zero'))
list.head
=> Node with value 'less than zero'
list.head.next
=> Node with value 'zeroth'
list.head.next.prev
=> Node with value 'less than zero'

list.remove_first
list.head
=> Node with value 'zeroth'
list.head.prev
=> nil or null
```

Use the language of your choosing. We've included code from the original LinkedList implementation. You may also copy and paste your own.

We've also included the original LinkedList tests, so you can ensure that your code still functions correctly.

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
