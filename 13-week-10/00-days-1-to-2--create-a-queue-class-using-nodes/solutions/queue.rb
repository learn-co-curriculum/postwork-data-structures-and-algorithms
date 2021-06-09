class Node
  attr_accessor :data, :next_node

  def initialize(data = nil, next_node = nil)
    @data = data
    @next_node = next_node
  end
end

class Queue
  attr_reader :front, :rear

  def initialize(front = nil)
    @front = front
    @rear = front
  end

  # ADD NODE TO BACK OF QUEUE
  # USE DATA TO CREATE A NEW NODE AND ADD IT TO THE QUEUE
  def enqueue(data) 
    node = Node.new(data)

    if @rear.nil?
      @front = node
      @rear = node
      return
    end

    @rear.next_node = node
    @rear = node
  end

  # REMOVE NODE FROM FRONT OF QUEUE AND RETURN IT
  def dequeue
    return @front if front.nil?

    oldFront = @front

    @front = oldFront.next_node

    if @front.nil? || @front.next_node.nil?
      @rear = @front
    end

    oldFront
  end

  # RETURN NODE AT FRONT WITHOUT REMOVING IT
  def peek
    @front
  end

  # RETURN TRUE IF QUEUE IS EMPTY, OTHERWISE FALSE
  def isEmpty
    @front.nil?
  end

  # RETURN NUMBER OF NODES IN QUEUE, E.G. 10
  def size
    count = 0
    node = @front

    while node
      count += 1
      node = node.next_node
    end

    count
  end

  # RETURN INTEGER REPRESENTING HOW FAR TARGET IS FROM FRONT OF QUEUE
  # IF TARGET ISN'T IN QUEUE, RETURN -1
  def search(target) 
    node = @front
    distance = 0

    while node 
      if node.data === target 
        return distance
      end

      distance += 1
      node = node.next_node
    end

    -1
  end
end

if __FILE__ == $PROGRAM_NAME
  # Add your own tests in here
end

# Write your Big O findings here
# `enqueue`: Time complexity when using an Array is O(1), with nodes O(1)
# `dequeue`: Time complexity when using an Array is O(n), with nodes O(1)
# `peek`: Time complexity when using an Array is O(1), with nodes O(1)
# `search`: Time complexity when using an Array is O(n), with nodes O(n)

# Optional: Please add your pseudocode to this file
# Optional: And a written explanation of your solution
