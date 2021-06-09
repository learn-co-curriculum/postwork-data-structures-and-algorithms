class Stack {
  constructor() {
    this.stack = [];
    // this is an arbitrary value to make testing easier
    // 1,024 would be way too high to test!
    this.limit = 10;
  }

  // add item to top of stack if not full
  // if full throw error
  push(item) {

  }

  // remove item from top of stack and return it
  pop() {

  }

  // return item at top of stack without removing it
  peek() {

  }

  // return true if stack is empty, otherwise false
  isEmpty() {

  }

  // return true if stack is full, otherwise false
  isFull() {

  }

  // return number of items in stack
  size() {

  }

  // return -1 if item not in stack, otherwise integer representing 
  // how far it is from the top
  search(target) {

  }

  // print contents of stack: do not return the stack itself!
  print() {
    
  }
}

if (require.main === module) {
  // add your own tests in here
}

module.exports = Stack;
