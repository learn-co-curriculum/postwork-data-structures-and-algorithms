# Days 1 to 2: Create a Queue Class Using Nodes

Previously, we created a Queue class using an Array as the underlying data structure. For this challenge we'll recreate the Queue Class but with Nodes instead, similar to a Linked List. We'll then calculate the time complexity using Big O notation for each of our Queue class methods, so we can see how this change affects the runtime.

## What Is a Queue?

A queue is a data structure where items are processed in first-in-first-out order (FIFO). It has two ends: a front and a rear. The front is where items are dequeued from first, while items at the rear are handled last. Items are added to the rear of the queue. A queue operates a lot like a queue at the checkout of a grocery store. Customers join at the end of the line and are served at the front of the line.

## Implement the Queue Class

Our Queue class will track its front node and its rear node. We will assume that nodes will be added to the queue one at a time. They will also be removed one at a time. Each node will have two attributes: `data`, which tracks the value the node stores, and `next`, which points to the next node in the queue. In Ruby, the next attribute will be called `next_node`, since next is a reserved keyword and we'd prefer to not use confusing syntax.

Let's implement the following methods for the Queue class:

### `enqueue(data)`

`enqueue` adds a node to the back of the queue using the provided data.

```
queue = new Queue()

queue.enqueue("first")
queue.front
=> Node, data: "first", next: nil

queue.rear
=> Node, data: "first", next: nil
```

### `dequeue`

`dequeue` removes the node at the front of the queue and returns it. Don't worry if `dequeue` is called on an empty queue. It's OK for it to return the default return value, such as `undefined` or `null` or `nil`.

```
queue = new Queue()

queue.enqueue("first")
queue.dequeue()
=> Node, data: "first", next: nil
```

### `peek`

`peek` returns the node at the front of the queue without removing it. If the queue is empty, use the default return value, e.g. `undefined` or `nil`.

```
queue = new Queue()

queue.enqueue("first")
queue.peek()
=> Node, data: "first", next: nil

queue.front
=> Node, data: "first", next: nil
```

### `isEmpty`

`isEmpty` returns `true` if the queue is empty, otherwise `false`.

```
queue = new Queue()

queue.isEmpty()
=> true
```

### `size`

`size` returns the number of nodes currently in the queue.

```
queue = new Queue()
queue.size()
=> 0

queue.enqueue("first")
queue.size()
=> 1
```

### `search(target)`

`search` returns an Integer representing how far the target node is from the front of the queue. If the node is not in the queue, return `-1`. Example:

```
// queue = 1, 2, 3, 4, 5 <- rear

queue.search(5) => 4
queue.search(4) => 3
queue.search(6) => -1
```

## Calculate Time Complexity

When you are done implementing the class, determine the time complexity for the following methods and compare that to the time complexity for when an Array is used as the underlying data structure:

- `enqueue`: Time complexity when using an Array is O(1)
- `dequeue`: Time complexity when using an Array is O(n)
- `peek`: Time complexity when using an Array is O(1)
- `search`: Time complexity when using an Array is O(n)

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
