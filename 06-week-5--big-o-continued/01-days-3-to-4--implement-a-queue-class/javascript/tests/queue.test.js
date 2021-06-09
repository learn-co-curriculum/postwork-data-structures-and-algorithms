const Queue = require('../queue');
const queue = new Queue();
const queueWithItems = new Queue;
const fullQueue = new Queue();

queueWithItems.queue = [1, 2, 3, 4, 5];
fullQueue.queue = [0,1,2,3,4,5,6,7,8,9];

test('size() returns 0 when the queue is empty', () => {
  expect(queue.size()).toBe(0);
});

test('size() returns the correct number when the queue is not empty', () => {
  expect(queueWithItems.size()).toBe(5);
});

test('isEmpty() returns true when the queue is empty', () => {
  expect(queue.isEmpty()).toBe(true);
});

test('isEmpty() returns false when the queue has items', () => {
  expect(queueWithItems.isEmpty()).toBe(false);
});

test('isFull() returns false when the queue has less than 10 items', () => {
  expect(queue.isFull()).toBe(false);
  expect(queueWithItems.isFull()).toBe(false);
});

test('isFull() returns true when the queue has 10 items', () => {
  expect(fullQueue.isFull()).toBe(true);
});

test('peek() returns the frontmost item in the queue without removing it', () => {
  expect(queueWithItems.peek()).toBe(1);
  expect(queueWithItems.size()).toBe(5);
});

test('dequeue() returns the first item in the queue and removes it', () => {
  expect(queueWithItems.dequeue()).toBe(1);
  expect(queueWithItems.size()).toBe(4);
  queueWithItems.queue.unshift(1);
});

test('enqueue() pushes an item onto the queue if it\'s not full', () => {
  queueWithItems.enqueue(6);

  expect(queueWithItems.size()).toBe(6);
  expect(queueWithItems.peek()).toBe(1);
  queueWithItems.queue.pop();
});

test('enqueue() throws an exception if the queue is full', () => {
  expect(() => {
    fullQueue.enqueue(10);
  }).toThrow(Error);
});

test('search() returns the distance between the front and the target element', () => {
  expect(queueWithItems.search(5)).toBe(4);
  expect(queueWithItems.search(4)).toBe(3);
  expect(queueWithItems.search(1)).toBe(0);
});

test('search() returns -1 when the target is not in the queue', () => {
  expect(queueWithItems.search(7)).toBe(-1);
});

test('print() does not return the queue array itself', () => {
  expect(queue.print()).not.toBe(queue.queue);
});
