const Stack = require('../stack');
const stack = new Stack();
const stackWithItems = new Stack;
const fullStack = new Stack();

stackWithItems.stack = [1, 2, 3, 4, 5];
fullStack.stack = [0,1,2,3,4,5,6,7,8,9];

test('size() returns 0 when the stack is empty', () => {
  expect(stack.size()).toBe(0);
});

test('size() returns the correct number when the stack is not empty', () => {
  expect(stackWithItems.size()).toBe(5);
});

test('isEmpty() returns true when the stack is empty', () => {
  expect(stack.isEmpty()).toBe(true);
});

test('isEmpty() returns false when the stack has items', () => {
  expect(stackWithItems.isEmpty()).toBe(false);
});

test('isFull() returns false when the stack has less than 10 items', () => {
  expect(stack.isFull()).toBe(false);
  expect(stackWithItems.isFull()).toBe(false);
});

test('isFull() returns true when the stack has 10 items', () => {
  expect(fullStack.isFull()).toBe(true);
});

test('peek() returns the last item on the stack without removing it', () => {
  expect(stackWithItems.peek()).toBe(5);
  expect(stackWithItems.size()).toBe(5);
});

test('pop() returns the last item on the stack and removes it', () => {
  expect(stackWithItems.pop()).toBe(5);
  expect(stackWithItems.size()).toBe(4);
  stackWithItems.push(5);
});

test('push() pushes an item onto the stack if it\'s not full', () => {
  stackWithItems.push(6);

  expect(stackWithItems.size()).toBe(6);
  expect(stackWithItems.peek()).toBe(6);
  stackWithItems.pop();
});

test('push() throws an exception if the stack is full', () => {
  expect(() => {
    fullStack.push(10);
  }).toThrow(Error);
});

test('search() returns the distance between the top and the target element', () => {
  expect(stackWithItems.search(5)).toBe(0);
  expect(stackWithItems.search(4)).toBe(1);
  expect(stackWithItems.search(1)).toBe(4);
});

test('search() returns -1 when the target is not in the stack', () => {
  expect(stackWithItems.search(7)).toBe(-1);
});

test('print() does not return the stack array itself', () => {
  expect(stack.print()).not.toBe(stack.stack);
});
