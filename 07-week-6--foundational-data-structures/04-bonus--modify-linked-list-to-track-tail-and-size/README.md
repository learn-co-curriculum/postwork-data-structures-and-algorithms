# Bonus: Modify the Linked List to Track Tail and Size

Today we'll be modifying the Linked List we created earlier to track its `tail` and `size`. You can use your solution or ours as starter code. We've included ours in the starter files if you wish to use it.

Note that this is a pretty strange implementation of a Linked List and there are those who would say: "Ermahgerd! What have you done?!" We're trying to stretch our skills here: that's what we've done!

![Linked List](./linked_list.png)

## Refresher in Case You Forgot About Our Old List Friend

A Linked List is a data structure consisting of Nodes. The `head` Node denotes the start of the list. Each Node has two attributes: `value` and `next`. `value` stores the data we might be interested in retrieving, while `next` points to the next Node in the list. The last Node, called the `tail`, in the list points to nothing (e.g. `next` is `null`), and that's how we know it's the end!

We can use another class called `LinkedList` to track the `head` of the list.

## Modify the `LinkedList` Class

We'll be tracking the `tail` and `size` of the list. There are a number of ways to implement these features with varying time complexities. Create helper methods if needed. Make sure you can explain to yourself and others why you chose the approach you took.

For any method, such as adding or removing a Node, assume that only valid inputs will be provided, such as valid indices.

Also make the following assumptions:

- Upon initialization of a new list, a user might provide a Node that is already connected to other Nodes, i.e. the `head` Node being provided has a `next` attribute that points to another Node, and that Node might point to another Node.
- Any time a Node is added via any other method, such as `add_first` or `insert`, that Node is not yet connected to any other Nodes, i.e. its `next` value is `null` or `nil` or some other falsy value.

As you modify the class, think about what the time complexity is for any methods you add or modify.

We've included all of the original tests in the test suites to ensure all of the methods continue to work as expected as you modify them.

### 1. Track the `tail`

Add an attribute to `LinkedList` called `tail`. When an empty list is initialized, `tail` should be a falsy value, such as `null` or `nil`. As Nodes are added and removed, the `tail` should be updated to reflect the current `tail`. Think about which methods in the class may affect the `tail` of the list.

```
list = new LinkedList
list.tail
=> null or nil

node = new Node('it meee')
list.add_first(node)
list.tail
=> Node with value 'it meee'

list.remove_first
=> Node with value 'it meee'
list.tail
=> null or nil

another_list = new LinkedList(node)
another_list.tail
=> Node with value 'it meee'
```

### 2. Track the `size`

Add an attribute to `LinkedList` called `size`. When an empty list is initialized, `size` should be `0`. As Nodes are added and removed, the `size` should be updated to reflect the current `size`. Think about which methods in the class may affect the `size` of the list.

```
list = new LinkedList
list.size
=> 0

node = new Node('it meee')
list.add_first(node)
list.size
=> 1

list.remove_first
=> Node with value 'it meee'
list.size
=> 0

list.add_first(node)
list.add_first(new Node('it not meee'))
list.size
=> 2
```

### 3. Super Bonus Refactor

Once you can track the `tail` and `size` successfully, go through the `LinkedList` methods and see if you can refactor any to be more time-efficient.

Use the language of your choosing. We've included starter files for some languages where you can pseudocode, and explain your solution, and code.

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
