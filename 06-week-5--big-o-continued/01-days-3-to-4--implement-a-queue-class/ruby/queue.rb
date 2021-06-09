class Queue
  attr_reader :limit

  def initialize
    @queue = []
    # this is an arbitrary value to make testing easier
    # 1,024 would be way too high to test!
    @limit = 10
  end

  # add item to rear of queue if not full
  # if full, throw error
  def enqueue(item)
  end

  # remove item from front of queue and return it
  def dequeue
  end

  # return item at front of queue without removing it
  def peek
  end

  # return true if queue is empty, otherwise false
  def isEmpty?
  end

  # return true if queue is full, otherwise false
  def isFull?
  end

  # return number of items in queue
  def size
  end

  # return -1 if item not in queue, otherwise integer representing 
  # how far it is from the front
  def search(target)
  end

  # print contents of queue: do not return the queue itself!
  def print
  end
end

if __FILE__ == $PROGRAM_NAME
  # Don't forget to add your tests!
end

