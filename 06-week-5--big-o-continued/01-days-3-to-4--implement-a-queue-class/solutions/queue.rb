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
    raise 'Queue is full' if isFull?

    @queue.push(item)
  end

  # remove item from front of queue and return it
  def dequeue
    @queue.shift
  end

  # return item at front of queue without removing it
  def peek
    @queue.first
  end

  # return true if queue is empty, otherwise false
  def isEmpty?
    size.zero?
  end

  # return true if queue is full, otherwise false
  def isFull?
    size === @limit
  end

  # return number of items in queue
  def size
    @queue.length
  end

  # return -1 if item not in queue, otherwise integer representing 
  # how far it is from the front
  def search(target)
    @queue.index(target) || -1
  end

  # print contents of queue: do not return the queue itself!
  def print
    puts @queue.join(' -> ')
  end
end

if __FILE__ == $PROGRAM_NAME
  queue = Queue.new;

  puts "'size': #{queue.size}"
  puts "'is empty?': #{queue.isEmpty?}"
  puts "'is full?': #{queue.isFull?}"
  puts "'find 5': #{queue.search(5)}"
  puts "'peek while empty': #{queue.peek}"

  (0...5).each do |num|
    queue.enqueue(num)
  end

  puts "'ADD ITEMS 0 TO 4'"
  puts "'size': #{queue.size}"
  puts "'is empty?': #{queue.isEmpty?}"
  puts "'is full?': #{queue.isFull?}"
  puts "'find 3': #{queue.search(3)}"
  puts "'peek': #{queue.peek}"
  queue.print

  (5..9).each do |num|
    queue.enqueue(num)
  end

  puts 'ADD ITEMS 5 TO 9'
  puts "'size': #{queue.size}"
  puts "'is empty?': #{queue.isEmpty?}"
  puts "'is full?': #{queue.isFull?}"
  puts "'find 3': #{queue.search(3)}"
  puts "'peek': #{queue.peek}"
  queue.print

  puts "'dequeue': #{queue.dequeue}"
  puts "'size': #{queue.size}"
  puts "'is empty?': #{queue.isEmpty?}"
  puts "'is full?': #{queue.isFull?}"
  puts "'peek': #{queue.peek}"
  queue.print

  puts'GENERATE ERROR'
  queue.enqueue(10)

  begin
    queue.enqueue(11)
  rescue StandardError => e
    puts e.message
    queue.print
  end
end

