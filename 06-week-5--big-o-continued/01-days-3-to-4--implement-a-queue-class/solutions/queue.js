class Queue {
  constructor() {
    this.queue = [];
    // this is an arbitrary value to make testing easier
    // 1,024 would be way too high to test!
    this.limit = 10;
  }

  // add item to rear of queue if not full
  enqueue(item) {
    if (!this.isFull()) {
      this.queue.push(item);
    } else {
      throw new Error('Queue is full!');
    }
  }

  // remove item from front of queue
  dequeue() {
    return this.queue.shift();
  }

  // return item at front of queue without removing it
  peek() {
    return this.queue[0];
  }

  // return true if queue is empty, otherwise false
  isEmpty() {
    return this.size() === 0;
  }

  // return true if queue is full, otherwise false
  isFull() {
    return this.size() === this.limit;
  }

  // return number of items in queue
  size() {
    return this.queue.length;
  }

  // return -1 if item not in queue, otherwise integer representing 
  // how far it is from the front
  search(target) {
    return this.queue.indexOf(target);
  }

  // print contents of queue: do not return the queue itself!
  print() {
    console.log(this.queue.join(' -> '));
  }
}

if (require.main === module) {
  // add your own tests in here
  const queue = new Queue();

  console.log('size', queue.size());
  console.log('is empty?', queue.isEmpty());
  console.log('is full?', queue.isFull());
  console.log('find 5', queue.search(5));
  console.log('peek while empty', queue.peek());

  for (let i = 0; i < 5; ++i) {
    queue.enqueue(i);
  }

  console.log('ADD ITEMS 0 TO 4');
  console.log('size', queue.size());
  console.log('is empty?', queue.isEmpty());
  console.log('is full?', queue.isFull());
  console.log('find 3', queue.search(3));
  console.log('peek', queue.peek());
  queue.print();

  for (let i = 5; i < 10; ++i) {
    queue.enqueue(i);
  }

  console.log('ADD ITEMS 5 TO 9');
  console.log('size', queue.size());
  console.log('is empty?', queue.isEmpty());
  console.log('is full?', queue.isFull());
  console.log('find 3', queue.search(3));
  console.log('peek', queue.peek());
  queue.print();

  console.log('dequeue', queue.dequeue());
  console.log('size', queue.size());
  console.log('is empty?', queue.isEmpty());
  console.log('is full?', queue.isFull());
  console.log('peek', queue.peek());
  queue.print();

  console.log('GENERATE ERROR');
  queue.enqueue(10);

  try {
    queue.enqueue(11);
  } catch(err) {
    console.log(err);
    queue.print();
  }
}

module.exports = Queue;
