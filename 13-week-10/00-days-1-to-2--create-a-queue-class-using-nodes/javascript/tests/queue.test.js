const { Node, Queue } = require('../queue');

describe("Queue", () => {
  describe("enqueue(data)", () => {
    it ("adds a new node to an empty queue and sets the front and rear correctly", () => {
      const queue = new Queue();
      queue.enqueue(1);

      expect(queue.front).toBeInstanceOf(Node);
      expect(queue.rear).toBe(queue.front);

      const front = queue.front;
      const rear = queue.rear;

      queue.enqueue(2);

      expect(queue.front).toBe(front);
      expect(queue.rear).not.toBe(rear);
      expect(queue.rear.data).toBe(2);
    })
  });

  describe("dequeue()", () => {
    it ("removes and returns the front of the queue and sets the front and rear correctly", () => {
      let queue = new Queue();

      expect(queue.dequeue()).toBeFalsy();

      queue = new Queue();
      queue.enqueue(1);
      let removed = queue.dequeue();

      expect(removed).toBeInstanceOf(Node);
      expect(removed.data).toBe(1);
      expect(queue.front).toBeFalsy();
      expect(queue.rear).toBe(queue.front);

      queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      removed = queue.dequeue();

      expect(removed).toBeInstanceOf(Node);
      expect(removed.data).toBe(1);
      expect(queue.front.data).toBe(2);
      expect(queue.rear).toBe(queue.front);

      queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      removed = queue.dequeue();

      expect(removed).toBeInstanceOf(Node);
      expect(removed.data).toBe(1);
      expect(queue.front.data).toBe(2);
      expect(queue.rear).not.toBe(queue.front);
    });
  });

  describe("peek()", () => {
    it ("returns the front of the queue without removing it", () => {
      const queue = new Queue();
      queue.enqueue(1);

      expect(queue.peek()).toBe(queue.front);
    });
  });

  describe("isEmpty()", () => {
    it ("returns true if the queue is empty, otherwise false", () => {
      const queue = new Queue();

      expect(queue.isEmpty()).toBe(true);

      queue.enqueue(1);

      expect(queue.isEmpty()).toBe(false);
    });
  });

  describe("size()", () => {
    it ("returns the number of nodes in the queue", () => {
      const queue = new Queue();

      expect(queue.size()).toBe(0);

      queue.enqueue(1);

      expect(queue.size()).toBe(1);

      queue.enqueue(2);

      expect(queue.size()).toBe(2);
    });
  });

  describe("target(data)", () => {
    it ("returns the distance from the front to the target, or -1 if not found", () => {
      const queue = new Queue();

      expect(queue.search(1)).toBe(-1);

      queue.enqueue(1);

      expect(queue.search(1)).toBe(0);

      queue.enqueue(2);

      expect(queue.search(2)).toBe(1);
      expect(queue.search(5)).toBe(-1);

      queue.enqueue(3);

      expect(queue.search(3)).toBe(2);
    });
  });
});
