# Days 3-4: Implement a Queue Class

A queue is a data structure where items are processed in first-in-first-out order (FIFO). It has two ends: a front and a rear. The front is where items are dequeued from first, while items at the rear are handled last. Items are added to the rear of the queue until the queue is full. A queue operates a lot like a queue at the checkout of a grocery store. Customers join at the end of the line and are served at the front of the line.

![grocery queue](./grocery_store.jpg)

We can implement a Queue class using an Array as the underlying data structure! Arrays provide all of the methods we need for the core functionality of a Queue. Some of the methods we'll be adding to our Queue class include: `enqueue`, `dequeue`, `peek`, `isEmpty`, and `print`.

However, it's important to note that an Array doesn't have to be the underlying data structure. It could be another data structure, such as a Linked List (don't worry if you don't know what that is). When calculating Big O for a Queue, we always need to consider what the underlying data structure is since that'll affect our calculations.

## Implement the Queue Class

The Queue class already has two attributes: the `queue` itself (an Array) and a `limit`, which is an Integer representing the total number of items allowed in the `queue` at one time.

Add the following methods to the class:

### `enqueue(item)`

`enqueue` adds an item to the back of the queue. If the queue is full, the item should not be pushed and an Error should be thrown.

### `dequeue`

`dequeue` removes the item at the front of the queue and returns it. Don't worry if `dequeue` is called on an empty queue. It's OK for it to return the default return value, such as `undefined` or `nil`.

### `peek`

`peek` returns the item at the front of the queue without removing it. If the queue is empty, use the default return value, e.g. `undefined` or `nil`.

### `isEmpty`

`isEmpty` returns `true` if the queue is empty, otherwise `false`.

### `isFull`

`isFull` returns `true` if no more space is available in the queue, otherwise `false`.

### `size`

`size` returns the number of items currently in the queue.

### `search(target)`

`search` returns an Integer representing how far the target item is from the front of the queue. If the item is not in the queue, return `-1`. Example:

```
// queue = 1, 2, 3, 4, 5 <- rear

queue.search(5) => 4
queue.search(4) => 3
queue.search(6) => -1
```

### `print`

`print` prints the contents of the queue. It does not return them! You may print them however you wish.

We've provided starter code for some languages. Choose whichever language you like. Once again, we recommend writing your own tests first and then running the test suites.

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
