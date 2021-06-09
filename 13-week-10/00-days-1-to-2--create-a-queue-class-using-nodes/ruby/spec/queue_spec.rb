require './queue'

describe "Queue" do
  context "#enqueue(data)" do
    it "adds a new node to an empty queue and sets the front and rear correctly" do
      queue = Queue.new
      queue.enqueue(1)

      expect(queue.front).to be_a(Node)
      expect(queue.rear).to be(queue.front)

      front = queue.front
      rear = queue.rear

      queue.enqueue(2)

      expect(queue.front).to be(front)
      expect(queue.rear).not_to be(rear)
      expect(queue.rear.data).to be(2)
    end
  end

  context "#dequeue" do
    it "removes and returns the front of the queue and sets the front and rear correctly" do
      queue = Queue.new

      expect(queue.dequeue).to be_nil

      queue = Queue.new
      queue.enqueue(1)
      removed = queue.dequeue

      expect(removed).to be_a(Node)
      expect(removed.data).to be(1)
      expect(queue.front).to be_nil
      expect(queue.rear).to be(queue.front)

      queue = Queue.new
      queue.enqueue(1)
      queue.enqueue(2)
      removed = queue.dequeue

      expect(removed).to be_a(Node)
      expect(removed.data).to be(1)
      expect(queue.front.data).to be(2)
      expect(queue.rear).to be(queue.front)

      queue = Queue.new
      queue.enqueue(1)
      queue.enqueue(2)
      queue.enqueue(3)
      removed = queue.dequeue

      expect(removed).to be_a(Node)
      expect(removed.data).to be(1)
      expect(queue.front.data).to be(2)
      expect(queue.rear).not_to be(queue.front)
    end
  end

  context "#peek" do
    it "returns the front of the queue without removing it" do
      queue = Queue.new
      queue.enqueue(1)

      expect(queue.peek).to be(queue.front)
    end
  end

  context "#isEmpty" do
    it "returns true if the queue is empty, otherwise false" do
      queue = Queue.new

      expect(queue.isEmpty).to be true

      queue.enqueue(1)

      expect(queue.isEmpty).to be false
    end
  end

  context "#size" do
    it "returns the number of nodes in the queue" do
      queue = Queue.new

      expect(queue.size).to be(0)

      queue.enqueue(1)

      expect(queue.size).to be(1)

      queue.enqueue(2)

      expect(queue.size).to be(2)
    end
  end

  context "#target(data)" do
    it "returns the distance from the front to the target, or -1 if not found" do
      queue = Queue.new

      expect(queue.search(1)).to be(-1)

      queue.enqueue(1)

      expect(queue.search(1)).to be(0)

      queue.enqueue(2)

      expect(queue.search(2)).to be(1)
      expect(queue.search(5)).to be(-1)

      queue.enqueue(3)

      expect(queue.search(3)).to be(2)
    end
  end
end
