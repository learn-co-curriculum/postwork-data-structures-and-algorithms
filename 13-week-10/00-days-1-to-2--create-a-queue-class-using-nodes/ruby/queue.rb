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

  end

  # REMOVE NODE FROM FRONT OF QUEUE AND RETURN IT
  def dequeue

  end

  # RETURN NODE AT FRONT WITHOUT REMOVING IT
  def peek

  end

  # RETURN TRUE IF QUEUE IS EMPTY, OTHERWISE FALSE
  def isEmpty

  end

  # RETURN NUMBER OF NODES IN QUEUE, E.G. 10
  def size

  end

  # RETURN INTEGER REPRESENTING HOW FAR TARGET IS FROM FRONT OF QUEUE
  # IF TARGET ISN'T IN QUEUE, RETURN -1
  def search(target) 

  end
end

if __FILE__ == $PROGRAM_NAME
  # Add your own tests in here
end

# Write your Big O findings here

# Optional: Please add your pseudocode to this file
# Optional: And a written explanation of your solution
