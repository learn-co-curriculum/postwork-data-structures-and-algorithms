class Stack
  attr_reader :limit

  def initialize
    @stack = []
    # this is an arbitrary value to make testing easier
    # 1,024 would be way too high to test!
    @limit = 10
  end

  # add item to top of stack if not full
  # if full, throw error
  def push(item)
    raise 'Stack is full' if isFull?

    @stack.push(item)
  end

  # remove item from top of stack and return it
  def pop
    @stack.pop
  end

  # return item at top of stack without removing it
  def peek
    @stack.last
  end

  # return true if stack is empty, otherwise false
  def isEmpty?
    size.zero?
  end

  # return true if stack is full, otherwise false
  def isFull?
    size === @limit
  end

  # return number of items in stack
  def size
    @stack.length
  end

  # return -1 if item not in stack, otherwise integer representing 
  # how far it is from the top
  def search(target)
    @stack.each_with_index do |item, idx|
      return size - idx - 1 if item == target
    end

    -1
  end

  # print contents of stack: do not return the stack itself!
  def print
    puts @stack.join(' <- ')
  end
end

if __FILE__ == $PROGRAM_NAME
  stack = Stack.new;

  puts "'size': #{stack.size}"
  puts "'is empty?': #{stack.isEmpty?}"
  puts "'is full?': #{stack.isFull?}"
  puts "'find 5': #{stack.search(5)}"
  puts "'peek while empty': #{stack.peek}"

  (0...5).each do |num|
    stack.push(num)
  end

  puts "'ADD ITEMS 0 TO 4'"
  puts "'size': #{stack.size}"
  puts "'is empty?': #{stack.isEmpty?}"
  puts "'is full?': #{stack.isFull?}"
  puts "'find 3': #{stack.search(3)}"
  puts "'peek': #{stack.peek}"
  stack.print

  (5..9).each do |num|
    stack.push(num)
  end

  puts 'ADD ITEMS 5 TO 9'
  puts "'size': #{stack.size}"
  puts "'is empty?': #{stack.isEmpty?}"
  puts "'is full?': #{stack.isFull?}"
  puts "'find 3': #{stack.search(3)}"
  puts "'peek': #{stack.peek}"
  stack.print

  puts "'pop': #{stack.pop}"
  puts "'size': #{stack.size}"
  puts "'is empty?': #{stack.isEmpty?}"
  puts "'is full?': #{stack.isFull?}"
  puts "'peek': #{stack.peek}"
  stack.print

  puts'GENERATE ERROR'
  stack.push(9)

  begin
    stack.push(10)
  rescue StandardError => e
    puts e.message
    stack.print
  end
end

