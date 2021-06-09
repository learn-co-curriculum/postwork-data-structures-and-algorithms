class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor(front = null) {
    this.front = front;
    this.rear = front;
  }

  // ADD NODE TO BACK OF QUEUE
  // USE DATA TO CREATE A NEW NODE AND ADD IT TO THE QUEUE
  enqueue(data) {

  }

  // REMOVE NODE FROM FRONT OF QUEUE AND RETURN IT
  dequeue() {

  }

  // RETURN NODE AT FRONT WITHOUT REMOVING IT
  peek() {

  }

  // RETURN TRUE IF QUEUE IS EMPTY, OTHERWISE FALSE
  isEmpty() {

  }

  // RETURN NUMBER OF NODES IN QUEUE, E.G. 10
  size() {

  }

  // RETURN INTEGER REPRESENTING HOW FAR TARGET IS FROM FRONT OF QUEUE
  // IF TARGET ISN'T IN QUEUE, RETURN -1
  search(target) {

  }
}

if (require.main === module) {
  // add your own tests in here
 
}

module.exports = {
  Node,
  Queue
};

// Write your Big O findings here

// Optional: Please add your pseudocode to this file
// Optional: And a written explanation of your solution
